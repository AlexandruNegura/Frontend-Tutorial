/**
 * Created by Alexandru.Negura on 6/28/2017.
 */
angular.module('hrApp').controller('ArithmeticController', ['$scope', function ($scope) {
    $scope.firstVariable = 0;
    $scope.secondVariable = 0;
    $scope.result = 0;

    $scope.add = function () {
        $scope.result = $scope.firstVariable + $scope.secondVariable;
    }

    $scope.sub = function () {
        $scope.result = $scope.firstVariable - $scope.secondVariable;
    }

    $scope.mul = function () {
        $scope.result = $scope.firstVariable * $scope.secondVariable;
    }

    $scope.divi = function () {
        $scope.result = $scope.firstVariable / $scope.secondVariable;
    }
}]);
