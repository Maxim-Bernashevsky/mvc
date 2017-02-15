import {model} from './model.js';
import {view} from './view';
export let controller = {

     addTask: function () {
         const text = document.getElementById("newTask")['value'];
         if(text['match'](/[A-zА-я0-9]/)){
             model.addTask(text);
             view.showNewTask(text);
         }else {
             view.emptyInput();
         }
     },

     removeTask: function (target) {
         const targetText = target.children[0].innerText;
         model.removeTask(targetText);
         view.removeTask(target);
     }

}