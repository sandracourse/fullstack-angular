(function() {
    "use strict";

    angular.module('common')
        .service('MenuService', MenuService);


    MenuService.$inject = ['$http', 'ApiPath'];

    function MenuService($http, ApiPath) {
        var service = this;

        service.getCategories = function() {
            return $http.get(ApiPath + '/categories.json').then(function(response) {
                return response.data;
            });
        };


        service.getMenuItems = function(category) {
            var config = {};
            if (category) {
                config.params = {
                    'category': category
                };
            }

            return $http.get(ApiPath + '/menu_items.json', config).then(function(response) {
                return response.data;
            });
        };

        service.getFavoriteItem = function(itemName) {
            var item = '';
            console.log(itemName);
            if (itemName) {
                item = '/menu_items/' + itemName + '.json';
            }
            console.log(item);
            return $http.get(ApiPath + item).then(function(response) {
                console.log(response.data);
                return response.data;
            });
        };

    }



})();
