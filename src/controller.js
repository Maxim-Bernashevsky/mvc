import {model} from './model.js';
import {view} from './view';
export let controller = {

        addTask: function () {
            var text = document.getElementById("newTask").value;
            if(text.match(/[A-zА-я0-9]/)){
                model.addTask(text);
                view.showNewTask(text);
            }else {
                view.emptyInput();
            }
        },

        removeTask: function (target) {
            var targetText = target.children[0].innerText;
            model.removeTask(targetText);
            view.removeTask(target);
        }

}