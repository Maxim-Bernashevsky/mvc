
(function(){
    app.view = {

        showNewTask: function (text) {
            var li = document.createElement("li");
            li.innerHTML = "<span>"+text+"</span><i>X</i>";
            var list = document.getElementById("list");
            list.appendChild(li);
        },

        removeTask: function (target) {
            target.remove();
        }
    }
})()