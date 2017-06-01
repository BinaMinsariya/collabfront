
var app=angular.module('MyApplication',['ngRoute','regmodule','JobModule','loginapp','ngCookies']);

app.constant('REST_URI','http://localhost:8089/Collaboration/');

app.controller('HomeController',function($scope,$rootScope,$cookies,$location)
		{
	
	/*$rootScope.Userrole="home";*/
	$rootScope.Userrole=$cookies.get('role');
	console.log($cookies.get('role'));
	var name='secondproject';
	$scope.name=name;
	console.log(name);
	this.logout=function()
{
		alert("logout");
		$rootScope.Userrole="";
		$cookies.remove('role');
		$location.path("/")
}
})


app.config(function($routeProvider)
{
	
	$routeProvider
	.when("/home",{
		templateUrl:'index.html',
		controller :'HomeController',
		controllerAs:'home'
	})
	
	.when("/signup",
			
	{
		templateUrl :'./userdata/SignUp.html',
		controller : 'RegisterController',
		controllerAs:'regCtrl'
		
			
	})
	
	/*.when("/login",
			
	{
		templateUrl :'./userdata/Login.html',
		controller : 'LoginController',
		controllerAs:'logCtrl'
	})*/
	
	.when("/jobposting",
	{
			templateUrl :'./userdata/JobPosting.html',
			controller : 'JobController',
			controllerAs:'jobCtrl'
	})
	
	}		

)


