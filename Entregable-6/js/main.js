let cont = 1;
let librosEnLib = [];
const categoria = ['Aventura','Comics','Ficcion','Juveniles','Filosofia','Clasicos'];
const listaDeLibrosHTML = document.querySelector('.padre');

let formulario = document.getElementById('formulario')
let nombreLibro = document.getElementById('nombre-libro');
let nombreAutor = document.getElementById('nombre-autor');
let aniopub = document.getElementById('anio-publicacion');
let categoriaSelec = document.getElementById('categoria');
let precio = document.getElementById('precio');
let isbn = document.getElementById('isbn');

class Libros{

    constructor(name,year,author,category,precio,isbn){
        this.name = name;
        this.year = year;
        this.author = author;
        this.isbn = isbn
        this.category = categoria[category];
        this.precio = precio;
    }

}

function inicializarValores(){



}

formulario.onsubmit = () => {

    event.preventDefault();
    let libNom = nombreLibro.value;
    let libAuth = nombreAutor.value;
    let libIsbn = isbn.value;
    let libCat = categoriaSelec.value-1;
    let libAnioPub = aniopub.value;
    let libPrecio = precio.value;

    const libAdd = new Libros(libNom, libAnioPub, libAuth, libCat, libPrecio,libIsbn);

    agregarLib(libAdd);

}

function agregarLib(libro) {
    let contenedor = document.createElement('li')

    contenedor.innerHTML = `
    <ul id = "${cont}" style = "list-style: none;">
        <h4 style = "color: red">${cont}. ${libro.name}</h4> 
        <li>Anio publicacion: ${libro.year}</li>
        <li>Autor: ${libro.author}</li>
        <li>ISBN: ${libro.isbn}</li>
        <li>Categoria: ${libro.category}</li>
        <li>Precio: ${libro.precio}</li>
        <hr>
    </ul>
    `;

    librosEnLib.push(libro);
    valorLibreria();

    cont+=1
    listaDeLibrosHTML.appendChild(contenedor)

}

function valorLibreria(){

    const valorTotal = librosEnLib.reduce((acumulador,libro)=> acumulador + parseInt(libro.precio), 0)
    let precioTotal = document.getElementById("valor");
    precioTotal.innerText = `Valores acumulado de los libros creados: ${valorTotal}`;

}
