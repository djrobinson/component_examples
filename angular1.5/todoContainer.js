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
          current="$ctrl.current"
          >
        </create-todo>

        <current-todo current="$ctrl.current"></current-todo>

        <h3>Todo List</h3>
        <ul>
          <todo
            ng-repeat="todo in $ctrl.todos"
            todo="todo"
            set-current="$ctrl.setCurrent(currentTodo)"
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

    ctrl.current = "Dingo";

    ctrl.setCurrent = function(currentTodo){
      console.log("set curr");
      ctrl.current = currentTodo;
    };

    ctrl.createTodo = function(todo){
      console.log(todo);
      ctrl.todos.push(todo);
    };


  }
})();