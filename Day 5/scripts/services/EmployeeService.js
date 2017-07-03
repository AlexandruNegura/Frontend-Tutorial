hrApp.service('EmployeeService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findById: function (employeeId) {
                return $http.get(CommonResourcesFactory.findOneEmployeeUrl + employeeId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            },

            getAllEmployees: function () {
                return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .then(function(response) {
                        //return data when promise resolved
                        //that would help you to continue promise chain.
                        return response.data;
                    });
            },

            getDepartments: function () {
                return $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
                    .then(function(response) {
                        //return data when promise resolved
                        //that would help you to continue promise chain.
                        return response.data;
                    });
            },

            getJobs: function () {
                return $http.get(CommonResourcesFactory.findAllJobsUrl)
                    .then(function(response) {
                        //return data when promise resolved
                        //that would help you to continue promise chain.
                        return response.data;
                    });
            }


        }
    }]
);