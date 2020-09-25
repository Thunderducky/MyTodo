var newTodoEl = document.getElementById("new-todo");
var newTodoForm = document.getElementById("new-todo-form");


newTodoForm.addEventListener("submit", function(event){
    event.preventDefault();
    var value = newTodoEl.value;
    console.log(value);
})