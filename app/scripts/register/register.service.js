(function() {
	'use strict';

	angular
		.module('restaurant.register')
		.factory('registerService', registerService);

	registerService.$inject = ['dataService'];

	/* @ngInject */
	function registerService(dataService) {

		var service ={
			getBusiness: dataService.getBusiness,
            newRegister: dataService.newRegister,
            regFinal: dataService.regFinal,
            accountCheck: dataService.accountCheck
		}
		return service;
	}
})();
