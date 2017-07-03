hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory',
    'EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory, EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        $scope.departments = [];
        $scope.aux1 = EmployeeService.getDepartments();
        $scope.aux1.then(function (data) {
            for(var item in data){
                if(data[item].departmentId != null){
                    $scope.departments.push(data[item]);
                }
            }
        });

        $scope.jobs = [];
        $scope.aux2 = EmployeeService.getJobs();
        $scope.aux2.then(function (data) {
            for(var item in data){
                if(data[item].jobId != null){
                    $scope.jobs.push(data[item]);
                }
            }
        });

        $scope.managers = [];
        $scope.employees = EmployeeService.getAllEmployees();
        $scope.employees.then(function (data) {
            for(var item in data){
                if(data[item].managerId != null){
                    $scope.managers.push(data[item]);
                }
            }
        });

        // Handle a promise
        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);