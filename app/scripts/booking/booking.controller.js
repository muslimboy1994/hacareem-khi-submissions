(function() {
	'use strict';

	angular
		.module('restaurant.booking')
		.controller('BookingController', BookingController);

	BookingController.$inject = ['$state','$scope','$ionicPopup','bookingService', 'businessInfo',
                               'localStorageService','$ionicLoading','ionicToast','$rootScope'];

	/* @ngInject */
	function BookingController($state,$scope,$ionicPopup,bookingService, businessInfo,
                                localStorageService,$ionicLoading,ionicToast,$rootScope) {
        
        var location = localStorageService.get('locationForRide');
        var loginDetail = localStorageService.get('loginDetail');
        var popup = null;
        var selected = null;
        
        var vm = angular.extend(this, {
			location:location,
            provideSuggested: provideSuggested,
            selected: selected,
            chalo: chalo
		});
        
        (function activate() {
             bookingService.getSuggestionsFor(location,loginDetail,function(result){
                 $scope.data = result;
                 
             });
            
             
            //console.log($scope.data);
        }());
        
        
        
        function provideSuggested(){
            //popup = createPopup();
            //console.log($scope.data);
            
            $scope.messageAgain = messageAgain;
            
            
            popup =  $ionicPopup.show({
                    templateUrl: 'scripts/booking/location-suggestions.html',
                    title: 'Select A suggested Place',
                    subTitle: null,
                    scope: $scope,
                    buttons: [{
                        text: 'Cancel',
                        onTap: function(e) {
                            $scope.messageAgain(null);
                            $scope.data.canceled = true;
                            return $scope.data;
                        }
                    }]
                });
            
        }
        
        function messageAgain(place){
            if(place!=null)
                popup.close();
            vm.selected = place;
            //popup = null;
        }
        
        function chalo(){
            localStorageService.set('endLocation',vm.selected);
            $state.go('app.chalo');
        }
        
    
        
	}
    
})();
