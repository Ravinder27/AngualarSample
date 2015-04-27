'use strict';

/**
 * @ngdoc function
 * @name l10nSampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the l10nSampleApp
 */
angular.module('l10nSampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
