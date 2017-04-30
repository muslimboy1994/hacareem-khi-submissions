(function() {
	'use strict';

	angular
		.module('restaurant.suggestions', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.suggestions', {
				url: '/suggestions',
				views: {
					'menuContent': {
						templateUrl: 'scripts/suggestions/suggestions.html',
						controller: 'SuggestionsController as vm'
					}
				}
			});
		});
})();
