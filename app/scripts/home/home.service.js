(function() {
	'use strict';

	angular
		.module('restaurant.home')
		.factory('homeService', homeService);

	homeService.$inject = ['dataService'];

	/* @ngInject */
	function homeService(dataService) {
		var service = {
			getBusiness: dataService.getBusiness,
            getSuggestedPLaces: dataService.getSuggestedPLaces
		};
		return service;
        

		// ***************************************************************

	}

})();
