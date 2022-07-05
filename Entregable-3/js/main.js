class Cliente{

    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
        this.inventario = [];
    }

    agregarLibros(libro){
        this.inventario.push(libro);
    }

    verInventario(){
        for (let i = 0; i < this.inventario.length; i++) {
            console.log(`posicion: ${i+1} Libro: ${this.inventario[i].nombre}`);
        }
    }

    infoDetallada(libro){
        let indice = parseInt(libro) - 1;
        console.log(this.inventario[indice].infoLibro());
    }

    eliminarPorIndice(posicion){
        let realpos = parseInt(posicion) - 1
        if (posicion==1){
            this.inventario.splice(0,1)
        } else if ( posicion != undefined ){
            this.inventario.splice(realpos,1);
        }
    }

    valorTolal(){
        let total = 0;
        for (let i = 0; i < this.inventario.length; i++) {
            total += this.inventario[i].precio;
        }
        return total;
    } 

}

class Libro {

    constructor(nombre,autor,anio,precio){

        this.nombre = nombre;
        this.autor = autor;
        this.anio = anio;
        this.precio = precio;

    }

    infoLibro(){
        console.log(`Nombre: ${this.nombre}\nAutor: ${this.autor}\nFecha de publicacion: ${this.anio}\nPrecio: ${this.precio}`);
    }

}

let nombre = prompt('Ingresa tu nombre: ');
let edad = parseInt(prompt('Ingresa tu edad: '));
let band = true;
const cliente1 = new Cliente(nombre,edad);

while (band) {

    let opcion = prompt(`Hola ${cliente1.nombre}.\nPor favor escoge una Opcion: \n1. Agregar Libros al carrito.\n2. ver carrito.\n3. Ver informacion de algun libro detallado.\n4. Eliminar algun libro del carrito.\n5. precio total a pagar.\n6. salir`)

    if (opcion == 1) {
        let name = prompt('Ingresa el nombre de el libro: ');
        let autor = prompt('Ingresa el nombre del autor: ')
        let anio = prompt('Ingresa el anio de publicacion del libro: ')
        let valorlibro = parseFloat(prompt('Ingresa el valor del libro: '))

        const libroNuevo = new Libro(name,autor,anio,valorlibro);
        cliente1.agregarLibros(libroNuevo);
    
    } else if (opcion == 2){

        if (cliente1.inventario != '') {

            cliente1.verInventario();

        } else { console.log('Para ver tu carrito primero tienes que agregar algun libro');}

    } else if (opcion == 3){

        if (cliente1.inventario != '') {
            
            cliente1.verInventario()
            let libro = prompt('Ingrese el libro que desea ver detalladamente: ')
            cliente1.infoDetallada(libro)

        } else { console.log('Para ver informacion de algun libro detallado primero tienes que agregar algun libro'); }


    } else if (opcion == 4){

        
        if (cliente1.inventario != '') { 

            let libro = prompt('Ingrese el libro que desea eliminar del carrito: ')
            cliente1.eliminarPorIndice(libro);
    
        } else {console.log('Para eliminar un libro de tu carrito primero tienes que agregar algun libro');}

    } else if (opcion == 5){

        if (cliente1.inventario != '') {
            let valor = cliente1.valorTolal()
            console.log(`Valor total a pagar: ${valor}`);
            
        } else {console.log('Para ver el total a pagar primero debes agregar un libro');}
    
    } else if (opcion == 6){

        console.log('Feliz dia, vuelva pronto. ;)');
        band = false;

    } else{

        alert('Opcion no valida.\n Ingresa una opcion correcta')
        continue;

    }

}