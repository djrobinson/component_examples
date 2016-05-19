(function(){
  'use strict';

  angular
    .module('exampleApp')
    .directive('createTodo', function(){
      return {
        template: `
          <h1>Create Todo</h1>
          <form>
            <input ng-model="ctrl.newTodo" type="text" />
            <button ng-click="ctrl.createChildTodo(ctrl.newTodo)">Create</button>
          </form>
        `,
        scope: {
          todos: '='
        },
        controllerAs: 'ctrl',
        controller: createController,
        bindToController: true
      };
    });
  function createController() {
    var ctrl = this;
    ctrl.createChildTodo = function(todoName){
      var todo = {
        name: todoName,
        done: false
      };
      ctrl.todos.push(todo);
      ctrl.newTodo = "";
    };
  }

})();