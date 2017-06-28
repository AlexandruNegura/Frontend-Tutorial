/**
 * Created by Alexandru.Negura on 6/28/2017.
 */
angular.module('hrApp').controller('DescriptionController',['$rootScope', '$scope',function($rootScope, $scope){
    $scope.title = 'Two way binding demo';
    $scope.childTemplate = 'templates/childscope.html';
    $scope.descriptionShow = true;

    $scope.resetFirstVariable = function () {
        $scope.firstVariable = undefined;
    }
    $scope.setFirstVariable = function(val){
        $scope.firstVariable = val;
    }
    $scope.toggleDescriptionShow = function(){
        $scope.descriptionShow = !$scope.descriptionShow;
    }
}]);