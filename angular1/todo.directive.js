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
              <p>{{ctrl.item.name}}<p>
              <button ng-click="ctrl.complete(ctrl.item)">Complete</button>
            </div>
          </li>
        `,
        scope: {
          item: '='
        },
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