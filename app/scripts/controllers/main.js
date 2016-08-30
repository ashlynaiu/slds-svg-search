'use strict';

/**
 * @ngdoc function
 * @name angularTemplate.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ashlynTemplate
 */
angular.module('sldsSVG')
  .controller('MainCtrl', function ($scope, $state, svgInfo) {
		$scope.svgs = [];
    $scope.state = $state;

    svgInfo.svgs().success(function(data){
        $scope.svgs = data;
    });
  });
