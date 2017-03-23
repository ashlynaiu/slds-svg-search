'use strict';

/**
 * @ngdoc overview
 * @name sldsSVG
 * @description
 * # sldsSVG
 *
 * Main module of the application.
 */
angular
  .module('sldsSVG', [
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'smoothScroll'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state ('frame', {
        abstract: true,
        url: '/',
        controller: 'FrameCtrl',
        templateUrl: 'views/frame.html'
      })
      .state ('navigation', {
        abstract: true,
        parent: 'frame',
        templateUrl: 'views/navigation.html'
      })
      .state('home', {
        url: '',
        parent: 'frame',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: 'about',
        parent: 'frame',
        templateUrl: 'views/about.html'
      });
  }).run(function($rootScope){
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});