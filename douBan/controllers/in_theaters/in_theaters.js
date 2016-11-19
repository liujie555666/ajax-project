/**
 * Created by Administrator on 2016/10/29.
 */
(function (angular) {
    'use strict';
    //创建一个正在热映的模块
    var module=angular.module('app.movie.in_theaters',['ngRoute']);
    module.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/in_theaters',{
            templateUrl:'controllers/in_theaters/view.html',
            controller:'TheaterController'
        });
    }]);
    module.controller('TheaterController',['$scope','$http',function ($scope,$http) {
        $http.get('https://api.douban.com/v2/movie/in_theaters').then(function (response) {
            var data=response.data;
            $scope.subjects=data.subjects;
            $scope.title=data.title;
            $scope.total=data.total;
            $scope.count=data.count;
            $scope.start=data.start;
        },function (e) {
            console.log(e);
        });
    }])
})(angular);