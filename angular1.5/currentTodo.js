(function(){
  'use strict';

  angular
    .module('exampleApp')
    .component('currentTodo', {
      template:
      `
        <h5>Current Todo</h5>
        <div ng-show="$ctrl.current.name">
          <p>{{$ctrl.current.name}}</p>
          <p>{{$ctrl.current.done}}</p>
        </div>
        <div ng-hide="$ctrl.current.name">
          <p>{{$ctrl.current}}</p>
        </div>
      `,
      bindings: {
        current: "<"
      }
    });

})();