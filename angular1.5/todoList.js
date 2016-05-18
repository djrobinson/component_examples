(function(){
  'use strict';

  angular
    .module('exampleApp')
    .component('todoList', {
      template: `
      <h1>Todo List</h1>
      <todo ng-repeat="todo in $ctrl.todos" todo="todo"><todo>
      `,
      bindings: {
      },
      controller: listController
    });

  function listController() {
    var ctrl = this;

    ctrl.todos = [
      {
        name: 'take out garbage',
        done: false
      },
      {
        name: 'clean car',
        done: false
      }
    ];


  }
})();