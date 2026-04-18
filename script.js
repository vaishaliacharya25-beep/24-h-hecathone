let input = document.getElementById("to do list");

input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        addTask();
    }
});

function addTask(){
    let task = input.value;

    if(task === ""){
        alert("please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `<span onclick = "toggleTask(this)">${task}</span>
    <button onclick = "deleteTask(this)"></button>`;

    document.getElementsByName(tasklist).appendchild(li);

    input.value = "";

}

function deletetask(button){
    button.parsentElent.remove();
    }


    function toggleTask(task) {
        task.classlist.toggle("completed");
    }

