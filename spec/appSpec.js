describe( "Suite para testear AngularJS", function() {

//
//SETTINGS
//
	beforeEach(module('myApp'));
//
//TEST
//
	describe( "Angular Module Exist", function() {
		it( "Modulo not null", function(){
			myModule = angular.module('myApp');

			expect(myModule).not.toBe(null);
		});
	});

	describe( "Angular Service return what expected", function() {
		it( "ServiceData State", inject(function(ServiceData) {
			expect(ServiceData.mensaje).toEqual('Nuevo mensaje!');
		}));
	});
});