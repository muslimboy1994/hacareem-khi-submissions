(function() {
	'use strict';

	angular
		.module('restaurant.home', [
			'ionic',
			'ngCordova',
			'restaurant.common',
            'LocalStorageModule'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.home', {
                    cache: false,
					url: '/home',
					views: {
						'menuContent': {
							templateUrl: 'scripts/home/home.html',
							controller: 'HomeController as vm'
						}
					}/*,
                    resolve: {
                        location: function(){
                            var temp=null;
                            navigator.geolocation.getCurrentPosition(function(position){
                                temp = position;
                            });
                            return temp;
                        }
                    }*/
				});
		});
})();
