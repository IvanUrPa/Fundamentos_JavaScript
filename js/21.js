function sumar(numero1, numero2) {  //numero1, numero 2 son parametros || numero1 = 0 y numero2 = 0 estos son parametros por default esto evita obtener un resultado undefine o NaN
                                    // se usa cuando no todos los parametros estan definidos
    console.log(numero1 * numero2);
}
sumar(20, 1); //20, 1 argumentos a los valores reales
sumar(20, 2);
sumar(20, 3);
sumar(20, 4);

const sumar2 = function (n1, n2) {
    console.log(n1 + n2);
}
sumar2(1, 2);
sumar2(1, 3);
sumar2(1, 4);