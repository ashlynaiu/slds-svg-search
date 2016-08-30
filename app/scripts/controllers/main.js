'use strict';

/**
 * @ngdoc function
 * @name angularTemplate.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ashlynTemplate
 */
angular.module('sldsSVG')
  .controller('MainCtrl', function ($scope, $state, svgCustoms, svgActions) {
		$scope.svgCustoms = [];
		$scope.svgActions = [];
    $scope.state = $state;

    svgCustoms.svgs().success(function(data){
        $scope.svgCustoms = data;
    });

    svgActions.svgs().success(function(data){
        $scope.svgActions = data;
    });
  });
