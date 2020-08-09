var teclado= {
	teclasPresionadas: {
		'65': false,
		'83': false,
		'68': false,
		'87': false,
		'37': false,
		'38': false,
		'39': false,
		'40': false,
	},

	teclaNoPresionada: function(event) {
		var tecla= event.keyCode;
		teclado.teclasPresionadas[tecla]= false;
	},

	teclaPresionada: function(event){
		var tecla= event.keyCode;
		teclado.teclasPresionadas[tecla]= true;
	},

	iniciar: function(){
		document.addEventListener('keydown', this.teclaPresionada, false);
			document.addEventListener('keyup', this.teclaNoPresionada, false);
	}
};