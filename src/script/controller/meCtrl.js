'use strict';
angular.module('app').controller('meCtrl',['$http','$scope','cache','$state',function($http,$scope,cache,$state){ 
  // 首先判断是否登录
  if(cache.get('name')){
    $scope.name = cache.get('name');
    $scope.image = cache.get('name');
  }
  $scope.logout = function(){
    cache.remove('id');
    cache.remove('name');
    cache.remove('image');
    $state.go('main');
  }
}]);