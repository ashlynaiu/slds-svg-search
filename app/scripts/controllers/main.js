'use strict';

/**
 * @ngdoc function
 * @name angularTemplate.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ashlynTemplate
 */
angular.module('sldsSVG').controller('MainCtrl', function ($scope, $state, $location, $anchorScroll, svgCustoms, svgActions, svgDoctypes,svgStandards) {
	$scope.svgCustoms = [];
	$scope.svgActions = [];
	$scope.svgDoctypes = [];
	$scope.svgStandards = [];
	$scope.scroll = 0;
	$scope.state = $state;

	$scope.gotoTop = function() {
		$location.hash('top');
		$anchorScroll();
	};


	svgCustoms.svgs().success(function(data){
		$scope.svgCustoms = data;
	});

	svgActions.svgs().success(function(data){
		$scope.svgActions = data;
	});

	svgDoctypes.svgs().success(function(data){
		$scope.svgDoctypes = data;
	});

	svgStandards.svgs().success(function(data){
		$scope.svgStandards = data;
	});
});
