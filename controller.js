(function(){
    app.controller = {
        addTask: function () {
            app.model.taskFun().addTask();
        },
        delTask: function (target) {
            app.model.taskFun().removeTask(target);
        }
    }
})();