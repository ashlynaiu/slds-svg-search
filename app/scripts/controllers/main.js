'use strict';

/**
 * @ngdoc function
 * @name angularTemplate.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ashlynTemplate
 */
angular.module('sldsSVG').controller('MainCtrl', function ($scope, $location, $anchorScroll, $state, $http ) {
	//Create icon scopes
	$scope.svgCustoms = [];
	$scope.svgActions = [];
	$scope.svgDoctypes = [];
	$scope.svgStandards = [];
	$scope.svgUtils = [];

	$scope.categories = false;
	$scope.showCategories = function() {
		$scope.categories = true;
	};

	$scope.state = $state;

	//Allow scroll to top
	$scope.scroll = 0;
	$scope.gotoTop = function() {
		$location.hash('top');
		$anchorScroll();
	};

	$http.get('/scripts/json/custom.json')
	.then(function(res){
			$scope.svgCustoms = res.data;
	});

	$http.get('/scripts/json/action.json')
	.then(function(res){
			$scope.svgActions = res.data;
	});

	$http.get('/scripts/json/doctype.json')
	.then(function(res){
			$scope.svgDoctypes = res.data;
	});

	$http.get('/scripts/json/standard.json')
	.then(function(res){
			$scope.svgStandards = res.data;
	});

	$http.get('/scripts/json/utility.json')
	.then(function(res){
			$scope.svgUtils = res.data;
	});
});
