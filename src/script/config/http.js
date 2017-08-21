'use strict';   

angular.module('app').config(['$provide',function($provide){
  //装饰http服务，$delegate用于指代被修饰的服务，$q用于处理异步请求
  //将post请求处理成get请求
  $provide.decorator('$http',['$delegate','$q',function($delegate,$q){
    $delegate.post = function(url,data,config){
      var def = $q.defer();
      $delegate.get(url).then(function(resp) {
          def.resolve(resp);  //注意这里要写resp 而不是resp.data
        },function (err) {
          def.reject(err);
        })
        return {
          then: function(scb, ecb){
              def.promise.then(scb, ecb);
          }
        }
    };
    return $delegate;
  }]);
}]);
