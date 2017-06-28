/**
 * Created by Alexandru.Negura on 6/28/2017.
 */
angular.module('hrApp').controller('MainController',['$rootScope', '$scope',function($rootScope, $scope){
    $scope.name = "my name";
    console.log($scope.name);
}]);