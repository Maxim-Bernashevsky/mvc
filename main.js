
var app = (function(){

    function init() {
        main();
        event();
    }
    function main() {

    }

    function event() {
        var el = document.getElementById("btnNewTask");
        el.onclick = function(){
            event.preventDefault();
            app.controller.addTask();
        };

        var list = document.querySelectorAll("li i");
        list.forEach(function (btnDel) {
            btnDel.onclick = function () {
                app.controller.delTask(this.parentNode);
            }

        })
    }


    return {}
})();

