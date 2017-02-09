app.model = (function () {

    return {
        addTask: function (text) {
            localStorage.setItem(text, text);
        },
        removeTask: function (targetText) {
            localStorage.removeItem(targetText);
        },
        setTasks: function () {
            return localStorage;
        }
    }
})()
