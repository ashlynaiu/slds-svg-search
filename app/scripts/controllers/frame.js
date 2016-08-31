'use strict';

/**
 * @ngdoc function
 * @name sldsSVG.controller:MainCtrl
 * @description
 * # FrameCtrl
 * Controller of the sldsSVG
 */
angular.module('sldsSVG')
  .controller('FrameCtrl', function($state, $scope){
    $scope.$state = $state;
});
