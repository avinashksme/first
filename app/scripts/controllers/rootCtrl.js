'use strict';

/**
 * @ngdoc function
 * @name rmwebclientApp.controller:rootController
 * @description
 * # rootController
 * Controller of the rmwebclientApp
 */
angular.module('testApp')
  .controller('rootController',['$location','$scope', function ($location,$scope ) {

    $scope.isActive = function (viewLocation) {
      var active = (viewLocation === $location.path());
      return active;
    };

}]);
