'use strict';
angular.module('app').controller('positionCtrl', ['$q', '$http', '$state', '$scope', '$cookies', '$log','cache',
function($q, $http, $state, $scope,$cookies,$log, cache){ 
  $scope.isLogin = !!cache.get('name');
  $scope.message = $scope.isLogin?'投个简历':'去登录';
  
  function getPosition(){
    var def = $q.defer();
    $http.get('/data/position.json?id='+$state.params.id).then(function(res){
      $scope.position = res.data;
      if(res.data.posted){
        $scope.message = '已投递';
      }
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

  $scope.go = function(){
    if($scope.message !== '已投递'){
      if($scope.isLogin){
        $http.post('data/handle.json',{
          id:$scope.position.id
        }).then(function(res){
          $log.info(res.data);
          $scope.message = '已投递';
        });
      }else{
        $state.go('login');
      }
    }
  };
}]);