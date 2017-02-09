
(function(){
    app.controller = {

        addTask: function () {
            var text = document.getElementById("newTask").value;
            app.model.addTask(text);
            app.view.showNewTask(text);
        },

        removeTask: function (target) {
            var targetText = target.children[0].innerText;
            app.model.removeTask(targetText);
            app.view.removeTask(target);
        }

    }
})();