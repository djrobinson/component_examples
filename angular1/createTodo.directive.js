(function(){
  'use strict';

  angular
    .module('exampleApp')
    .directive('createTodo', function(){
      return {
        template: `
          <h1>Create Todo</h1>
          <form>
            <input ng-model="newTodo" type="text" />
            <button ng-click="$ctrl.createChildTodo(newTodo)">Create</button>
          </form>
          <input type="text" ng-model="$ctrl.current" />
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
      ctrl.onCreate({todo: todo});
    };
  }

})();