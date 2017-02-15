"use strict";
import {controller} from './controller';
import {view} from './view';
import {model} from './model';
import './main.css';

let app = (function () {
    function init() {
        event();
        main();
    }
    init();
    function main() {
    }
    function event() {

        let el = document.getElementById("btnNewTask");
        el.addEventListener("click", (event: MouseEvent) => {
            event.preventDefault();
            controller.addTask();
        });

        const list = document.querySelector("ul");
        list.addEventListener("click", (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.tagName != 'I') {
                return;
            }
            controller.removeTask(target.parentNode);
        });

        window.onload = function () {
            let todos = model.getTasks();
            todos.forEach(function (li) {
                view.showNewTask(li);
            });
        };
    }
    return {};
})();
