'use strict';
angular.module('app').directive('appPositionInfo',[function(){
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
      $scope.imagePath = $scope.isActive?'image/star-active.png':'image/star.png'
    }
  }
}]);