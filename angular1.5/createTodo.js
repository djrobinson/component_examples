(function(){
  'use strict';

  angular
    .module('exampleApp')
    .component('createTodo', {
      template: `
        <h1>Create Todo</h1>
        <form>
          <input ng-model="newTodo" type="text" />
          <input ng-click="$ctrl.createChildTodo(newTodo)" type="submit" />
        </form>
      `,
      bindings: {
        onCreate: '&'
      },
      controller: createController
    });

  function createController() {
    var ctrl = this;

    ctrl.createChildTodo = function(todoName){
      console.log(todoName);
      var todo = {
        name: todoName,
        done: false
      };
      ctrl.onCreate({todo: todo});
    };
  }

})();