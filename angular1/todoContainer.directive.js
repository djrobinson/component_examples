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
          <ul ng-repeat="item in ctrl.todos">
            <todo item="item"></todo>
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