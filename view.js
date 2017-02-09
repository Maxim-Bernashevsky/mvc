(function(){

    app.view = {
        showNewTask: function (text) {
            var li = document.createElement("li");
            li.innerHTML = "<span>"+text+"</span><i>X</i>";
            var list = document.getElementById("list");
            list.appendChild(li);
        },
        removeTask: function (target) {
            var targetText = target.children[0].innerText;
            target.remove();
            app.model.removeTask(targetText);
        },
        setNewTask: function () {
            var text = document.getElementById("newTask").value;
            app.model.addTask(text);
            app.view.showNewTask(text);
        }
    }
})()