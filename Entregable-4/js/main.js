const categoria = ['aventura','comics','ficcion','juveniles','filosofia','clasicos']
function mostrarCategorias(){

    let msn = '';

    for (let i = 0; i < categoria.length; i++) {
        const element = categoria[i];
        msn+= `${parseInt(i)+1}. ${element}\n`;
    }

    return msn;
}

class Libro{

    constructor(name,year,author,category,price){
        this.name = name;
        this.year = year;
        this.author = author;
        this.category = category;
        this.price = price;
    }
    
    infoLibro(){

        let infoLB = `Nombre: ${this.name}\nAnio publicacion: ${this.year}\nAutor: ${this.author}\nCategoria: ${this.category}\nPrecio: ${this.price}`
        return infoLB;

    }

}

class Libreria{

    constructor(){
        this.libros = [];
    }

    filtrar(opcion){
        if(opcion == 1){
            const aventura = this.libros.filter(libro => libro.category == 1);
            return aventura;
        } else if(opcion == 2){
            const comics = this.libros.filter(libro => libro.category == 2);
            return comics;
        } else if(opcion == 3){
            const ficcion = this.libros.filter(libro => libro.category == 3);
            return ficcion;
        } else if(opcion == 4){
            const juveniles = this.libros.filter(libro => libro.category == 4);
            return juveniles;
        } else if(opcion == 5){
            const filosofia = this.libros.filter(libro => libro.category == 5);
            return filosofia;
        } else if(opcion == 6){
            const clasicos = this.libros.filter(libro => libro.category == 6);
            return clasicos;
        }
    }
    
    agregar(libro){
        this.libros.push(libro);
    }

    mostrar(){
        const listado = this.libros.map(libro => libro.name);
        return listado;
    }

}

class Cliente{

    constructor(nombre,edad,preferencias){
    
        this.nombre = nombre;
        this.edad = edad;
        this.preferencias = preferencias; 
        this.inventario = [];
    
    }

    agregarLibro(indice,libreria){
        let realind = parseInt(indice) -1;
        this.inventario.push(libreria.libros[realind]);
    }

    eliminarLibro(indice){

        let realpos = parseInt(indice) - 1;

        if (indice == 1){
            this.inventario.splice(0,1);
        } else if ( indice != undefined ){
            this.inventario.splice(realpos,1);
        }
    }

    verCarrito(){
        const listado = this.inventario.map(libro => libro.name);
        return listado;
    }

    detallesLibroCarrito(indice){
        let realind = parseInt(indice) - 1;
        let info = this.inventario[realind].infoLibro();
        return info;
    }

    crearLibroLib(name,year,author,category,price,libreria){
        const libroNuevo = new Libro(name,year,author,category,price);
        libreria.agregar(libroNuevo);
    }

    borrarLibroLib(indice,libreria){
        let realpos = parseInt(indice) - 1;

        if (indice == 1){
            libreria.libros.splice(0,1);
        } else if ( indice != undefined ){
            libreria.libros.splice(realpos,1);
        }
    }

}

const libro1 = new Libro('HarryPotter',2002,'Jk',1,250);
const libro2 = new Libro('Hobbit',2005,'FRODO',1,500);
const libro3 = new Libro('Crepusculo',1956,'VLAD',3,710);
const libro4 = new Libro('Xmen',1955,'Stan lee',2,840);
const libro5 = new Libro('Batman',1955,'DC',2,468);
const libro6 = new Libro('Ironman',1955,'Marvel',2,840);
const libro7 = new Libro('Silence',2021,'Flor M.',4,333);
const libro8 = new Libro('Nosotros Luna',2019,'Alice J.',4,933);
const libro9 = new Libro('Leviatan',1651,'Hobbes',5,470);
const libro10 = new Libro('Quijote',1605,'Cervantes',6,1200);
const libro11 = new Libro('Dracula',1897,'Cervantes',6,1500);

const miLibreria = new Libreria;

