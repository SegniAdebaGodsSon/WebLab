export default class DB {
    
    addToDB(task){
        console.log(task);
        let tasks = this.getFromDB();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }


    getFromDB(){
        let tasks;
        if(localStorage.getItem('tasks') === null){
            tasks = [];
        }else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks;
    }


    removeFromDB(task){
        let tasks = this.getFromDB();
        if(tasks.length != 0 ){
            tasks = tasks.filter(t => t.addValue !== task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    clearDB(){
        localStorage.clear();
    }
}