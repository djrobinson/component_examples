(function(){
  'use strict';

  angular
    .module('exampleApp')
    .directive('todoContainer', function(){
      return {
        scope: {},
        template:
        `
          <h1>Todo Container</h1>
          <create-todo todos="ctrl.todos"></create-todo>

          <h3>Todo List</h3>
          <ul>
            <div ng-repeat="todo in ctrl.todos">
              <todo></todo>
            </div>
          </ul>
        `,
        controllerAs: 'ctrl',
        controller: containerController,
        bindToController: true
      };
    });

  function containerController() {
    var ctrl = this;

    ctrl.todos = [
      {
        name: 'Take out garbage',
        done: false
      },
      {
        name: 'Clean car',
        done: false
      }
    ];
  }
})();