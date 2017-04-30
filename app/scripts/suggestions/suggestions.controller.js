(function() {
	'use strict';

	angular
		.module('restaurant.suggestions')
		.controller('SuggestionsController', SuggestionsController);

	SuggestionsController.$inject = ['$state','$scope',
                               'localStorageService','$ionicLoading','ionicToast'];

	/* @ngInject */
	function SuggestionsController($state,$scope, 
                                    localStorageService,$ionicLoading,ionicToast) {
        
        var suggestedPlaces = localStorageService.get('suggestedPLaces');
        
        var vm = angular.extend(this, {
			suggestedPlaces:suggestedPlaces,
            placeSelected:placeSelected
		});
            
        
		(function activate() {
            
            
        
            
		})();
        
        function placeSelected(place){
            localStorageService.set('endLocation',place);
            $state.go('app.chalo');
        }
            
        
    }
        
})();
