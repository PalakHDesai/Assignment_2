var app = angular.module("MyApp", ["ui.router"]);
//app.controller('MyController', function ($scope) {

//});


app.config(function($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state("View1", {
            url: "/View1",
            templateUrl: "View1.html"
        })
        .state("View2", {
            url: "/View2",
            templateUrl: "View2.html"
        })
        .state("View3", {
            url: "/View3",
            templateUrl: "View3.html"
        });


});