"use strict";

var taskInput = document.querySelector('#task'); //the task input text field

var form = document.querySelector('#task-form'); //The form at the top

var filter = document.querySelector('#filter'); //the task filter text field

var taskList = document.querySelector('.collection'); //The ul

var clearBtn = document.querySelector('.clear-tasks'); //the all task clear button

var reloadBtn = document.querySelector('.fa'); // the reload button

var query = document.querySelector('.collection'); //      I've used querySelector for the .collection

var allLi = query.getElementsByTagName('li'); //I've used by TagName method to identify every collection-item
//Declare DB var

var DB; // Add Event Listener [on Load]

document.addEventListener('DOMContentLoaded', function () {
  function displayTaskList() {
    filter.addEventListener('keyup', filterTasks); // clear the previous task list

    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    } // create the object store


    var objectStore = DB.transaction('tasks').objectStore('tasks');

    objectStore.openCursor().onsuccess = function (e) {
      // assign the current cursor
      var cursor = e.target.result;

      if (cursor) {
        var li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value)); //Create new element for the link

        var dateID = Date.now();
        var link = document.createElement('a');
        link.className = "delete-item secondary-content"; // link.innerHTML = '<i class="fa fa-remove"></i>';

        link.innerHTML = "<i class=\"fa fa-remove\"></i>  &nbsp; <a href=\"edit.html?id=".concat(cursor.value.id, "\"><i class=\"fa fa-edit\"></i> </a>");
        var dateDiv = document.createElement("div");
        dateDiv.className = "dateDiv";
        dateDiv.style.display = "none";
        dateDiv.textContent = dateID;
        li.appendChild(dateDiv);
        li.setAttribute('data-task-id', cursor.value.id);
        li.appendChild(link);
        taskList.appendChild(li); // Create text node and append it 

        li.appendChild(document.createTextNode(cursor.value.taskname));
        taskInput.value = '';
        cursor["continue"]();
      }
    };
  } //all code will reside here 


  var TasksDB = indexedDB.open("tasks", 1);

  TasksDB.onsuccess = function () {
    DB = TasksDB.result;
    console.log('Database created.');
    console.log(DB);
    displayTaskList();
  };

  TasksDB.onerror = function () {
    console.log('Some Error has happned.');
  };

  TasksDB.onupgradeneeded = function (e) {
    // the event will be the database
    var db = e.target.result; // create an object store, 
    // keypath is going to be the Indexes

    var objectStore = db.createObjectStore('tasks', {
      keyPath: 'id',
      autoIncrement: true
    }); // createindex: 1) field name 2) keypath 3) options

    objectStore.createIndex('taskname', 'taskname', {
      unique: false
    });
    console.log('Database ready and fields created!');
  };

  form.addEventListener('submit', addNewTask);

  function addNewTask(e) {
    e.preventDefault();

    if (taskInput.value === '') {
      taskInput.style.borderColor = 'red';
      return;
    }

    taskInput.style.borderColor = 'green'; //add to DB
    // create a new object with the form info

    var newTask = {
      taskname: taskInput.value,
      date: new Date()
    }; // Insert the object into the database 

    var transaction = DB.transaction(['tasks'], 'readwrite');
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
  } // Remove task event [event delegation]


  taskList.addEventListener('click', removeTask);

  function removeTask(e) {
    Number(e.target.parentElement.parentElement.getAttribute('data-task-id'));

    if (e.target.parentElement.classList.contains('delete-item')) {
      if (confirm('Are You Sure about that ?')) {
        // get the task id
        var taskID = Number(e.target.parentElement.parentElement.getAttribute('data-task-id'));
        var transaction = DB.transaction(['tasks'], 'readwrite'); // use a transaction

        var objectStore = DB.transaction('tasks', 'readwrite').objectStore('tasks');
        objectStore["delete"](taskID);

        transaction.oncomplete = function () {
          e.target.parentElement.parentElement.remove();
        };
      }
    }
  } //making the filter function


  function filterTasks() {
    var key = document.getElementById('filter').value; //key now has the filtered value

    for (var i = 0; i < allLi.length; i++) {
      if (new RegExp(key).test(allLi[i].textContent)) {
        allLi[i].style.display = "";
      } else {
        allLi[i].style.display = "none";
      }
    }
  }

  clearBtn.addEventListener('click', clearAllTasks); //clear tasks 

  function clearAllTasks() {
    if (confirm("Are you sure you want to clear all tasks?")) {
      //Create the transaction and object store
      var transaction = DB.transaction("tasks", "readwrite");
      var tasks = transaction.objectStore("tasks"); // clear the the table

      tasks.clear(); //repaint the UI

      displayTaskList();
      console.log("Tasks Cleared !!!");
    }
  }

  $(".dropdown-trigger").dropdown();
  var ascendingBtn = document.querySelector(".ascending-btn");
  var descendingBtn = document.querySelector(".descending-btn");
  var collectionSorted = document.querySelector(".collection-sorted"); //ascending Sort function

  function ascendSort() {
    var unorderedList = document.querySelectorAll(".collection-item");
    var orderingArray = new Array();
    var currentTime = Date.now();

    for (var i = 0; i < unorderedList.length; i++) {
      listItem = unorderedList[i].querySelector(".dateDiv");
      taskListTime = listItem.textContent;
      var differenceTime = currentTime - taskListTime;
      orderingArray[i] = [differenceTime, i];
    }

    orderingArray.sort();

    for (var _i = 0; _i < unorderedList.length; _i++) {
      collectionSorted.appendChild(unorderedList[orderingArray[_i][1]]);
    }

    for (var _i2 = 0; _i2 < unorderedList.length; _i2++) {
      taskList.appendChild(unorderedList[orderingArray[_i2][1]]);
    }
  } // descending sort function


  function descendSort() {
    var unorderedList = document.querySelectorAll(".collection-item");
    var orderingArray = new Array();
    var currentTime = Date.now();

    for (var i = 0; i < unorderedList.length; i++) {
      listItem = unorderedList[i].querySelector(".dateDiv");
      taskListTime = listItem.textContent;
      var differenceTime = currentTime - taskListTime;
      orderingArray[i] = [differenceTime, i];
    }

    orderingArray.sort();
    orderingArray.reverse();

    for (var _i3 = 0; _i3 < unorderedList.length; _i3++) {
      collectionSorted.appendChild(unorderedList[orderingArray[_i3][1]]);
    }

    for (var _i4 = 0; _i4 < unorderedList.length; _i4++) {
      taskList.appendChild(unorderedList[orderingArray[_i4][1]]);
    }
  }

  ascendingBtn.addEventListener("click", ascendSort);
  descendingBtn.addEventListener("click", descendSort);
});