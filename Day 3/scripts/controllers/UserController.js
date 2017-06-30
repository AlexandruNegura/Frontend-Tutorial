/**
 * Created by Alexandru.Negura on 6/29/2017.
 */
hrApp.controller('UserController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory', 'userService',
    function ($scope, $http, $routeParams, $location, commonResourcesFactory, userService) {
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.id = "";
        $scope.age = 0;
        $scope.etc = "";

        $scope.serviceVector = userService.vector;
        $scope.boolean = true;

        $scope.back = function () {
            $location.url('/main');
        };

        $scope.reset = function () {
            $scope.firstName = "";
            $scope.lastName = "";
            $scope.id = "";
            $scope.age = 0;
            $scope.etc = "";
        };

        $scope.save = function () {
            var obj = {
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                id: $scope.id,
                age: $scope.age,
                etc: $scope.etc
            };
            userService.vector.push(obj);
            alert('User saved');
        }

        $scope.showAndHideUserList = function () {
            $scope.boolean = !$scope.boolean;
        }
    }]);