'use strict';

/**
 * @ngdoc function
 * @name angularTemplate.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ashlynTemplate
 */
angular.module('sldsSVG').controller('MainCtrl', function ($scope, $location, $anchorScroll, svgCustoms, svgActions, svgDoctypes, svgStandards, svgUtils) {
	$scope.svgCustoms = [];
	$scope.svgActions = [];
	$scope.svgDoctypes = [];
	$scope.svgStandards = [];
	$scope.svgUtils = [];
	$scope.scroll = 0;

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

	svgUtils.svgs().success(function(data){
		$scope.svgUtils = data;
	});
});
