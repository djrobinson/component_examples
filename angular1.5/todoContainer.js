(function(){
  'use strict';

  angular
    .module('exampleApp')
    .component('todoContainer', {
      template:
      `
        <h1>Todo Container</h1>
        <create-todo
          on-create="$ctrl.createTodo(todo)"
          >
        </create-todo>

        <h3>Todo List</h3>
        <ul>
          <todo
            ng-repeat="todo in $ctrl.todos"
            todo="todo"
            >
          </todo>
        </ul>
      `,
      controller: containerController
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

    ctrl.createTodo = function(todo){
      console.log(todo);
      ctrl.todos.push(todo);
    };
  }
})();