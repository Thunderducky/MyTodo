var newTodoEl = document.getElementById("new-todo");
var newTodoForm = document.getElementById("new-todo-form");
var todosDiv = document.getElementById("todos");

var todos = JSON.parse(localStorage.getItem("todos")) || []

function renderTodos(){
    todosDiv.innerHTML = "";
    for(var i = 0; i < todos.length; i++){
        var todo = todos[i];
       var todoDiv = document.createElement("div");
       todoDiv.setAttribute("class", "todo")
       var todoH2 = document.createElement("h2");
       todoH2.textContent = todo;
       var todoButton = document.createElement("button");
       todoButton.textContent = "Done";
       todoButton.setAttribute("data-index", i);
        todoDiv.appendChild(todoH2);
        todoDiv.appendChild(todoButton);
        todosDiv.appendChild(todoDiv);  
    }
}

newTodoForm.addEventListener("submit", function(event){
    event.preventDefault();
    var value = newTodoEl.value;
    newTodoEl.value = "";
    todos.push(value);
    renderTodos();
    localStorage.setItem("todos", JSON.stringify(todos));
})

todosDiv.addEventListener("click", function(event){
    if(event.target.matches("button")){
        // Do something with that
        var button = event.target;
        var index = button.getAttribute("data-index");
        console.log(index);
        todos.splice(index, 1);
        renderTodos();
        localStorage.setItem("todos", JSON.stringify(todos));
    }
})

renderTodos();