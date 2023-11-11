/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   return x == y;
}

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   return str1.length === str2.length;
}
function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:

   return num < 90;
}

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:

   return num > 50;
}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if(num == 0 || num == 2 || num == 4 || num == 6 || num ==8)
   {
       return true;
     
   }
       else {
        return false;
      }
   }


function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:

   if(num == 1 || num == 3 || num == 5 || num == 7 || num ==9)
   {
       return true;
     
   }
       else {
        return false;
      
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
