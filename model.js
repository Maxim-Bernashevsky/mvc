(function(){
    app.model = {

        taskFun: function () {
            var tasks = [];
            
            return {
                addTask: function () {
                    var text = document.getElementById("newTask").value;
                    tasks.push(text);
                    app.view.showNewTask(text);
                },
                removeTask: function (target) {
                    var targetText = target.children[0].innerText;
                    var targetNum = tasks.indexOf(targetText);
                    delete tasks[targetNum];
                    app.view.delTask(target);
                },
                setTasks: function () {
                    return tasks;
                }
            }
        }




    }
})()