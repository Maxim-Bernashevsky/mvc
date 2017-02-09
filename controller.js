
(function(){
    app.controller = {

        addTask: function () {
            var text = document.getElementById("newTask").value;
            if(text.match(/\w/)){
                app.model.addTask(text);
                app.view.showNewTask(text);
            }else {
                app.view.emptyInput();
            }
        },

        removeTask: function (target) {
            var targetText = target.children[0].innerText;
            app.model.removeTask(targetText);
            app.view.removeTask(target);
        }

    }
})();