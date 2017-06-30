hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){
    $scope.employeeActionList = [];

    // TODO #12 - load menu items from Value
    for(var item in employeeActionsService){
        $scope.employeeActionList.push(employeeActionsService[item]);
    }
    $scope.currentDate = new Date();

}]);
