/*funcion 1*/
function invertir(cadena) {
    var x = cadena.length;
    var cadenaInvertida = "";

    while (x >= 0) {
        cadenaInvertida = cadenaInvertida + cadena.charAt(x);
        x--;
    }
    return document.getElementById('respuesta').innerHTML = cadenaInvertida;
}


/*Funcion 2*/
function llamarBuscar(hilera) {
    var vec = hilera.split(",");
    txtParametro.value = buscar(vec[0], vec[1]);

}

function buscar(hilera, letra) {
    var respuesta = -1;
    var index = 0;
    while (hilera.charAt(index) != letra & index < hilera.length) {
        index++;
    }
    if (index < hilera.length) {
        respuesta = index + 1;
    }
    return respuesta
}


/*Funcion 3*/
function llamarSeparar(hilera) {
    document.getElementById('respuesta').innerHTML = separar(hilera);
}

function separar(hilera) {
    return hilera.split(" ");
}


/*Funcion 4*/
function llamarSepararVarios(hilera1) {
    document.getElementById('respuesta').innerHTML = separarVarios(hilera1);
}

function separarVarios(hilera1) {
    var expRegular = new RegExp("[/-;?]")
    return hilera1.split(expRegular);
}


/*Funcion 4*/
function llamarPalindromo(hilera2) {
    document.getElementById('respuesta').innerHTML = palindromo(hilera2);
}

function palindromo(hilera2) {
    var bandera = true;
    var derecha = hilera2.length - 1;
    var izquierda = 0;

    while (bandera == true & derecha > izquierda) {
        if (hilera2.charAt(izquierda) == hilera2.charAt(derecha)) {
            izquierda++;
            derecha--;
        }
        else {
            bandera = false
        }
    }
    return bandera;
}