'use strict';
angular.module('app').controller('mainCtrl',['$http','$scope',function($http,$scope){ 
  $http.get('/json/positionList.json').then(function(response){
    //console.log(response.data);
    $scope.list = response.data;
  });
}]);