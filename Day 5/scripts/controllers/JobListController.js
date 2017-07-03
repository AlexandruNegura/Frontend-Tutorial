/**
 * Created by Alexandru.Negura on 7/3/2017.
 */
hrApp.controller('JobListController', ['$scope', '$http', '$location', 'CommonResourcesFactory',
    function ($scope, $http, $location, CommonResourcesFactory) {
        $scope.jobs = [];
        $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });

    }]);