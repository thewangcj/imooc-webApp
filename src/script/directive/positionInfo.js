'use strict';
angular.module('app').directive('appPositionInfo',['$http',function($http){
  return{
    restrict:'A',   // A代表属性
    replace:true,   // 代替父属性
    templateUrl:'view/template/positionInfo.html',
    scope:{
      isActive:'=',
      isLogin:'=',
      pos:'='
    },
    link:function($scope){
      $scope.$watch('pos', function(newVal) {
        if(newVal) {
          $scope.pos.select = $scope.pos.select || false;
          $scope.imagePath = $scope.pos.select?'image/star-active.png':'image/star.png';
        }
      })
      $scope.favorite = function(){
        $http.post('data/favorite.json',{
          id:$scope.pos.id,
          select:$scope.pos.select
        }).then(function(){
          $scope.pos.select = !$scope.pos.select;
          $scope.imagePath = $scope.pos.select?'image/star-active.png':'image/star.png';
        });
      };
    }
  }
}]);