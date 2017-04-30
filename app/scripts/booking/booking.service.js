(function() {
	'use strict';

	angular
		.module('restaurant.booking')
		.factory('bookingService', bookingService);

	bookingService.$inject = ['dataService'];

	/* @ngInject */
	function bookingService(dataService) {

		var service ={
			getBusiness: dataService.getBusiness,
            getSuggestionsFor: dataService.getSuggestionsFor
		}
		return service;
	}
})();
