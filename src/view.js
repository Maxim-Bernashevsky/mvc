"use strict";
exports.view = {
    showNewTask: function (text) {
        var li = document.createElement("li");
        li.innerHTML = "<span>" + text + "</span><i>X</i>";
        var list = document.getElementById("list");
        list.appendChild(li);
    },
    removeTask: function (target) {
        target.remove();
    },
    emptyInput: function () {
        document.getElementById("newTask").classList.add("empty");
        document.getElementById("labelNewTask").innerText = "Заполните текст инпута";
        document.getElementById("labelNewTask").style.color = "red";
        setTimeout(function () {
            document.getElementById("newTask").classList.remove("empty");
        }, 300);
        setTimeout(function () {
            document.getElementById("labelNewTask").innerText = "Предстоит сделать";
            document.getElementById("labelNewTask").style.color = "";
        }, 2000);
    }
};
