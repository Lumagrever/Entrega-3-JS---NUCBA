
// 1- Definir las variables

const pizzas_variety = [
    {
        nombre: "Super Muzarella",
        id: 1,
        ingredientes: [`Muzzarella`, `salsa de tomate`],
        aceitunas: true,
        precio: 850,
        img: "./assets/Pizzas/Super Muzarella.png"
    },
    {
        nombre: "Super Primavera",
        id: 2,
        ingredientes: [`Muzzarella`,`rucula`, `tomate`, `salsa de tomate`],
        aceitunas: true,
        precio: 1000,
        img: "./assets/Pizzas/Super Primavera.png"
    
    },
    {
        nombre: "Super Toscana",
        id: 3,
        ingredientes: [`Muzzarella`,`jamón crudo`,`rucula`, `salsa de tomate` ],
        aceitunas: false,
        precio: 1000,
        img: "./assets/Pizzas/Super Toscana.png"
    },
    {
        nombre: "Super Salamin",
        id: 4,
        ingredientes: [`Muzzarella`,`salamin`, `aceitunas`, `salsa de tomate`],
        aceitunas: true,
        precio: 1000,
        img: "./assets/Pizzas/Super Salamin.png"
    },
    {
        nombre: "Super Mexicana",
        id: 5,
        ingredientes: [`Muzzarella`,`salchicha`, `salamin picante`, `maíz`, `salsa de tomate`],
        aceitunas: true,
        precio: 1000,
        img: "./assets/Pizzas/Super Mexicana.png"
    },
    {
        nombre: "Super Cuatro Quesos",
        id: 6,
        ingredientes: [`Muzzarella`,`queso gorgonzola`, `queso fontina`, `queso parmesano`],
        aceitunas: true,
        precio: 1000,
        img: "./assets/Pizzas/Super Cuatro Quesos.png"
    },
    {
        nombre: "Super Romana",
        id: 7,
        ingredientes: [`Muzzarella`,`jamón`, `aceitunas`, `champiñones`, `salsa de tomate`],
        aceitunas: false,
        precio: 1000,
        img: "./assets/Pizzas/Super Romana.png"
    },
    {
        nombre: "Super Jamón",
        id: 8,
        ingredientes: [`Muzzarella`,`jamón`, `salsa de tomate`],
        aceitunas: true,
        precio: 1000,
        img: "./assets/Pizzas/Super Jamon.png"
    },
    {
        nombre: "Super Pollo",
        id: 9,
        ingredientes: [`Muzzarella`,`pollo`, `morrón`, `champiñones`, `salsa de tomate` ],
        aceitunas: true,
        precio: 1000,
        img: "./assets/Pizzas/Super Pollo.png"
    },
    {
        nombre: "Super Picante",
        id: 10,
        ingredientes: [`Muzzarella`,`salamin picante`, `pimientos picantes`, `salsa de tomate`],
        aceitunas: true,
        precio: 1000,
        img: "./assets/Pizzas/Super Picante.png"
    }
];

const form = document.querySelector('form');
const input = document.querySelector('.input-number-pizza'); // Input number de HTML
const searchPizza = document.querySelector('.search-pizza'); // form en html
const pizzasLists = document.querySelector('.pizzas-lists'); // listas renderizadas

// Grabar en LS

const saveLocalStorage = (pizzas_variety) => {  //Esto sirve para "guardar en LocalStorage"
    localStorage.setItem ('pizzas', JSON.stringify(pizzas_variety))  // Esto sirve para "guardar en LocalStorage"
}

//  Crear y Renderizar las pizzas y errores

const thisPizza = (pizzasLista) => {
if(!pizzasLista) {
    pizzasLists.innerHTML = 
    `<li class="li-error" style="border: solid red;"> 
        <h2>Aún no tenemos esa pizza</h2>
    </li>`;
} else { 
    pizzasLists.innerHTML = 
    `<li> 
        <h2>${pizzasLista.nombre}</h2> 
        <h3>Precio: $${pizzasLista.precio}</h3 data-id=${pizzasLista.pizzaId}>
        <h4>Ingredientes: </h4> 
        <h5> ${pizzasLista.ingredientes.join(", ")}</h5>
        <div id="pizzas">
            <img src="${pizzasLista.img}" alt="Pizza de ${pizzasLista.nombre}">
        </div>
    </li>`;
}}


const renderErrorNumber = () => {
    pizzasLists.innerHTML = 
    `<li class="li-error" style="border: solid red;"> <h2>Aún no tenemos esa pizza</h2> </li>`
}

const renderErrorId = () => {
    pizzasLists.innerHTML = 
    `<li class="li-error" style="border: solid red;"> <h2>Coloca un número del 1 al 10</h2> </li>`
}

// Formulario para agregar pizzas

const pizzaSearch = (value) => pizzas_variety.find((pizza) => pizza.id === value);

const showPizza = event => {
    event.preventDefault();                     

    const idPizza = input.value;       
    if(!idPizza) {
        renderErrorId();
        return
    }
    const pizzaSearched = pizzaSearch(Number(idPizza));
    thisPizza(pizzaSearched);
    saveLocalStorage(pizzaSearched);
    form.reset()
}

const init = () => {
    let pizzasSaved = JSON.parse(localStorage.getItem('pizzas')) || [] //Traer elementos del LS si existen
    if(pizzasSaved){
        thisPizza(pizzasSaved)
    }
    searchPizza.addEventListener('submit', showPizza);
}
 init()