(function(){
  'use strict';

  angular
    .module('exampleApp')
    .directive('todo', function(){
      return{
        template:
        `
          <li>
            <div class="todo">
              <p>{{todo.name}}<p>
              <button ng-click="ctrl.complete(todo)">Complete</button>
            </div>
          </li>
        `,
        controllerAs: 'ctrl',
        controller: todoController,
        bindToController: true
      };
    });

  function todoController() {
    var ctrl = this;

    ctrl.complete = function(todo){
      todo.done = !todo.done;
      console.log(todo);
    };
  }
})();