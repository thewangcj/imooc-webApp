'use strict';
angular.module('app').controller('positionCtrl', ['$q', '$http', '$state', '$scope', '$cookies', 'cache',
function($q, $http, $state, $scope,$cookies, cache){ 
  cache.put('to','day');
  $cookies.put('myFavorite', 'oatmeal');
  $scope.isLogin = false;
  function getPosition(){
    var def = $q.defer();
    $http.get('/data/position.json?id='+$state.params.id).then(function(res){
      $scope.position = res.data;
      def.resolve(res);
    },function(res){
      def.reject();
    });
    return def.promise;
  }
  function getCompany(id){
    $http.get('/data/company.json?id='+id).then(function(res){
      $scope.company = res.data;
    },function(res){
      console.log(res)
    });
  }
  getPosition().then(function(res){
    //console.log(res);
    getCompany(res.companyId);
  });
}]);