'use strict';
angular.module('app').controller('registerCtrl', ['$http', '$scope', '$interval', '$state', function ($http, $scope, $interval, $state) {
  $scope.submit = function () {
    $http.post('data/regist.json', $scope.user).then(function (resp) {
      //打印数据
      console.log(resp.data);
      //跳转到登录页面
      $state.go('login');
    });
    console.log($scope.user);
  };

  var count = 60;
  $scope.send = function () {
    $http.get('data/code.json').then(function (res) {
      if (1 === res.data.state) {
        //倒计时
        $scope.time = '60s';
        var interval = $interval(function () {
          if (count <= 0) {
            $interval.cancel(interval); //取消计时
            $scope.time = '';
            return;
          } else {
            count--;
            $scope.time = count + 's';
          }
        }, 1000)
      }
    });
  };
}]);