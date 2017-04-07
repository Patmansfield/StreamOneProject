angular.module('RouteControllers', [])

	.controller('mainController', function($scope) {
         
        $scope.submitForm = function() {

            if ($scope.userForm.$valid) {
                alert('Thank you - Your enquiry has been submited');
            }
        };
    });