/**
 * Created by Alexandru.Negura on 6/28/2017.
 */
angular.module('hrApp').controller('EmployeeController',['$rootScope', '$scope',function($rootScope, $scope){
    $scope.employeeList = [
        {
            nume: "Gigel"
        },
        {
            nume: "OtherScope222222"
        }

    ]
}]);
