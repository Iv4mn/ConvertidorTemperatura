function celciusafahrenheit() {
	while (true) {
		switch (prompt("Selecciona una opción: \n 1. Celsius a Fahrenheit \n 2. Fahrenheit a Celcius.")) {
			case "1": {
				let celcius_fah = Number(prompt("Especifica el valor en Celcius"))
				let resultadocelsto = Math.round((celcius_fah * 9/5) + 32)
				document.getElementById('resultado').innerHTML = "En grados Fahrenheit, eso sería " + resultadocelsto + "°F"
				break;
			}

			case "2": {
				let fah_celcius = Number(prompt("Especifica el valor en Fahrenheit"))
				let resultadofahrto = Math.round((fah_celcius - 32) * 5/9)
				document.getElementById('resultado').innerHTML = "En grados Celcius, eso sería " + resultadofahrto + "°C"
				break;
			}

			default: {
				alert("No has seleccionado una opción válida");
				break;
			}
		}
break;
	}
}