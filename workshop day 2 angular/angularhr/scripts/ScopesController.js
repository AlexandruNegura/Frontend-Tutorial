/**
 * Created by Alexandru.Negura on 6/28/2017.
 */
angular.module('hrApp').controller('ScopesController',['$rootScope', '$scope',function($rootScope, $scope){
    $scope.title = 'Two Way Bindingaefsgfdfd Demo';
    $scope.id = 23423452345;
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    }
}]);
