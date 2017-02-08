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
            var targetText = target.children[0].innerText;
            var targetNum = this.tasks.indexOf(targetText);
            delete this.tasks[targetNum];
            app.view.delTask(target);
        }
    }
})()