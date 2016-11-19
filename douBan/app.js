/**
 * Created by Administrator on 2016/10/29.
 */
(function (angular) {
    //Postman Interceptor
    //主模块
    'use strict';
    angular.module('app',['ngRoute','app.movie.in_theaters']).config(['$routeProvider',function ($routeProvider){
        $routeProvider.otherwise({
            redirectTo:'/in_theaters'
        });
    }])
})(angular);