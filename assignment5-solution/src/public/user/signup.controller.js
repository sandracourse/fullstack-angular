(function() {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['UserService', 'MenuService'];

    function SignupController(UserService, MenuService) {
        var $ctrl = this;
        $ctrl.checkMenuItem = function() {
            var itemName = $ctrl.user.favorite;
            console.log(itemName);
            MenuService.getFavoriteItem(itemName).then(function(response) {
                    $ctrl.invalidItem = false;
                    $ctrl.user.item = response;
                    console.log($ctrl.user.item);
                })
                .catch(function(error) {
                    $ctrl.invalidItem = true;
                })
        };

        $ctrl.submit = function() {
            UserService.addUser($ctrl.user);
            $ctrl.completed = true;
        };
    }


})();
