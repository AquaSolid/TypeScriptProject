var app = angular.module('myApp', ['ngRoute', 'ngSanitize']);


app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "client/html/home.html"
        })
        .when("/why", {
            templateUrl: "client/html/why.html"
        })
        .when("/basicTypes", {
            templateUrl: "client/html/basicTypes.html"
        })
        .when("/oop", {
            templateUrl: "client/html/oop.html"
        })
        .when("/install", {
            templateUrl: "client/html/install.html"
        })
        .when("/keywords", {
            templateUrl: "client/html/keywords.html"
        })
        .when("/our", {
            templateUrl: "client/html/our.html"
        })
        .otherwise({ redirectTo: '/' });
});
