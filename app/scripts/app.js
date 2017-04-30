// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('restaurant', [
	'ionic',
	'ionic.cloud',
	'ngCordova',
	'ionic-toast',
	'LocalStorageModule',
	'firebase',
	'config',
    
	'restaurant.map',
    'restaurant.register',
    'restaurant.login',
    'restaurant.booking',
	'restaurant.home',
	'restaurant.suggestions',
	'restaurant.menu',
	'restaurant.chalo',
	'restaurant.contact-us',
	'gMaps'
])

.value('_', window._)

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)

		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($urlRouterProvider) {
	// if none of the above states are matched, use this as the fallback
    //var result = window.localStorage.getItem("loginDetail");
    //console.log(result);
    //console.log($urlRouterProvider.$get());
	$urlRouterProvider.otherwise('/app/home');
});
