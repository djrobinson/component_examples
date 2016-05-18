(function(){
  'use strict';

  angular
    .module('exampleApp')
    .component('todo', {
      template:
      `

        <li>
          <div>
            {{$ctrl.todo.name}}<button>Complete</button>
          </div>
        </li>

      `,
      bindings: {
        todo: "<"
      },
      controller: todoController
    });

  function todoController() {

  }
})();