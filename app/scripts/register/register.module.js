(function() {
	'use strict';

	angular
		.module('restaurant.register', [
			'ionic',
            'LocalStorageModule'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.register', {
				url: '/register',
				views: {
					'menuContent': {
						templateUrl: 'scripts/register/register.html',
						controller: 'RegisterController as vm'
					}
				},
				resolve: {
					businessInfo: function(registerService){
						return registerService.getBusiness();
					}
				}
			});
		});
})();
