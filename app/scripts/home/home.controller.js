(function() {
	'use strict';

	angular
		.module('restaurant.home')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['$scope','$state', 'homeService','localStorageService','$window'];

	/* @ngInject */
	function HomeController($scope,$state, homeService,localStorageService,$window) {
		var vm = angular.extend(this, {
            location:location,
			storeName: '',
            signout: signout,
            pageRefresh: pageRefresh,
            rideNow: rideNow
		});

		(function activate() {
            
            //localStorageService.set('loginDetail',null);
            var loginDetail = localStorageService.get('loginDetail');
            //if(true){
            if(loginDetail == null){
                $state.go('app.login');
            }
            
            vm.location = {
                markers:[{
                    lat:24.8614,
                    lon:67.0099,
                    name:'My Location'
                }],
                origin:{
                    lat:24.8614,
                    lon:67.0099
                },
                zoom:18
            };
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position){
                    vm.location.markers[0] = {
                        lat:position.coords.latitude,
                        lon:position.coords.longitude,
                        name:'My Location'
                    }; 
                    vm.location.origin.lat = position.coords.latitude;
                    vm.location.origin.lon = position.coords.longitude;
                    
                    //var gmap = document.getElementById("home-gmap");
                    //gmap.setAttribute("markers",vm.location.markers.toString());
                    //gmap.setAttribute("markers",vm.location.markers.toString());
                                     
                    
                });
                
            }else{
                console.log('Geo Location is not supported');
            }
            
            localStorageService.set('locationForRide',vm.location);
            
            var suggestedPlaces = homeService.getSuggestedPLaces(vm.location,loginDetail);
            
            localStorageService.set('suggestedPLaces',suggestedPlaces);
        
            
		})();

		// ******************************************************
        
        function rideNow(){
            $state.go('app.booking');
        }
        
        function pageRefresh(){
            $window.location.reload();
        }
        
        function signout(){
            localStorageService.set('loginDetail',null);
            $state.go('app.login');
        }

		function loadBusinessInfo() {
			homeService.getBusiness()
				.then(function(businessInfo) {
					vm.storeName = businessInfo.storeName;
				});
		}
	}
})();
