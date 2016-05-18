(function(){
  'use strict';

  angular
    .module('exampleApp')
    .component('createTodo', {
      template: `
        <h1>Create Todo</h1>
        <form>
          <input type="text" />
          <input type="submit" />
        </form>
      `,
      bindings: {

      },
      controller: createController
    });

  function createController() {

  }
})();