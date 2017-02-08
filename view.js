(function(){

    app.view = {
        showNewTask: function (li) {
            var list = document.getElementById("list");
            list.appendChild(li);
        },
        delTask: function (target) {
            target.remove();
        }
    }
})()