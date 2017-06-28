angular.module('hrApp').controller('ImageController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.showAndHide = true;
    $scope.total = 0;
    $scope.imageList = [
        {
            nume: "Cal 1",
            url: "../images/1.jpg",
            price: 3
        },
        {
            nume: "Cal 2",
            url: "../images/2.jpg",
            price: 2
        },
        {
            nume: "Cal 3",
            url: "../images/3.jpg",
            price: 999999990
        },
        {
            nume: "Cal 4",
            url: "../images/5.jpg",
            price: 'ai vrea tu'
        }
    ];

    $scope.buyList = [];

    $scope.addToCart = function (image) {
        if ($scope.buyList.indexOf(image) !== -1) {
            console.log(image.quantity);
            image.quantity++;
        } else {
            $scope.buyList.push(image);
            image.quantity = 1;
            console.log('was created');
        }

        $scope.total += image.price;
    };

    $scope.showCart = function () {
        $scope.showAndHide = !$scope.showAndHide;
    }

}]);


