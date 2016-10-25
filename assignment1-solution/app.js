(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.msg = "";
        $scope.checkLunch = function() {
            var dishArray = splitString($scope.dishes, ',');
            var rex = /\S/;
            dishArray = dishArray.filter(rex.test.bind(rex));

            var dishLength = dishArray.length;
            if (dishLength == 0) {
                $scope.msg = "Please enter data first.";
                $scope.divClass = "has-error";
                $scope.msgClass = "error";
            } else if (dishLength <= 3) {
                $scope.msg = "Enjoy!";
                $scope.divClass = "has-success";
                $scope.msgClass = "success";
            } else {
                $scope.msg = "Too much!";
                $scope.divClass = "has-success";
                $scope.msgClass = "success";
            }
        };
    }

    function splitString(stringToSplit, separator) {
        if (stringToSplit) {
            return stringToSplit.split(separator);
        } else {
            return [];
        }
    }

})();
