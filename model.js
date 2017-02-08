(function(){
    app.model = {

        calc: function(){
            var text = document.getElementById("newTask").value;
            var li = document.createElement("li");
            li.innerHTML = "<span>"+text+"</span><i>X</i>";
            app.view.showNewTask(li);
        },
        delTask: function (target) {
            app.view.delTask(target);
        }
    }
})()