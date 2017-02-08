
var app = (function(){

    function init() {
        main();
        event();
    }
    init();

    function main() {  }

    function event() {
        var el = document.getElementById("btnNewTask");
        el.addEventListener("click", function(event){
            event.preventDefault();
            app.controller.addTask();
        });

        var list = document.querySelectorAll("li i");
        list.forEach(function (btnDel) {
            btnDel.addEventListener("click", function(){
                app.controller.delTask(this.parentNode);
            });
        });
    }


    return {}
})();

