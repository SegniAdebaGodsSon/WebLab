"use strict";

var _database = _interopRequireDefault(require("./database.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var db = new _database["default"](); // Define UI Variables 

var taskInput = document.querySelector('#task'); //the task input text field

var form = document.querySelector('#task-form'); //The form at the top

var filter = document.querySelector('#filter'); //the task filter text field

var taskList = document.querySelector('.collection'); //The UL

var clearBtn = document.querySelector('.clear-tasks'); //the all task clear button

var sortRef = document.querySelector('#dropdown1');
var reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 
// Add Event Listener  [Form , clearBtn and filter search input ]
// form submit 

form.addEventListener('submit', addNewTask); // Clear All Tasks

clearBtn.addEventListener('click', clearAllTasks); //   Filter Task 

filter.addEventListener('keyup', filterTasks); // Remove task event [event delegation]

taskList.addEventListener('click', removeTask); // Event Listener for reload 

reloadIcon.addEventListener('click', reloadPage); // Event listner for sort

sortRef.addEventListener('click', sort);
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems);
  render(db.getFromDB().sort(function (a, b) {
    return a.addTime - b.addTime;
  }));
}); // Or with jQuery

$('.dropdown-trigger').dropdown(); // Add New  Task Function definition 

function addNewTask(e) {
  e.preventDefault(); //disable form submission
  // Check empty entry

  if (taskInput.value === '') {
    taskInput.style.borderColor = "red";
    return;
  }

  render(db.getFromDB().sort(function (a, b) {
    return a.addTime - b.addTime;
  }));
  taskInput.style.borderColor = 'green'; //add to DB
  // create a new object with the form info

  var newTask = {
    taskname: taskInput.value,
    date: new Date()
  }; // Insert the object into the database 

  var transaction = _database["default"].transaction(['tasks'], 'readwrite');

  var objectStore = transaction.objectStore('tasks');
  var request = objectStore.add(newTask); // on success

  request.onsuccess = function () {
    form.reset();
    displayTaskList();
  };

  transaction.oncomplete = function () {
    console.log('New appointment added'); //displayTaskList();
  };

  transaction.onerror = function () {
    console.log('There was an error, try again!');
  };
}

function render(tasks) {
  taskList.innerHTML = '';
  tasks.forEach(function (task) {
    var li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task.addValue));
    var link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
  });
}

function sort(e) {
  e.preventDefault();
  var Id = null;

  if (e.target.tagName === "A") {
    Id = e.target.parentNode.id;
  } else {
    Id = e.target.id;
  }

  console.log("ID ", Id);

  if (Id === "desc") {
    render(db.getFromDB().sort(function (a, b) {
      return b.addTime - a.addTime;
    }));
  } else {
    render(db.getFromDB().sort(function (a, b) {
      return a.addTime - b.addTime;
    }));
  }
} // Clear Task Function definition 


function clearAllTasks() {
  //This is the first way 
  // taskList.innerHTML = '';
  //  Second Wy 
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  db.clearDB();
} // Filter tasks function definition 


function filterTasks(e) {
  /*  
  Instruction for Handling the Search/filter 
  
  1. Receive the user input from the text input 
  2. Assign it to a variable so the us can reuse it 
  3. Use the querySelectorAll() in order to get the collection of li which have  .collection-item class 
  4. Iterate over the collection item Node List using forEach
  5. On each element check if the textContent of the li contains the text from User Input  [can use indexOf]
  6 . If it contains , change the display content of the element as block , else none
  
  
  */
  var list = _toConsumableArray(document.querySelectorAll('.collection-item'));

  var query = document.querySelector('#filter').value.toLocaleLowerCase();
  console.log('query: ', query);
  list.filter(function (node) {
    console.log('node: ', node.textContent);

    if (node.textContent.toLocaleLowerCase().includes(query)) {
      node.style.display = 'block';
    } else {
      node.style.display = 'none';
    }
  });
} // Remove Task function definition 


function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure about that ?')) {
      // filter out the deleted value from the li
      // listItems = listItems.filter(item => item.addValue !== e.target.parentElement.parentElement.textContent)
      db.removeFromDB(e.target.parentElement.parentElement.textContent); // delete from the DOM

      e.target.parentElement.parentElement.remove();
    }
  }
} // Reload Page Function 


function reloadPage() {
  //using the reload fun on location object 
  location.reload();
}