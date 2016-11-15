(function() {
    "use strict";

    angular.module('common')
        .service('UserService', UserService);

    function UserService() {
        var service = this;

        var user;

        service.addUser = function(userInfo) {
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem('user', JSON.stringify(userInfo));
            }
        };

        service.getUser = function() {
            if (typeof(Storage) !== "undefined") {
                user = JSON.parse(localStorage.getItem('user'));
            }
            console.log(user);
            return user;
        };
    }



})();
