'use strict';
angular.module('sldsSVG').factory('svgCustoms', function($http) {
    return{
        svgs : function() {
            return $http({
                url: '/scripts/json/custom.json',
                method: 'GET'
            });
        }
    };
});

angular.module('sldsSVG').factory('svgActions', function($http) {
    return{
        svgs : function() {
            return $http({
                url: '/scripts/json/action.json',
                method: 'GET'
            });
        }
    };
});

angular.module('sldsSVG').factory('svgDoctypes', function($http) {
    return{
        svgs : function() {
            return $http({
                url: '/scripts/json/doctype.json',
                method: 'GET'
            });
        }
    };
});

angular.module('sldsSVG').factory('svgStandards', function($http) {
    return{
        svgs : function() {
            return $http({
                url: '/scripts/json/standard.json',
                method: 'GET'
            });
        }
    };
});