'use strict';
angular.module('app').directive('appHeadBar',[function(){
  return{
    restrict:'A',   // A代表属性
    replace:true,   // 代替父属性
    templateUrl:'view/template/headBar.html',
    scope:{
      text:'@'
    },
    link:function($scope){
      $scope.back = function(){
        window.history.back();
      }
      // 事件机制
      // $scope.$on('abc',function(event,data){
      //   console.log(event,data)
      // })
      // $scope.$emit('cba',{name:2});
    }
  }
}]);