/**
 * Created by Alexandru.Negura on 6/28/2017.
 */
angular.module('hrApp').controller('OtherController',['$scope',function($scope) {
    $scope.id = 234324;
    $scope.title = "title";

    $scope.setTitle=function () {
        $scope.title = "sdfsdfds";
    }
}
]);