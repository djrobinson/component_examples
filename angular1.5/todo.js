(function(){
  'use strict';

  angular
    .module('exampleApp')
    .component('todo', {
      template: `
        <div>{{$ctrl.todo.name}}</div>
      `,
      bindings: {
        todo: "<"
      },
      controller: todoController
    });

  function todoController() {

  }
})();