(function() {
	'use strict';

	angular
		.module('restaurant.login')
		.factory('loginService', loginService);

	loginService.$inject = ['dataService'];

	/* @ngInject */
	function loginService(dataService) {

		var service ={
			getBusiness: dataService.getBusiness,
            personLogin: dataService.personLogin
		}
		return service;
	}
})();
