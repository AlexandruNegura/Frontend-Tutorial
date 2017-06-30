hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory',
    function($scope, $http, $routeParams, $location, commonResourcesFactory) {

        $scope.employee = {};


        // TODO #HR6 get employee by id
        $scope.emplyeeID = $routeParams.employeeid;
        $http.get(commonResourcesFactory.findOneEmployeeUrl + $scope.emplyeeID)
            .success(function(data, status, headers, config) {
                $scope.employee = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
            });

        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeview/' + employeeId);
        };

        $scope.back = function() {
            // TODO back to Employee List page
            $location.url('/employeeslist');
        }

    }]);