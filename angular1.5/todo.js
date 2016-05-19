(function(){
  'use strict';

  angular
    .module('exampleApp')
    .component('todo', {
      template:
      `
        <li>
          <div class="todo">
            <p>{{$ctrl.todo.name}}<p>
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
  }
})();