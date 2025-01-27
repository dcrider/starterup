﻿'use strict';
app.factory('ordersService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

   // var serviceBase = ngAuthSettings.apiServiceBaseUri;
    var serviceBase = ngAuthSettings.apiServiceBaseProtectedUri;
    

    var ordersServiceFactory = {};

    var _getOrders = function () {

        return $http.get(serviceBase + 'api/protected/orders').then(function (results) {
            return results;
        });
    };

    ordersServiceFactory.getOrders = _getOrders;

    return ordersServiceFactory;

}]);