'use strict';

/**
 * @ngdoc function
 * @name rmwebclientApp.controller:rootController
 * @description
 * # rootController
 * Controller of the rmwebclientApp
 */
angular.module('testApp')
  .controller('rootController',['$location','$scope','ConfigurationService', function ($location,$scope,ConfigurationService ) {

    $scope.setting = {
      regex : ConfigurationService.regex,
    };

    $scope.isActive = function (viewLocation) {
      var active = (viewLocation === $location.path());
      return active;
    };

}]);
