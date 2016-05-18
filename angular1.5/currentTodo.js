(function(){
  'use strict';

  angular
    .module('exampleApp')
    .component('currentTodo', {
      template:
      `
        <h5>Current Todo</h5>
      `,
      bindings: {
        current: "<"
      },
      controller: currentController
    });

  function currentController() {

  }
})();