angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        
    })

    .controller('MusicController', function($scope) {

    })

    .controller('VideoController', function($scope) {

    })

    .controller('ChartController', function($scope) {

    })

    .controller('NewreleaseController', function($scope) {

    })

    .controller('PrivacyPolicyController', function($scope) {

    })

	.controller('mainController', function($scope) {
         
        $scope.submitForm = function() {

            if ($scope.userForm.$valid) {
                alert('Thank you - Your enquiry has been submited');
            }
        };
    });






