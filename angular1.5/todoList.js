(function(){
  'use strict';

  angular
    .module('exampleApp')
    .component('todoList', {
      template:
      `
        <h3>Todo List</h3>
        <ul>
          <todo ng-repeat="todo in $ctrl.todos" todo="todo"></todo>
        </ul>
      `,
      bindings: {
        todos: "<"
      },
      controller: listController
    });

  function listController() {
    var ctrl = this;


    ctrl.current = ctrl.todos[0];


  }
})();