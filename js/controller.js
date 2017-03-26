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

        // function to submit the form after all validation has occurred            
        $scope.submitForm = function() {

            // check to make sure the form is completely valid
            if ($scope.userForm.$valid) {
                alert('Thank you - Your enquiry has been submited');
            }

        };

    });






