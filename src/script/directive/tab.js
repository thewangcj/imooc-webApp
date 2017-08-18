'use strict';

angular.module('app').directive('appTab',[function(){
  return{
    restrict: 'A',   // A代表属性
    replace: true,   // 代替父属性,要保证模板有根元素
    templateUrl: 'view/template/tab.html'
  }
}]);