miLibreria.agregar(libro1);
miLibreria.agregar(libro2);
miLibreria.agregar(libro3);
miLibreria.agregar(libro4);
miLibreria.agregar(libro5);
miLibreria.agregar(libro6);
miLibreria.agregar(libro7);
miLibreria.agregar(libro8);
miLibreria.agregar(libro9);
miLibreria.agregar(libro10);
miLibreria.agregar(libro11);


function mostrarLibrosEnLibreria(){

    let librosEnLib = miLibreria.mostrar();
    let msn = '';

    for(let i =0;i<librosEnLib.length;i++){
        msn += `${parseInt(i)+1}. ${librosEnLib[i]}\n`;
    }

    return msn;
}

function mostrarLibrosEnCarrito(){

    let librosEnCarrito = usuario1.verCarrito();
    let msn = '';

    for(let i =0;i<librosEnCarrito.length;i++){
        msn += `${parseInt(i)+1}. ${librosEnCarrito[i]}\n`;
    }

    return msn;
}


let band = true;

let nombre = prompt('Ingrese su nombre: ');
let edad = prompt('Ingrese su edad: ')
let cat = mostrarCategorias();
let preferencias = prompt(cat+'Seleccione una categoria(1-7)')
const usuario1 = new Cliente(nombre,edad,preferencias);

while (band) {

    let eleccion = prompt('1. Agregar un libro al carrito\n2. Eliminar un libro del carrito\n3. Ver carrito\n4. Ver informacion detallada de algun libro\n5. Ver recomendaciones\n6. Ver precio total del carrito\n7. Agregar o eliminar un libro de la libreria\n8. Salir ');

    if(eleccion == 1){

        let seleccionarLib = prompt(mostrarLibrosEnLibreria()+'Seleccione un libro: ');
        usuario1.agregarLibro(seleccionarLib,miLibreria);

    } else if(eleccion == 2){

        let seleccionarLib = prompt(mostrarLibrosEnCarrito()+'Selecione el libro que desea eliminar: ');
        usuario1.eliminarLibro(seleccionarLib);

    } else if(eleccion == 3){

        alert(mostrarLibrosEnCarrito());

    } else if(eleccion == 4){

        let sleccionarLib = prompt(mostrarLibrosEnCarrito()+'\nSeleccione el libro para ver mas informacion: ')

        alert(usuario1.detallesLibroCarrito(sleccionarLib));

    } else if(eleccion == 5){

        const recomendados = miLibreria.filtrar(preferencias);
        let msn = '';

        for (let i = 0; i < recomendados.length; i++) {
            msn+= `${parseInt(i)+1}. ${recomendados[i].name}\n`;
        }

        alert('Nuestras recomendaciones para ti son: \n'+msn);

    } else if(eleccion ==6){

        const totalPagar = usuario1.inventario.reduce((acumulador, libro) => acumulador + libro.price, 0);
        alert(`El valor total de tus libros seleccionados es: $${totalPagar}`);

    } else if(eleccion == 7){
        
        let band2 = true;
        
        while(band2){

            let op2 = prompt('1. Agregar un libro a la libreria.\n2. Eliminar un libro de la libreria\n3. salir\nSeleccione una opcion(1-3)');
            if (op2 == 1) {

                let libname = prompt('Ingresa el nombre del libro: ');
                let libyear = parseInt(prompt('Ingresa el anio de publicacion del libro'));
                let author = prompt('Ingresa el nombre del autor: ');
                let categoria = prompt(cat+'Seleccione una categoria(1-7)');
                let precio = parseInt(prompt('Ingrese el valor del libro: '));

                usuario1.crearLibroLib(libname,libyear,author,categoria,precio,miLibreria);

            } else if(op2 == 2){

                let seleccionarlib = prompt(mostrarLibrosEnLibreria()+'Seleccione un libro a eliminar: ');
                usuario1.borrarLibroLib(seleccionarlib,miLibreria);

            }else if(op2 == 3){

                band2=false;

            } else{
                alert('Selecciona una opcion correcta')
            }

        }

    } else if(eleccion == 8){

        band = false;
        alert('Gracias por venir, hasta pronto.');

    } else {
        alert('Seleccione una opcion correcta')
    }

}
