const libros = JSON.parse(localStorage.getItem('LibrosPublicados'));

const cards = document.getElementById('cards');
const items = document.getElementById('items');
const footer = document.getElementById('footer');

const templateCard = document.getElementById('template-card').content;
const templateFooter = document.getElementById('template-footer').content;
const templateCarrito = document.getElementById('template-carrito').content;
const fragment = document.createDocumentFragment();
let carrito = {};
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'));
        pintarCarrito();
    }
});

cards.addEventListener('click', e => {
    addCarrito(e);
})

items.addEventListener('click', e => {
    btnAccion(e)
});

const pintarCard = data =>{
    data.forEach(lib => {
        templateCard.querySelector('h5').textContent = lib.name;
        templateCard.querySelector('.autor').textContent = lib.author;
        templateCard.querySelector('.categoria').textContent = lib.category;
        templateCard.querySelector('.aniopubs').textContent = lib.year;
        templateCard.querySelector('.isbn').textContent = lib.isbn;
        templateCard.querySelector('.precio').textContent = lib.precio;
        templateCard.querySelector('.btn-dark').dataset.id = lib.id
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
}

const addCarrito = e => {
    if (e.target.classList.contains('btn-dark')) {
        setCarrito(e.target.parentElement);
    }
    e.stopPropagation();
}

const setCarrito = objeto => {

    const libro = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        name: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('.precio').textContent,
        cantidad: 1,
    }

    if(carrito.hasOwnProperty(libro.id)){
        libro.cantidad = carrito[libro.id].cantidad + 1;
    }

    carrito[libro.id] = {...libro}
    pintarCarrito()

}

const pintarCarrito = () => {

    items.innerHTML = '';

    Object.values(carrito).forEach( lib => {
        templateCarrito.querySelector('th').textContent = lib.id;
        templateCarrito.querySelectorAll('td')[0].textContent = lib.name;
        templateCarrito.querySelectorAll('td')[1].textContent = lib.cantidad;
        templateCarrito.querySelector('.btn-info').dataset.id = lib.id;
        templateCarrito.querySelector('.btn-danger').dataset.id = lib.id;
        templateCarrito.querySelector('span').textContent = lib.cantidad * lib.precio;

        const clone = templateCarrito.cloneNode(true);
        fragment.appendChild(clone);

    })

    items.appendChild(fragment);
    pintarFooter();
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

const pintarFooter = () => {
    footer.innerHTML = '';
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacio - selecciona libros</th>
        `;
        return 0;
    }

    const numLibsCar = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad ,0)
    const precioLibsCar = Object.values(carrito).reduce((acc, {cantidad,precio}) => acc + cantidad*precio ,0)
    
    templateFooter.querySelectorAll('td')[0].textContent = numLibsCar;
    templateFooter.querySelector('span').textContent = precioLibsCar;

    const clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);
    footer.appendChild(fragment);

    const btnVaciar = document.getElementById('vaciar-carrito');
    btnVaciar.addEventListener('click', () => {
        carrito = {};
        pintarCarrito();
    })
}

const btnAccion = e => {

    if (e.target.classList.contains('btn-info')){
        const lib = carrito[e.target.dataset.id];
        lib.cantidad++;
        carrito[e.target.dataset.id] = {...lib};
        pintarCarrito();
    }

    if (e.target.classList.contains('btn-danger')){
        const lib = carrito[e.target.dataset.id];
        lib.cantidad--;
        if (lib.cantidad === 0){
            delete carrito[e.target.dataset.id];
        }
        pintarCarrito();
    }

    e.stopPropagation()
}

let btnSalir = document.getElementById('salirAdmin');
btnSalir.addEventListener('click', e => {  
    location.href = 'index.html';
});

pintarCard(libros);