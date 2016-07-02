'use strict';

angular
  .module('testApp')
  .factory('ConfigurationService', ['$rootScope', '$window', function($rootScope, $window) {

    var config = {};

    config.regex = {
      name : /^[a-z A-Z]{2,30}$/,
      email : /^[_A-Za-z0-9]+(\.[_A-Za-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/,
      mobile: /^[789]\d{9}$/
    };

    return config;
  }]);

