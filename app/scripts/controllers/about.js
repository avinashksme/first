'use strict';

/**
 * @ngdoc function
 * @name rmwebclientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rmwebclientApp
 */
angular.module('testApp')
  .controller('AboutCtrl',['$scope', function ($scope) {
    $scope.teamMembers = [
      {
          team: 'technology',
          photo: 'images/avinash_singh.jpg',
          name: 'Avinash Singh',
          position: 'Frontend Developer + c0d3Genie();',
          facebookUrl: 'https://www.facebook.com/avinashks.me',
          twitterUrl: 'https://twitter.com/play_avi',
          linkedinUrl: 'https://www.linkedin.com/in/mravinash',
          instagramUrl: 'https://www.instagram.com/avinash.ks/'
      },
      {
          team: 'technology',
          photo: 'images/avinash_singh.jpg',
          name: 'Avinash Singh',
          position: 'Frontend Developer + c0d3Genie();',
          facebookUrl: 'https://www.facebook.com/avinashks.me',
          twitterUrl: 'https://twitter.com/play_avi',
          linkedinUrl: 'https://www.linkedin.com/in/mravinash',
          instagramUrl: 'https://www.instagram.com/avinash.ks/'
      },
      {
          team: 'technology',
          photo: 'images/avinash_singh.jpg',
          name: 'Avinash Singh',
          position: 'Frontend Developer + c0d3Genie();',
          facebookUrl: 'https://www.facebook.com/avinashks.me',
          twitterUrl: 'https://twitter.com/play_avi',
          linkedinUrl: 'https://www.linkedin.com/in/mravinash',
          instagramUrl: 'https://www.instagram.com/avinash.ks/'
      },
      {
          team: 'technology',
          photo: 'images/avinash_singh.jpg',
          name: 'Avinash Singh',
          position: 'Frontend Developer + c0d3Genie();',
          facebookUrl: 'https://www.facebook.com/avinashks.me',
          twitterUrl: 'https://twitter.com/play_avi',
          linkedinUrl: 'https://www.linkedin.com/in/mravinash',
          instagramUrl: 'https://www.instagram.com/avinash.ks/'
      },
      {
          team: 'technology',
          photo: 'images/avinash_singh.jpg',
          name: 'Avinash Singh',
          position: 'Frontend Developer + c0d3Genie();',
          facebookUrl: 'https://www.facebook.com/avinashks.me',
          twitterUrl: 'https://twitter.com/play_avi',
          linkedinUrl: 'https://www.linkedin.com/in/mravinash',
          instagramUrl: 'https://www.instagram.com/avinash.ks/'
      },
      {
          team: 'technology',
          photo: 'images/avinash_singh.jpg',
          name: 'Avinash Singh',
          position: 'Frontend Developer + c0d3Genie();',
          facebookUrl: 'https://www.facebook.com/avinashks.me',
          twitterUrl: 'https://twitter.com/play_avi',
          linkedinUrl: 'https://www.linkedin.com/in/mravinash',
          instagramUrl: 'https://www.instagram.com/avinash.ks/'
      }
    ];

    $scope.open = function(){
      var modalInstance = $uibModal.open({
        templateUrl: 'modals/firstmodal.html',
        controller: 'ModalInstanceCtrl',
      });
    };

}]);
