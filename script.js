//Yamila Hesain Comision 30440

//Presentación de la página
alert("BIENVENIDO A TIENDA FENIX \n       ♥ by YamiHesa ♥")

//Pido Nombre y Apellido para Saludo de Bienvenida
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

    alert("Hola!!!! \n" + nombre + " " + apellido);

alert("Estos son los productos que tenemos↓↓↓") 


//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
    }
    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}

//Inicializo arrays para las categorias de los productos
const velas = [];
const sahumerios = [];
const hornitos = [];
const fuentes = [];
const atrapasueños = [];



//Cargo el stock de productos segun su ID
//VELAS-SAHUMERIOS-HORNITOS-FUENTES-ATRAPASUEÑOS
const productos = [
    {
        id: 1,
        nombre: "Vela Chica",
        precio: 100,
        stock: 10,
        img: "./IMAGENES/Velas/adornos-para-velas.jpg"
    },
    {
        id: 2,
        nombre: "Vela Mediana",
        precio: 150,
        stock: 15,
        img: "IMAGENES/Velas/OIP.jpg"
    },
    {
        id: 3,
        nombre: "Sahumerio de Rosas",
        precio: 120,
        stock: 20,
        img: "IMAGENES/Sahumerios/Sahumerio1.jpeg"
    },
    {
        id: 4,
        nombre: "Sahumerio de Sándalo",
        precio: 120,
        stock: 10,
        img: "IMAGENES/Sahumerios/Sahumerio2.jpg"
    },
    {
        id: 5,
        nombre: "Hornito de Cerámica",
        precio: 2900,
        stock: 10,
        img: "IMAGENES/Hornitos/Hornito.jpeg"
    },
    {
        id: 6,
        nombre: "Hornito de Piedra",
        precio: 2000,
        stock: 10,
        img: "IMAGENES/Hornitos/hornito2.jpg"
    },
    {
        id: 7,
        nombre: "Fuente de Agua Mediana",
        precio: 8500,
        stock: 5,
        img:"IMAGENES/Fuentes/fuente1.png"
    },
    {
        id: 8,
        nombre: "Fuente de Grande",
        precio: 10800,
        stock: 3,
        img:"IMAGENES/Fuentes/fuente2.jpg"
    },
    {
        id: 9,
        nombre: "Atrapasueños Mediano",
        precio: 1800,
        stock: 5,
        img:"IMAGENES/Atrapasueños/Atrapasueños.jpg"
    },
    {
        id: 10,
        nombre: "Atrapasueños Grande",
        precio: 2500,
        stock: 8,
        img:"IMAGENES/Atrapasueños/atrapasueños2.jpg"
    },
]

const carrito = []

function renderizarProductos(){
    let seccionProductos = document.getElementById("seccion-productos");
        productos.forEach((producto)=>{
    
            let productoHTML =`

                <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
                 <div class="card text-center" style="width:15rem;">
                    <img class= card-img src=${producto.img} height='150px'>
                    <div class="card-body">
                        <h3>${producto.nombre}</h3>
                        <h4>$ ${producto.precio}</h4>
                        <button class="btn btn-secondary"> Comprar</button>
                    </div>
                </div>
                </div>`
             
        
        seccionProductos.innerHTML += productoHTML
        });
    }

renderizarProductos()



//Funcion para calcular el precio de la compra de cada ID
function calcularPrecio(precioProducto, cantidadProducto){
    return ((precioProducto * 1.21) * cantidadProducto);
}
   


let cantidadCompras = parseInt(prompt("Ingrese la cantidad de productos a comprar:"))
let precioTotal = 0;
for(let i = 0; i < cantidadCompras; i++){
//Solicito al usuario el ID del producto a comprar
let productosSeleccionado = parseInt(prompt("Ingrese el ID del producto que desea comprar:"));
const velaBuscada = velas.find(vela => vela.id === productosSeleccionado);
const sahumerioBuscado = sahumerios.find(sahumerio => sahumerio.id === productosSeleccionado);
const hornitoBuscado = hornitos.find(hornito => hornito.id === productosSeleccionado);
const fuenteBuscada = fuentes.find(fuente => fuente.id === productosSeleccionado);
const atrapasueñoBuscado = atrapasueños.find(atrapasueño => atrapasueño.id === productosSeleccionado); 

//Solicito al usuario la cantidad de productos que desea comprar

let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que quiere comprar del producto seleccionado:"));

if (productosSeleccionado <= 0) {
    alert("Ingresa un ID valido");
} else if (productosSeleccionado <=2) {
    precioTotal += calcularPrecio(velaBuscada.precio, cantidad);
    alert("El precio final de tu compra es: $" + calcularPrecio(velaBuscada.precio, cantidad));
    velaBuscada.vender(cantidad);
} else if (productosSeleccionado <=4) { 
    precioTotal += calcularPrecio(sahumerioBuscado.precio, cantidad);   
     alert("El precio final de tu compra es: $" + calcularPrecio(sahumerioBuscado.precio, cantidad));
    sahumerioBuscado.vender(cantidad);
} else if (productosSeleccionado <= 6) {
    precioTotal += calcularPrecio(hornitoBuscado.precio, cantidad);
    alert("El precio final de tu compra es: $" + calcularPrecio(hornitoBuscado.precio, cantidad));
    hornitoBuscado.vender(cantidad);
} else if (productosSeleccionado <= 8) {
    precioTotal += calcularPrecio(fuenteBuscada.precio, cantidad);
    alert("El precio final de tu compra es: $" + calcularPrecio(fuenteBuscada.precio, cantidad));
    fuenteBuscada.vender(cantidad);
} else if (productosSeleccionado <= 10) {
    precioTotal += calcularPrecio(atrapasueñoBuscado.precio, cantidad);
    alert("El precio final de tu compra es: $" + calcularPrecio(atrapasueñoBuscado.precio, cantidad));
    atrapasueñoBuscado.vender(cantidad);
} else {
    alert("Ingresa un ID valido, ese producto es inexistente");
} 
}
//Le mostramos al usuario el precio Total de su compra
alert ("El total de su compra es $ " + precioTotal)
alert("¡Que disfrute de su compra  \n Lo esperamos de nuevo!")










