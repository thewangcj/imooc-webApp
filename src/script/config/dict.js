'use strict';
angular.module('app').value('dict',{}).run(['$http','dict',function($http,dict){
  $http.get('data/city.json').then(function(res){
    dict.city = res.data;
  });
  $http.get('data/salary.json').then(function(res){
    dict.salary = res.data;
  });
  $http.get('data/scale.json').then(function(res){
    dict.scale = res.data;
  });
}]);

// angular.module('app').service('dict', ['$http','$q',function($http,$q){
//   this.getList = function(index){
//     var def = $q.defer();
//     $http.get('json/'+index+'.json', {})
//     .then(function(resp){
//       def.resolve(resp);
//     })
//     return def.promise;
//   }
// }])