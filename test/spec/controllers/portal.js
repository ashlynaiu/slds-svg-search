'use strict';

describe('Controller: PortalCtrl', function () {

  // load the controller's module
  beforeEach(module('ashlynTemplate'));

  var PortalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortalCtrl = $controller('PortalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
