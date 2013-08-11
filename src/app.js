var myApp = angular.module('myApp', []);

// Routing
myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/pizza', 
				{
					template: 'Con Cerveza por favor!'
				})
		.otherwise(
				{
					template: 'No existe lo que busca!'
				});
}]);

// Servicios.
myApp.factory('ServiceData', function() { 
	return {mensaje:"Nuevo mensaje!"};
})

myApp.factory('ServicePersonas', function() { 
	var personas = {};
	personas.lista = [ {name:"Andrea"}, {name:"Nicolas"}, {name:"Leonardo"}, {name:"Jose"}, {name:"Graciela"}];
	return personas;
})

// Directives
myApp.directive("atencion", function() {
	return {
		restrict: "E",
		template: "<div>Ojo con esto!</div>"
	}
})

// Controladores
function PrimerCtrl($scope, ServiceData) {
	$scope.data = ServiceData;
	
	// Metodo interno del controller
	$scope.reverseMensaje = function(mensaje) {
		return mensaje.split("").reverse().join("");
	}
}

function SegundoCtrl($scope, ServicePersonas) {
	$scope.personas = ServicePersonas;
}

function RouteCtrl($scope, $routeParam) {
	//var slug = $routeParam.slug;
}

// Otra manera de declarar un controller y metodos referenciados a este mismo.
myApp.controller("OtroCtrl", function($scope) {
	this.enviar = function() {
		alert("Enviado!");
	}
	
	return $scope.OtroCtrl = this;
});

// Filtros
myApp.filter('saludo', function() {
	return function(texto) {
		return 'Hola ' + texto + '!';
	}
});

