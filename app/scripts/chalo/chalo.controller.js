(function() {
	'use strict';

	angular
		.module('restaurant.chalo')
		.controller('ChaloController', ChaloController);

	ChaloController.$inject = ['$state','$scope','localStorageService','$ionicLoading','ionicToast'];

	/* @ngInject */
	function ChaloController($state,$scope,localStorageService,$ionicLoading,ionicToast) {
        
        var selectedPlace = localStorageService.get('endLocation');
        var currentLocation = localStorageService.get('locationForRide');
        
        
        var vm = angular.extend(this, {
			selectedPlace:selectedPlace,
            currentLocation:currentLocation
		});
        
    }
        
})();
