var avion= {
	posiciones: [{x: 134, y: 6, ancho: 24, alto: 16},
			{x: 70, y: 6, ancho: 24, alto: 16},
							{x:38, y: 6, ancho: 24, alto: 16},
							{x: 101, y: 6, ancho: 24, alto: 16},
							{x: 166, y: 6, ancho: 24, alto: 16}],

	indiceAnimacion: 0,
	velocidadMovimiento: 20,
	x: 10,
	y: 10,
	objetivoX: 0,
	objetivoY: 0,
	tiempoAcumulado: 0,

	actualizarConTeclas: function(){
		const key = {
			A: 65,
			W: 83,
			S: 87,
			D: 68,
			ARROW_UP: 40,
			ARROW_DOWN: 38,
			ARROW_LEFT: 37,
			ARROW_RIGHT: 39,
		};
		const velmovElx = document.querySelector("#velmovx");
		const velocidadDeMovimientoX = velmovElx.value === "" ? 1 : parseFloat(velmovElx.value);

		//const velmovEly = document.querySelector("#velmovy");
		//const velocidadDeMovimientoY = velmovEly.value === "" ? 1 : parseInt(velmovEly.value);

		if (teclado.teclasPresionadas[key.A] || teclado.teclasPresionadas[key.ARROW_LEFT] ){
			this.x = this.x - velocidadDeMovimientoX;
			if(this.indiceAnimacion > 0 && this.tiempoAcumulado > 1){
				this.tiempoAcumulado = 0;
				this.indiceAnimacion--;
			}
		}

		if (teclado.teclasPresionadas[key.D] || teclado.teclasPresionadas[key.ARROW_RIGHT]){
			this.x = this.x + velocidadDeMovimientoX;
			if(this.indiceAnimacion > 4 && this.tiempoAcumulado > 1){
				this.tiempoAcumulado = 0;
				this.indiceAnimacion++;
			}
		}

		if (teclado.teclasPresionadas[key.W] || teclado.teclasPresionadas[key.ARROW_UP]) {
			this.y++;
		}

		if (teclado.teclasPresionadas[key.S] || teclado.teclasPresionadas[key.ARROW_DOWN]) {
			this.y--;
		}

		if (!teclado.teclasPresionadas[key.A] && !teclado.teclasPresionadas[key.ARROW_LEFT] && !teclado.teclasPresionadas[key.D] && !teclado.teclasPresionadas[key.ARROW_RIGHT]) {
			if (this.indiceAnimacion !== 2 && this.tiempoAcumulado > 1) {
				this.tiempoAcumulado= 0;
				this.indiceAnimacion -= this.indiceAnimacion > 2 ? 1 : -1;
			}
		}
	},
	
	

	actualizarConMouse: function() {
		this.x += (mouse.x - this.x) / this.velocidadMovimiento;
		this.y += (mouse.y - this.y) / this.velocidadMovimiento;
	},

	actualizar: function(delta) {
		this.tiempoAcumulado += delta;
		this.actualizarConTeclas();
		//this.actualizarConMouse();
		this.imagenActual = this.posiciones[this.indiceAnimacion];
	},

	dibujar: function(contexto) {
		contexto.drawImage(spriteSheet, this.imagenActual.x, this.imagenActual.y, 25, 16, this.x, this.y, 25, 16);
	}	
};