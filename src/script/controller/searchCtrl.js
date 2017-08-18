'use strict';
angular.module('app').controller('searchCtrl',['$scope','$http','$state',function($scope,$http,$state){ 
  $scope.name = '';
  $scope.search = function(){
    $http.get('json/positionList.json?name=' + $scope.name).then(function(res){
      $scope.positionList = res.data;
    },function(res){
      console.log(res.data);
    });
  };
  $scope.search();
}]);