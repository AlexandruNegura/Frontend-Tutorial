hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory', 'EmployeeService',
    function ($scope, $http, $location, CommonResourcesFactory, EmployeeService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1

        $scope.departments = [];
        $scope.aux1 = EmployeeService.getDepartments();
        $scope.aux1.then(function (data) {
            for (var item in data) {
                if (data[item].departmentId != null) {
                    $scope.departments.push(data[item]);
                }
            }
        });

        $scope.jobs = [];
        $scope.aux2 = EmployeeService.getJobs();
        $scope.aux2.then(function (data) {
            for (var item in data) {
                if (data[item].jobId != null) {
                    $scope.jobs.push(data[item]);
                }
            }
        });

        $scope.managers = [];
        $scope.employees = EmployeeService.getAllEmployees();
        $scope.employees.then(function (data) {
            for (var employee in data) {
                if (data[employee].managerId != null) {
                    var bool = true;
                    for (var manager in $scope.managers) {
                        if ($scope.managers[manager].managerId.employeeId === data[employee].managerId.employeeId) {
                            bool = false;
                        }
                    }
                    if(bool) {
                        $scope.managers.push(data[employee]);
                    }
                }
            }
        });


        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
    }]);