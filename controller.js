(function(){
    app.controller = {
        addTask: function () {
            var li = app.model.calc();
            app.view.showNewTask(li);
        },
        delTask: function (target) {
            app.view.delTask(target);
        }
    }
})();