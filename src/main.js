"use strict";
var controller_1 = require("./controller");
var view_1 = require("./view");
var model_1 = require("./model");
require("./main.css");
var app = (function () {
    function init() {
        event();
        main();
    }
    init();
    function main() {
    }
    function event() {
        var el = document.getElementById("btnNewTask");
        el.addEventListener("click", function (event) {
            event.preventDefault();
            controller_1.controller.addTask();
        });
        var list = document.querySelector("ul");
        list.addEventListener("click", function (event) {
            var target = event.target;
            if (target.tagName != 'I') {
                return;
            }
            controller_1.controller.removeTask(target.parentNode);
        });
        window.onload = function () {
            var todos = model_1.model.getTasks();
            todos.forEach(function (li) {
                view_1.view.showNewTask(li);
            });
        };
    }
    return {};
})();
