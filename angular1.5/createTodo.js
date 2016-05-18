(function(){
  'use strict';

  angular
    .module('exampleApp')
    .component('createTodo', {
      template: `
        <h1>Create Todo</h1>
        <form>
          <input ng-model="newTodo" type="text" />
          <button ng-click="$ctrl.createChildTodo(newTodo)">Create</button>
        </form>
        <input type="text" ng-model="$ctrl.current" />
      `,
      bindings: {
        onCreate: '&',
        current: '<'
      },
      controller: createController
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