(function() {
	'use strict';

	angular
		.module('restaurant.chalo', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.chalo', {
				url: '/chalo',
				views: {
					'menuContent': {
						templateUrl: 'scripts/chalo/chalo.html',
						controller: 'ChaloController as vm'
					}
				}
			});
		});
})();
