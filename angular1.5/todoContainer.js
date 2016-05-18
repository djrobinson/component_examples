(function(){
  'use strict';

  angular
    .module('exampleApp')
    .component('todoContainer', {
      template:
      `
        <h1>Todo Container</h1>
        <create-todo on-create="$ctrl.createTodo()"></create-todo>
        <button ng-click="$ctrl.createTodo(todo)">click</button>
        <current-todo></current-todo>
        <todo-list todos="$ctrl.todos"></todo-list>
      `,
      bindings: {

      },
      controller: containerController
    });

  function containerController() {
    var ctrl = this;

    ctrl.createTodo = function(todo){
      console.log("working");
    };

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