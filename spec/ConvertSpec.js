describe( "Suite para testear operaciones de matematica.", function() {

//
//SETTINGS
//
	var objeto = new Object();

	beforeEach(function() {
		console.log('beforeEach.');
		//objeto.setState("estado");
	});

	afterEach(function() {
		console.log('afterEach.');
		//objeto.setState("estado");
	});

//
//TEST
//
	describe( "Sumas", function() {
		it( "Sumar dos valores.", function() {
			expect(4).toBe(2 + 2);
		});

		it( "Sumar otros dos valores.", function() {
			expect(6).toBe(4 + 2);
		});
	});

	xdescribe( "Resta", function() {
		xit( "Restar dos valores.", function() {
			expect(0).toBe(2 - 2);
		});

		xit( "Restar otros dos valores.", function() {
			expect(1).toBe(2 - 1);
		});
	});

	describe( "Excepciones del suite de matematica.", function() {
		it( "Sumar dos valores validos.", function() {
			expect(Sumar(1, 1)).toBe(2);
		});

		it( "Sumar dos valores no validos.", function() {
			var funcSumar = function() {
				Sumar(0, 0);
			};

			expect(funcSumar).toThrow("Error.");
		});
	});
});