"use strict";
var model_1 = require('./model');
var view_1 = require('./view');
exports.controller = {
    addTask: function () {
        var text = document.getElementById("newTask")['value'];
        if (text['match'](/[A-zА-я0-9]/)) {
            model_1.model.addTask(text);
            view_1.view.showNewTask(text);
        }
        else {
            view_1.view.emptyInput();
        }
    },
    removeTask: function (target) {
        var targetText = target.children[0].innerText;
        model_1.model.removeTask(targetText);
        view_1.view.removeTask(target);
    }
};
//# sourceMappingURL=controller.js.map