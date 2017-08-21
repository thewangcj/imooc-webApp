'use strict';
angular.module('app').controller('registerCtrl',['$http','$scope',function($http,$scope){ 
  $scope.submit = function(){
    console.log($scope.user);
  }
}]);