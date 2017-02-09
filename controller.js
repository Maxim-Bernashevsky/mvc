(function(){
    app.controller = {
        addTask: function () {
            app.view.setNewTask();
        },
        removeTask: function (target) {
            app.view.removeTask(target);
        }
    }
})();