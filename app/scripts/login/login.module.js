(function() {
	'use strict';

	angular
		.module('restaurant.login', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.login', {
				url: '/login',
				views: {
					'menuContent': {
						templateUrl: 'scripts/login/login.html',
						controller: 'LoginController as vm'
					}
				},
				resolve: {
					businessInfo: function(loginService){
						return loginService.getBusiness();
					}
				}
			});
		});
})();
