(function(){
    app.controller = {
        addTask: function () {
            app.model.calc();
        },
        delTask: function (target) {
            app.model.delTask(target);
        }
    }
})();