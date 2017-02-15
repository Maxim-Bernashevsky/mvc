export let model = (function () {




    let todos: string[] = [];
    return {



        addTask: function (text: string) {
            todos = JSON.parse(localStorage.getItem("todos"));
            todos.push(text);
            localStorage.setItem("todos", JSON.stringify(todos));
        },

        removeTask: function (targetText) {
            todos = JSON.parse(localStorage.getItem("todos"));
            const targetNum = todos.indexOf(targetText);
            todos.splice(targetNum, 1);
            localStorage.setItem("todos", JSON.stringify(todos));
        },

        getTasks: function () {
            return JSON.parse(localStorage.getItem("todos"));
        }
    }


})()
