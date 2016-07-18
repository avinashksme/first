'use strict';

/**
 * @ngdoc function
 * @name rmwebclientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rmwebclientApp
 */
angular.module('testApp')
  .controller('AboutCtrl',['$scope', '$http', function ($scope, $http) {
    $http.get('/team.json').success(function(data){
      console.log(data);
      $scope.teamMembers = data;
    })

    $scope.open = function(){
      var modalInstance = $uibModal.open({
        templateUrl: 'modals/firstmodal.html',
        controller: 'ModalInstanceCtrl',
      });
    };

}]);
