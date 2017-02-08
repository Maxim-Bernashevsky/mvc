(function(){
    app.controller = {
        addTask: function () {
            app.model.addTask();
        },
        delTask: function (target) {
            app.model.removeTask(target);
        }
    }
})();