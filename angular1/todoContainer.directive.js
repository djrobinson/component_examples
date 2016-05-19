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
          <create-todo
            on-create="ctrl.createTodo(todo)"
            current="ctrl.current"
            >
          </create-todo>

          <current-todo current="ctrl.current"></current-todo>

          <h3>Todo List</h3>
          <ul>
            <todo
              ng-repeat="todo in $ctrl.todos"
              todo="todo"
              set-current="ctrl.setCurrent(currentTodo)"
              >
            </todo>
          </ul>
        `,
        controllerAs: 'ctrl',
        controller: containerController
      };
    });

  function containerController() {
    this.todos = [
      {
        name: 'Take out garbage',
        done: false
      },
      {
        name: 'Clean car',
        done: false
      }
    ];

    this.setCurrent = setCurrent;
    this.createTodo = createTodo;

    this.current = "Dingo";

    function setCurrent(currentTodo){
      console.log("set curr");
      ctrl.current = currentTodo;
    }

    function createTodo(todo){
      console.log(todo);
      ctrl.todos.push(todo);
    }
  }
})();