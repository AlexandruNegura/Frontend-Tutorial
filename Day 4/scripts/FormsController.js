/**
 * Created by Alexandru.Negura on 6/30/2017.
 */
hrApp.controller('FormsController', ['$scope', function ($scope) {
    $scope.pristine = true;
    $scope.dirty = false;
    $scope.valid = false;
    $scope.invalid = true;
    $scope.submited = false;
    $scope.error = false;

    $scope.submit = function(required){
        if(required != true){
            alert("Submited succesfully");
        }
    }
}]);
