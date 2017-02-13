import {controller} from './controller';
import {view} from './view';
import {model} from './model.js';
import './main.css';

let app = (function(){

    function init() {
        event();
        main();
    }
    init();

    function main() {

    }

    function event() {
        var el = document.getElementById("btnNewTask");
        el.addEventListener("click", function(event){
            event.preventDefault();
            controller.addTask();
        });

        var list = document.querySelector("ul");
        list.addEventListener("click", function (event) {
            var target = event.target;
            if (target.tagName != 'I') return;
            controller.removeTask(target.parentNode);
        });

        window.onload = function(){
            var todos = model.getTasks();
            todos.forEach(function (li) {
                view.showNewTask(li);
            })

        };
    }

    return {}
})();



