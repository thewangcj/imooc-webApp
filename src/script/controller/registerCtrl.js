'use strict';
angular.module('app').controller('registerCtrl',['$http','$scope','$interval',function($http,$scope,$interval){ 
  $scope.submit = function(){
    console.log($scope.user);
  };

  var count = 60;
  $scope.send = function(){
    $http.get('data/code.json').then(function(res){
      if(1===res.data.state){
        //倒计时
        $scope.time = '60s';
        var interval = $interval(function(){
          if(count<=0){
            $interval.cancel(interval); //取消计时
            $scope.time = '';
            return;
          }else{
            count--;
            $scope.time = count + 's';
          }
        },1000)
      }
    });
  };
}]);