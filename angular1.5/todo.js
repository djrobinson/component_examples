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
          </div>
        </li>
      `,
      bindings: {
        todo: "<",
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