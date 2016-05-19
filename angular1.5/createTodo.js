(function(){
  'use strict';

  angular
    .module('exampleApp')
    .component('createTodo', {
      template:
      `
        <h1>Create Todo</h1>
        <form>
          <input ng-model="newTodo" type="text" />
          <button ng-click="$ctrl.createTodo(newTodo)">Create</button>
        </form>
      `,
      bindings: {
        onCreate: '&'
      },
      controller: createController
    });

  function createController() {
    var ctrl = this;

    ctrl.createTodo = function(todoName){
      var todo = {
        name: todoName,
        done: false
      };
      ctrl.onCreate({todo: todo});
      ctrl.newTodo = "";
    };
  }
})();