'use strict';
angular.module('sldsSVG').directive('scrollPosition', function($window) {
		return {
			scope: {
				scroll: '=scrollPosition'
			},
			link: function(scope) {
				var windowEl = angular.element($window);
				var handler = function() {
					scope.scroll = windowEl.scrollTop();
				};
				windowEl.on('scroll', scope.$apply.bind(scope, handler));
				handler();
			}
		};
});