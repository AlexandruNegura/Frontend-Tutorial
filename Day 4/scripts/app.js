var hrApp = angular.module('hrApp', ['ngRoute']);

hrApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: '../views/main.html',
            controller: 'MainController'
        }).when('/numbers', {
            templateUrl: '../views/demo/math.html',
            controller: 'MathController'
        }).when('/demoRequest', {
            templateUrl: '../views/demo/request.html',
            controller: 'RequestController'
        }).when('/employeeslist', {
            templateUrl: '../views/employeelist.html',
            controller: 'EmployeeListController'
        }).when('/employeeview/:employeeid', {
            templateUrl: '../views/employeeview.html',
            controller: 'EmployeeViewController'
        }).when('/user', {
            templateUrl: '../views/user.html',
            controller: 'UserController'
        }).otherwise({
            redirectTo: '/'
        })
    }]);