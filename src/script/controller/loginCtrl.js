'use strict';
angular.module('app').controller('loginCtrl',['$http','$scope','$state','cache',function($http,$scope,$state,cache){ 
  $scope.submit = function(){
    $http.post('data/login.json',$scope.user).then(function(res){
      cache.put('id',res.data.id);
      cache.put('name',res.data.name);
      cache.put('image',res.data.image);
      $state.go('main');
    });
  }
}]);