(function() {
	'use strict';

	angular
		.module('restaurant.menu')
		.controller('MenuController', MenuController);
    
    MenuController.$inject = ['$state'];
    
	/* @ngInject */
	function MenuController($state) {
		var vm = angular.extend(this, {
			showSuggestions: showSuggestions,
            showContactUs: showContactUs
		});
        
        function showSuggestions(){
            $state.go('app.suggestions');
        }
        
        function showContactUs(){
            $state.go('app.contact-us');
        }
        
	}
})();