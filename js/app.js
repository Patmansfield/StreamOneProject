var app = angular.module('StreamOneProject', ['ngRoute', 'RouteControllers', 'PrivacyPolicyDirective']);

angular.module('StreamOneProject').config(function($routeProvider, $locationProvider) {

	$routeProvider
	.when('/', {
		templateUrl : 'templates/home.html', 
		controller: 'HomeController'
	})

	.when('/templates/music', {
		templateUrl: 'templates/music.html',
		controller: 'MusicController'
	})

	.when('/templates/video', {
		templateUrl: 'templates/video.html',
		controller: 'VideoController'
	})

	.when('/templates/newrelease', {
		templateUrl: 'templates/newrelease.html',
		controller: 'NewreleaseController'
	})

	.when('/templates/chart', {
		templateUrl: 'templates/chart.html',
		controller: 'ChartController'
	})

	.when('/templates/form', {
		templateUrl: 'templates/form.html',
		controller: 'mainController'
	})

	.when('/templates/privacypolicy', {
		templateUrl: 'templates/privacypolicy.html',
		controller: 'PrivacyPolicyController'
	})

	$locationProvider.html5Mode({
  	enabled: true,
  	requireBase: false
	});
});




/*, 'angular-storage', 'RouteControllers', 'UserService' -  $locationProvider.html5Mode(true); $locationProvider '$locationProvider'*/

/* var app = angular.module('StreamOneProject', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl : 'templates/home.html'
	})
}); */  