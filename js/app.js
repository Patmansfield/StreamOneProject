var app = angular.module('StreamOneProject', ['ngRoute', 'RouteControllers', 'PrivacyPolicyDirective']);

angular.module('StreamOneProject').config(function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl : 'templates/home.html', 
    })

    .when('/templates/music', {
        templateUrl: 'templates/music.html',
    })

    .when('/templates/video', {
        templateUrl: 'templates/video.html',
    })

    .when('/templates/newrelease', {
        templateUrl: 'templates/newrelease.html',
    })

    .when('/templates/chart', {
        templateUrl: 'templates/chart.html',
    })

    .when('/templates/form', {
        templateUrl: 'templates/form.html',
        controller: 'mainController'
    })

    .when('/templates/privacypolicy', {
        templateUrl: 'templates/privacypolicy.html',
    })

    $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
    });
});