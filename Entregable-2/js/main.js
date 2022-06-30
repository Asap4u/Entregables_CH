let band = true;
let continuar = true;
let libros = '';
let libro = '';
let valor = ''
let contlibros = 0;
let valortotal = 0;

while (band) {
    
    let opcion = parseInt(prompt('Ingresa una opcion.\n1. agregar libro\n2. conocer los libros y el valor acumulado de los libros seleccionados \n3. salir\n(Los resultados se veran en consola) '));

    if (opcion == 1) {

        while (continuar) {
            solicitarnombre();

        }

    } else if (opcion == 2) {
     
        mostrarlibros(libros,valortotal);
    
    } else if (opcion == 3){

        console.log('Feliz dia, vuelva pronto. ;)');
        band = false;

    }else{

        alert('Opcion no valida.\n Ingresa una opcion correcta')
        continue;

    }


}

function solicitarnombre() {
    
    libro = prompt('Ingresa el nombre de el libro: ');
    valor = parseFloat(prompt('Ingrese el valor del libro: '));
    contlibros+=1;
    libros += `${contlibros} : ${libro} \n`;
    valortotal += valor;
    
    continuar = prompt('Desea Continuar agregando libros?\n1. si\n2. no')
    if (continuar == 1) {
        continuar = true;
    } else if( continuar == 2){
        continuar = false;
    } 

}

function mostrarlibros(libroMostrar,dinerototal){
    console.log(`Libros:\n${libroMostrar}\n-Valor total: ${dinerototal}`);
}