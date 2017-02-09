app.model = (function () {
    var tasks = [];

    return {
        addTask: function (text) {
            tasks.push(text);
        },
        removeTask: function (targetText) {
            var targetNum = tasks.indexOf(targetText);
            tasks.splice(targetNum, 1);
        },
        setTasks: function () {
            return tasks;
        }
    }
})()
