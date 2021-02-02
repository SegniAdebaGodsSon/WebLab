// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button

const sortRef = document.querySelector('#dropdown1');

const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 

// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);
// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);
//   Filter Task 
filter.addEventListener('keyup', filterTasks);
// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);
// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);
// Event listner for sort
sortRef.addEventListener('click', sort)


let listItems = [];

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);

    taskList.innerHTML = "";
  });

  // Or with jQuery

  $('.dropdown-trigger').dropdown();



// Add New  Task Function definition 
function addNewTask(e) {

    e.preventDefault(); //disable form submission


    // Check empty entry
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";
        return;
    }

    render(listItems.sort((a,b) => a.addTime - b.addTime));

    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value.trim()));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to UL 
    taskList.appendChild(li);

    listItems.push({'addValue': taskInput.value.trim(), 'addTime': new Date().getTime()});
}

function render(tasks){
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task.addValue));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        taskList.appendChild(li);
    });

}

function sort(e){
    e.preventDefault();
    let Id = null;
    if(e.target.tagName === "A"){
        Id = e.target.parentNode.id;
    }else{
        Id = e.target.id;
    }

    console.log("ID ", Id)
    if(Id === "desc"){
        render(listItems.sort((a, b) => b.addTime - a.addTime));
    }else{
        render(listItems.sort((a, b) => a.addTime - b.addTime));
    }
}


// Clear Task Function definition 
function clearAllTasks() {

    //This is the first way 
    // taskList.innerHTML = '';

    //  Second Wy 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    listItems = []
}



// Filter tasks function definition 
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

    let list = [... document.querySelectorAll('.collection-item')];
    let query = document.querySelector('#filter').value.toLocaleLowerCase();
    console.log('query: ',query)
    list.filter(node => {
        console.log('node: ', node.textContent)
        if(node.textContent.toLocaleLowerCase().includes(query)){
            node.style.display = 'block';
        }else{
            node.style.display = 'none';  
        }
    });

}

// Remove Task function definition 
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            // filter out the deleted value from the li
            listItems = listItems.filter(item => item.addValue !== e.target.parentElement.parentElement.textContent)
            // delete from the DOM
            e.target.parentElement.parentElement.remove();
        }

    }
}


// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}