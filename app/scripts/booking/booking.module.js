(function() {
	'use strict';

	angular
		.module('restaurant.booking', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.booking', {
				url: '/booking',
				views: {
					'menuContent': {
						templateUrl: 'scripts/booking/booking.html',
						controller: 'BookingController as vm'
					}
				},
				resolve: {
					businessInfo: function(bookingService){
						return bookingService.getBusiness();
					}
				}
			});
		});
})();
