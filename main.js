
// 1- Definir las variables

const pizzas_variety = [
    {
        nombre: "Super Muzarella",
        id: 1,
        ingredientes: [`Muzzarella`, `salsa de tomate`],
        aceitunas: true,
        precio: 850,
        img: ""
    },
    {
        nombre: "Super Primavera",
        id: 2,
        ingredientes: [`Muzzarella`,`rucula`, `tomate`, `salsa de tomate`],
        aceitunas: true,
        precio: 1000,
    
    },
    {
        nombre: "Super Toscana",
        id: 3,
        ingredientes: [`Muzzarella`,`jamón crudo`,`rucula`, `salsa de tomate` ],
        aceitunas: false,
        precio: 1000,
    },
    {
        nombre: "Super Salamin",
        id: 4,
        ingredientes: [`Muzzarella`,`salamin`, `aceitunas`, `salsa de tomate`],
        aceitunas: true,
        precio: 1000,
    },
    {
        nombre: "Super Mexicana",
        id: 5,
        ingredientes: [`Muzzarella`,`salchicha`, `salamin picante`, `maíz`, `salsa de tomate`],
        aceitunas: true,
        precio: 1000,
    },
    {
        nombre: "Super Cuatro Quesos",
        id: 6,
        ingredientes: [`Muzzarella`,`queso gorgonzola`, `queso fontina`, `queso parmesano`, `salsa de tomate`],
        aceitunas: true,
        precio: 1000,
    },
    {
        nombre: "Super Romana",
        id: 7,
        ingredientes: [`Muzzarella`,`jamón`, `aceitunas`, `champiñones`, `salsa de tomate`],
        aceitunas: false,
        precio: 1000,
    },
    {
        nombre: "Super Jamón",
        id: 8,
        ingredientes: [`Muzzarella`,`jamón`, `salsa de tomate`],
        aceitunas: true,
        precio: 1000,
    },
    {
        nombre: "Super Pollo",
        id: 9,
        ingredientes: [`Muzzarella`,`pollo`, `aceitunas`, `morrón`, `champiñones`, `salsa de tomate` ],
        aceitunas: true,
        precio: 1000,
    },
    {
        nombre: "Super Picante",
        id: 10,
        ingredientes: [`Muzzarella`,`salamin picante`, `pimientos picantes`, `salsa de tomate`],
        aceitunas: true,
        precio: 1000,
    }
];

const input = document.querySelector('.input-number-pizza') // Input number de HTML
const searchPizza = document.querySelector('.search-pizza') // form en html
const pizzasLists = document.querySelector('.pizzas-lists') // listas renderizadas

// 2- Traer elementos del LS si existen

let pizzas = JSON.parse(localStorage.getItem('pizzas')) || []

// 3- Grabar en LS

const saveLocalStorage = (pizzasList) => {  //Esto sirve para "guardar en LocalStorage"
    localStorage.setItem ('pizzas', JSON.stringify(pizzasList))  // Esto sirve para "guardar en LocalStorage"
}

// 4-  Crear y Renderizar las pizzas y errores Crear el elemento a renderizar 

const thisPizza = (pizzasLista) => 
` 
<li> <h2>${pizzasLista.nombre}</h2> <h3>Precio: $${pizzasLista.precio}</h3 data-id=${pizzasLista.pizzaId}>
    <h4>Ingredientes: <h4> <h5> ${pizzasLista.ingredientes} </h5>
</li>
`;

const renderPizzasList = renderPizzas => pizzasLists.innerHTML += renderPizzas.map(pizza => thisPizza(pizza)).join('')


const renderErrorNumber = () => {
    return `
    <li class="li-error" style="border: solid red;"> <h2>Aún no tenemos esa pizza</h2>
    </li>
    `
}

const crearRenderErrorNumber = () => pizzasLists.innerHTML += renderErrorNumber();

const renderErrorId = () => {
    return `
    <li class="li-error" style="border: solid red;"> <h2>Coloca un número del 1 al 10</h2>
    </li>
    `
}

const crearRenderErrorId = () => pizzasLists.innerHTML += renderErrorId();

// 7- Formulario para agregar tareas

const showPizza = event => {
    event.preventDefault();                     

    const idPizza = input.value;        
    let pizzaEncontrada = pizzas_variety.filter(pizza => pizza.id == idPizza);
    if(pizzaEncontrada[0] != undefined) {
        renderPizzasList(pizzaEncontrada)
    } else if (idPizza) {
        crearRenderErrorNumber()
    } else {
        crearRenderErrorId()
    }       
}

const init = () => {
    saveLocalStorage(pizzas_variety)
    searchPizza.addEventListener('submit', showPizza);
    pizzasLists.addEventListener('click', removePizza);
    hideDeleteAll(pizzas);
}
 init()