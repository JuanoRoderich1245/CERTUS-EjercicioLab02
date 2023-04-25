let n = parseInt(prompt("Ingrese el número:"));

/* Es una función con el parámetro "n" */
function esPrimo(n) {

    /* Declaramos un contador */
    let contador = 0;

    /* Colocamos un for para iniciar el recorrido desde 2 */
    for (let i = 2; i < n; i++) {
        /* Validamos si el residuo o módulo nos da el resutado de 0 */
        /* Debido a esto se va a demostrar di el número n es divisible entre i */
        if (n % i == 0) {
            /* El contador aumenta por cada resultado del residuo que es igual a 0 */
            contador += 1;
        }
    }

    /* Se utiliza para determinar si el número es primo o no
    de acuerdo a la cantidad de números que se pueden dividir sin dejar residuo
    aparte de 1 y n. */
    if (contador == 0) {
        /* console.log(n + " es un número primo."); */
        document.write("<p>El número " + n + " <strong>sí</strong> es primo. </p>");
    } else {
        /* console.log(n + " no es un número primo."); */
        document.write("<p>El número " + n + " <strong>no</strong> es primo. </p>");
    }
}

/* Nos permitirá ver en la página web sí o no es primo. */
esPrimo(n);