(function(){
  'use strict';

  angular
    .module('exampleApp')
    .component('todo', {
      template:
      `

        <li>
          <div>
            {{$ctrl.todo.name}}
            <button ng-click="$ctrl.complete()">Complete</button>
            <button ng-click="$ctrl.updateCurrent()">Set Priority</button>
          </div>
        </li>

      `,
      bindings: {
        todo: "<",
        current: "<",
        setCurrent: "&"
      },
      controller: todoController
    });

  function todoController() {
    var ctrl = this;

    ctrl.complete = function(){
      ctrl.todo.done = !ctrl.todo.done;
    };

    ctrl.updateCurrent = function(){
      ctrl.setCurrent({currentTodo: ctrl.todo});
    };
  }
})();