'use strict';
angular.module('sldsSVG').factory('svgInfo', function($http) {
    return{
        items : function() {
            return $http({
                url: '/scripts/json/project.json',
                method: 'GET'
            });
        }
    };
});