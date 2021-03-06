"use strict";
var todos = [];
exports.model = {
    addTask: function (text) {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.push(text);
        localStorage.setItem("todos", JSON.stringify(todos));
    },
    removeTask: function (targetText) {
        todos = JSON.parse(localStorage.getItem("todos"));
        var targetNum = todos.indexOf(targetText);
        todos.splice(targetNum, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
    },
    getTasks: function () {
        return JSON.parse(localStorage.getItem("todos"));
    }
};
//# sourceMappingURL=model.js.map