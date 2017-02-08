
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


        var list = document.querySelector("ul");
        list.addEventListener("click", function (event) {
            var target = event.target;
            if (target.tagName != 'I') return;
            app.controller.delTask(target.parentNode);
        });
        
    }


    return {}
})();

