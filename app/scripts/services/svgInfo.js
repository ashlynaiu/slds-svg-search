'use strict';
angular.module('sldsSVG').factory('svgInfo', function($http) {
    return{
        svgs : function() {
            return $http({
                url: '/scripts/json/all.js',
                method: 'GET'
            });
        }
    };
});