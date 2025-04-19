const typed = new Typed('.typed', {
	strings: [
		'<i class="programador">Pagina web</i>',
		'<i class="programador">Desarrollador</i>',
		'<i class="programador">Diseño web</i>',
		'<i class="programador">Desarrollador web</i>',
		'<i class="programador">Desarrollador Frontend</i>',
		'<i class="programador">Desarrollador Backend</i>',
		'<i class="programador">Desarrollador Fullstack</i>',
		'<i class="programador">Desarrollador de aplicaciones</i>',
		'<i class="programador">Desarrollador de software</i>',
		'<i class="programador">Desarrollador de videojuegos</i>',
		'<i class="programador">Desarrollador de aplicaciones moviles</i>',
		'<i class="programador">Desarrollador de aplicaciones web</i>',
		'<i class="programador">Desarrollador de aplicaciones de escritorio</i>',
		'<i class="programador">Desarrollador de aplicaciones de realidad aumentada</i>',
		'<i class="programador">Desarrollador de aplicaciones de realidad virtual</i>',
		'<i class="programador">Desarrollador de aplicaciones de inteligencia artificial</i>',
		'<i class="programador">Desarrollador de aplicaciones de machine learning</i>',
		'<i class="programador">Desarrollador de aplicaciones de deep learning</i>',
		'<i class="programador">Blog</i>',
		'<i class="programador">Hostin</i>',
		'<i class="programador">Dominio</i>'
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
