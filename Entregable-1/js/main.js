let band = true;

while(band){

    let opcion = parseInt(prompt('Ingresa una opcion.\n1. tabla de multiplicar del numero dado\n2. suma de numeros dados \n3. salir\n(Los resultados se veran en consola) '));

    if(opcion == 1){
        
        let numero = parseInt(prompt('Ingresa el numero: '));
        let resultado = 0;

        for( let i = 0;i<=10;i++){
            resultado = numero * i;
            console.log(numero+' * '+i+' : '+resultado)
        }

        continue;

    } else if (opcion == 2) {

        let numero;
        let j = 0;
        resultado = 0;

        while(numero != 0){
            
            numero = parseInt(prompt('Ingresa numero a sumar. llevas '+j +' numeros.\npresiona 0 para terminar la suma ' ))
            resultado += numero;
            j++;

        }
        j--;
        console.log('La suma de todos los '+j+' numeros ingresados es: '+resultado);
        continue;

    }else if(opcion == 3){

        console.log('Feliz dia, vuelva pronto. ;)');
        band = false;

    }else{

        alert('Opcion no valida.\n Ingresa una opcion correcta')
        continue;

    }

}