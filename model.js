(function(){
    app.model = {

        tasks: [],
        addTask: function () {
            var text = document.getElementById("newTask").value;
            this.tasks.push(text);
            app.view.showNewTask(text);
        },
        removeTask: function (target) {
            //console.dir(target.children[0].innerText);
            app.view.delTask(target);

        }
    }
})()