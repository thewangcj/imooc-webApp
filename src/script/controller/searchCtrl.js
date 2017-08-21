'use strict';
angular.module('app').controller('searchCtrl',['$scope','$http','$state','dict',
  function($scope,$http,$state,dict){ 
    $scope.name = '';
    $scope.search = function(){
      $http.get('data/positionList.json?name=' + $scope.name).then(function(res){
        $scope.positionList = res.data;
      },function(res){
        console.log(res.data);
      });
    };
    $scope.search();  //初始数据

    $scope.sheet = {};
    $scope.tabList = [{
      id:'city',
      name: '城市'
    },{
      id:'salary',
      name:'薪水'
    },{
      id:'scale',
      name:'公司规模'
    }];
    $scope.filterObj = {};
    var tabId = '';

    $scope.tClick = function(id,name){
      tabId = id;
      $scope.sheet.list = dict[id];
      $scope.sheet.visible = true;
      console.log(id,name);
    };


    $scope.sClick = function(id,name){
      console.log(id,name);
      if(id){
        angular.forEach($scope.tabList,function(item) {
          if(item.id === tabId){
            //console.log('tabId' + tabId);
            item.name = name;
          }
        });
        $scope.filterObj[tabId + 'Id'] = id;
        //console.log('filterObj  ' + $scope.filterObj);
      }else{
        delete $scope.filterObj[tabId + 'Id'];
        angular.forEach($scope.tabList,function(item) {
          if(item.id === tabId){
            switch(item.id){
              case 'city':
                item.name = '城市';
              case 'salary':
                item.name = '薪水';
              case 'scale':
                item.name = '公司规模';
            }
          }
        });
      }
    };
}]);