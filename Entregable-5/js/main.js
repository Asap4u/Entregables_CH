class Libros{

    constructor(name,year,author,category,precio){
        this.name = name;
        this.year = year;
        this.author = author;
        this.category = categoria[category];
        this.precio = precio;
    }

}

let cont = 1
let librosEnLib = []
const categoria = ['aventura','comics','ficcion','juveniles','filosofia','clasicos']
const listaDeLibrosHTML = document.querySelector('.padre');

function mostrarCategorias(){

    let msn = '';

    for (let i = 0; i < categoria.length; i++) {
        const element = categoria[i];
        msn+= `${parseInt(i)+1}. ${element}\n`;
    }

    return msn;
}

function valorLibreria(){

    const valorTotal = librosEnLib.reduce((acumulador,libro)=> acumulador + libro.precio, 0)
    let precioTotal = document.getElementById("valor");
    precioTotal.innerText = `Valores acumulado de los libros creados: ${valorTotal}`;

}

function agregarLib(){
    let nombre = prompt('Ingresa el nombre de el libro: ')
    let author = prompt('Ingresa el nombre del autor: ')
    let anio = parseInt(prompt('Ingresa el anio de publicacion: '))
    let precio = parseFloat(prompt('Ingresa el precio del libro: '))
    let cat = mostrarCategorias();
    let preferencias = prompt(cat+'Seleccione una categoria(1-6)')
    const libroNuevo = new Libros(nombre,anio,author,parseInt(preferencias)-1,precio)
    librosEnLib.push(libroNuevo)

    let contenedor = document.createElement('li')

    contenedor.innerHTML = `
    <ul id = "${cont}" style = "list-style: none;">
        <h4 style = "color: red">${cont}. ${libroNuevo.name}</h4> 
        <li>Anio publicacion: ${libroNuevo.year}</li>
        <li>Autor: ${libroNuevo.author}</li>
        <li>Categoria: ${libroNuevo.category}</li>
        <li>Precio: ${libroNuevo.precio}</li>
        <hr>
    </ul>
    `;
    
    valorLibreria();

    cont+=1;
    listaDeLibrosHTML.appendChild(contenedor)
}

function eliminarLib(){
    let distacia = librosEnLib.length;
    let opcion = prompt("seleccione el libro a elminar (1-"+distacia+")")
    let libBorrar = document.getElementById(opcion)
    libBorrar.remove();
    librosEnLib.splice(parseInt(opcion)-1,1)
    
    valorLibreria();

}

document.getElementById("boton").onclick = function(){
    agregarLib();
}

document.getElementById("botonElim").onclick = function(){
    eliminarLib();
}

