'use strict';

/**
 * @ngdoc function
 * @name angularTemplate.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ashlynTemplate
 */
angular.module('sldsSVG').controller('MainCtrl', function ($scope, $location, $anchorScroll, svgCustoms, svgActions, svgDoctypes, svgStandards, svgUtils, $state) {
	$scope.svgCustoms = [];
	$scope.svgActions = [];
	$scope.svgDoctypes = [];
	$scope.svgStandards = [];
	$scope.svgUtils = [];
	$scope.scroll = 0;
	$scope.state = $state;
	$scope.startedSearch = true;

	$scope.gotoTop = function() {
		$location.hash('top');
		$anchorScroll();
	};

	// $scope.hideTitle = function(typeLength) {
	// 	if (typeLength.length === 0) {
	// 		return true;
	// 	}
	// };

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
