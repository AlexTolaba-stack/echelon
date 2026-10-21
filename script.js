/*
  ECHELON - CARTA DEL RESTAURANTE

  Para cambiar un precio, modificá el número.
  Ejemplo: precio: 8500 muestra $ 8.500.
  precio: 0 muestra "Consultar".
*/

const productos = [
    // CAFETERIA
    { nombre: "Pocillo", categoria: "cafeteria", precio: 2800 },
    { nombre: "Jarrito", categoria: "cafeteria", precio: 3200 },
    { nombre: "Doble", categoria: "cafeteria", precio: 3800 },
    { nombre: "Taza XL", categoria: "cafeteria", precio: 4200 },
    { nombre: "Submarino", categoria: "cafeteria", precio: 4200 },
    { nombre: "Cappuccino", categoria: "cafeteria", precio: 4500 },
    { nombre: "Café Irlandés", categoria: "cafeteria", precio: 4800 },
    { nombre: "Coffe Echelon", categoria: "cafeteria", precio: 5800 },
    { nombre: "Ice latte / Ice coffee", categoria: "cafeteria", precio: 4200 },
    { nombre: "Frapuccino", categoria: "cafeteria", precio: 5000 },
    { nombre: "Limonada vaso", categoria: "cafeteria", precio: 3000 },
    { nombre: "Limonada jarra", categoria: "cafeteria", precio: 5000 },
    { nombre: "Limonada combinada", categoria: "cafeteria", precio: 7000, descripcion: "Maracuyá o frutilla" },
    { nombre: "Jugo de naranja natural", categoria: "cafeteria", precio: 4000 },
    { nombre: "Naranjada jarra", categoria: "cafeteria", precio: 5000, descripcion: "Menta y jengibre" },
    { nombre: "Licuado con agua", categoria: "cafeteria", precio: 4000 },
    { nombre: "Licuado con leche", categoria: "cafeteria", precio: 4200 },
    { nombre: "Licuado con jugo", categoria: "cafeteria", precio: 4500 },

    // ENTRADAS Y PICOTEO
    { nombre: "Empanada unidad", categoria: "entradas", precio: 1800, descripcion: "Consultar variedad" },
    { nombre: "Empanadas docena", categoria: "entradas", precio: 18000 },
    { nombre: "Bastones de mozzarella", categoria: "entradas", precio: 12000, descripcion: "Con fritas y barbacoa" },
    { nombre: "Rabas con papas fritas", categoria: "entradas", precio: 0 },
    { nombre: "Cornalitos con papas fritas", categoria: "entradas", precio: 0 },
    { nombre: "Papas con jamón, queso y verdeo", categoria: "entradas", precio: 10000 },
    { nombre: "Papas con cheddar y panceta", categoria: "entradas", precio: 12000 },
    { nombre: "Papas Sin Culpa", categoria: "entradas", precio: 17000, descripcion: "Cheddar, ragout y verdeo" },
    { nombre: "Papas Echelon", categoria: "entradas", precio: 15000, descripcion: "Ternera, salchicha, vegetales y huevo" },
    { nombre: "Tacos de ternera x 4", categoria: "entradas", precio: 0 },

    // ENSALADAS
    { nombre: "Ensalada mixta", categoria: "ensaladas", precio: 6000, descripcion: "Lechuga, tomate, zanahoria y cebolla" },
    { nombre: "Caesar", categoria: "ensaladas", precio: 12000, descripcion: "Lechuga, croutons, pollo y parmesano" },
    { nombre: "Ensalada Echelon", categoria: "ensaladas", precio: 0, descripcion: "Mix verde, quínoa, choclo, tomate y palta" },

    // PIZZAS
    { nombre: "Mozzarella", categoria: "pizzas", precio: 12500, descripcion: "8 porciones" },
    { nombre: "Especial", categoria: "pizzas", precio: 14500 },
    { nombre: "Napolitana", categoria: "pizzas", precio: 14500 },
    { nombre: "Fugazzeta", categoria: "pizzas", precio: 15500 },
    { nombre: "Cuatro quesos", categoria: "pizzas", precio: 16500 },
    { nombre: "Rúcula y jamón crudo", categoria: "pizzas", precio: 17000 },
    { nombre: "Mexicana", categoria: "pizzas", precio: 16500 },
    { nombre: "Pizza Echelon", categoria: "pizzas", precio: 17500 },

    // NUESTROS PLATOS
    { nombre: "Bife de pollo", categoria: "platos", precio: 10000, descripcion: "Provenzal, criolla o chimichurri" },
    { nombre: "Bife de pollo a la pizza / Suiza", categoria: "platos", precio: 12000 },
    { nombre: "Bife de pollo al champiñón", categoria: "platos", precio: 15000 },
    { nombre: "Milanesa de ternera", categoria: "platos", precio: 13000 },
    { nombre: "Milanesa a la Napolitana", categoria: "platos", precio: 18000 },
    { nombre: "Milanesa Napolitana para dos", categoria: "platos", precio: 32000 },
    { nombre: "Milanesa americana", categoria: "platos", precio: 19000 },
    { nombre: "Milanesa Mediterránea", categoria: "platos", precio: 19000 },
    { nombre: "Milanesa a la Suiza", categoria: "platos", precio: 16000 },
    { nombre: "Costeleta de cerdo", categoria: "platos", precio: 12000 },
    { nombre: "Entraña", categoria: "platos", precio: 0 },
    { nombre: "Matambre a la pizza", categoria: "platos", precio: 17000 },
    { nombre: "Bife de lomo", categoria: "platos", precio: 0 },
    { nombre: "Lomo al champiñón / Suiza", categoria: "platos", precio: 0 },
    { nombre: "Costilla a la barbacoa", categoria: "platos", precio: 0 },
    { nombre: "Wok de ternera o vegetales", categoria: "platos", precio: 0 },

    // DESAYUNOS Y MERIENDAS
    { nombre: "Clásico", categoria: "desayunos", precio: 7000, descripcion: "2 medialunas" },
    { nombre: "Tradicional", categoria: "desayunos", precio: 7500, descripcion: "2 tostadas y untables" },
    { nombre: "Tostón", categoria: "desayunos", precio: 8300 },
    { nombre: "Avocado toast", categoria: "desayunos", precio: 10000 },
    { nombre: "Americano", categoria: "desayunos", precio: 13000 },
    { nombre: "De Campo", categoria: "desayunos", precio: 10000 },

    // BEBIDAS SIN ALCOHOL
    { nombre: "Agua con o sin gas 500 cc", categoria: "bebidas", precio: 3000 },
    { nombre: "Gaseosa / agua saborizada 500 cc", categoria: "bebidas", precio: 3800 },
    { nombre: "Gaseosa / agua saborizada 1,5 lt", categoria: "bebidas", precio: 8000 },
    { nombre: "Gaseosa / agua saborizada 1lt", categoria: "bebidas", precio: 6000 },

    // PANIFICADOS
    { nombre: "Medialuna unidad", categoria: "panificados", precio: 1200 },
    { nombre: "Medialuna con jamón y queso", categoria: "panificados", precio: 2400 },
    { nombre: "Budín artesanal", categoria: "panificados", precio: 1500 },
    { nombre: "Alfajor de la casa", categoria: "panificados", precio: 2800 },
    { nombre: "Alfajor de maicena", categoria: "panificados", precio: 2000 },
    { nombre: "Tostada unidad", categoria: "panificados", precio: 800 },
    { nombre: "Tostado de jamón y queso", categoria: "panificados", precio: 6000 },
    { nombre: "Tostado media plancha", categoria: "panificados", precio: 3500 },
    { nombre: "Tostón sin infusión", categoria: "panificados", precio: 6000 },
    { nombre: "Avocado sin infusión", categoria: "panificados", precio: 7000 },
    { nombre: "Bowl de yogur, frutas y granola", categoria: "panificados", precio: 0 },

    // ENTRE PANES
    { nombre: "Mechado", categoria: "panes", precio: 14000, descripcion: "Ternera, lechuga, tomate y queso" },
    { nombre: "Matambre", categoria: "panes", precio: 16000, descripcion: "Matambre, queso y chimichurri" },
    { nombre: "Lomito clásico", categoria: "panes", precio: 13500 },
    { nombre: "Lomito Echelon", categoria: "panes", precio: 15500 },
    { nombre: "Milanesa clásica", categoria: "panes", precio: 14500 },
    { nombre: "Milanesa Echelon", categoria: "panes", precio: 16500 },

    // BURGERS
    { nombre: "Burger clásica", categoria: "burgers", precio: 12500 },
    { nombre: "Burger americana", categoria: "burgers", precio: 14000 },
    { nombre: "Burger Echelon", categoria: "burgers", precio: 16000 },
    { nombre: "Burger vegetariana", categoria: "burgers", precio: 12300 },
    { nombre: "Medallón adicional", categoria: "burgers", precio: 4000 },

    // CERVEZAS
    { nombre: "Pinta", categoria: "cervezas", precio: 4500 },
    { nombre: "Norte litro", categoria: "cervezas", precio: 0 },
    { nombre: "Salta litro", categoria: "cervezas", precio: 0 },
    { nombre: "Quilmes litro", categoria: "cervezas", precio: 8000 },
    { nombre: "Imperial litro", categoria: "cervezas", precio: 0 },
    { nombre: "Stella litro", categoria: "cervezas", precio: 9500 },
    { nombre: "Patagonia 710 cc", categoria: "cervezas", precio: 0 },
    { nombre: "Corona 710 cc", categoria: "cervezas", precio: 0 },
    { nombre: "Lata Salta", categoria: "cervezas", precio: 0 },
    { nombre: "Lata Quilmes", categoria: "cervezas", precio: 0 },
    { nombre: "Lata Heineken", categoria: "cervezas", precio: 0 },

    // TRAGOS
    { nombre: "Blue Malibu", categoria: "tragos", precio: 9000 },
    { nombre: "The Kill", categoria: "tragos", precio: 8500 },
    { nombre: "Espresso Martini", categoria: "tragos", precio: 8500 },
    { nombre: "Tequila Sunrise", categoria: "tragos", precio: 8000 },
    { nombre: "Paradise", categoria: "tragos", precio: 8000 },
    { nombre: "Shot de tequila", categoria: "tragos", precio: 3500 },
    { nombre: "Daiquiri de frutilla", categoria: "tragos", precio: 8500 },
    { nombre: "Daiquiri de durazno", categoria: "tragos", precio: 8500 },
    { nombre: "Daiquiri de limón y jengibre", categoria: "tragos", precio: 8000 },
    { nombre: "Mojito clásico", categoria: "tragos", precio: 7500 },
    { nombre: "Mojito de maracuyá", categoria: "tragos", precio: 0 },
    { nombre: "Mojito de frutos rojos", categoria: "tragos", precio: 0 },
    { nombre: "Caipiroska clásico", categoria: "tragos", precio: 0 },
    { nombre: "Caipiroska de maracuyá", categoria: "tragos", precio: 0 },
    { nombre: "Caipiroska de frutos rojos", categoria: "tragos", precio: 0 },
    { nombre: "Campari orange", categoria: "tragos", precio: 0 },
    { nombre: "Campari tonic", categoria: "tragos", precio: 0 },
    { nombre: "Gin tonic clásico", categoria: "tragos", precio: 0 },
    { nombre: "Gin tonic de maracuyá", categoria: "tragos", precio: 0 },
    { nombre: "Gin paff", categoria: "tragos", precio: 0 },
    { nombre: "Gin tonic de frutos rojos", categoria: "tragos", precio: 0 },
    { nombre: "Gancia con Sprite", categoria: "tragos", precio: 0 },
    { nombre: "Gancia batido", categoria: "tragos", precio: 0 },
    { nombre: "Cuba libre", categoria: "tragos", precio: 0 },
    { nombre: "Fernet con Coca", categoria: "tragos", precio: 0 },
    { nombre: "Baileys cream", categoria: "tragos", precio: 0 },

    // VINOS Y OTROS
    { nombre: "Vino por copa", categoria: "vinos", precio: 0 },
    { nombre: "Santa Julia 750 ml", categoria: "vinos", precio: 0 },
    { nombre: "Chacabuco 750 ml", categoria: "vinos", precio: 0 },
    { nombre: "Dilema 750 ml", categoria: "vinos", precio: 0 },
    { nombre: "Conejo Verde 750 ml", categoria: "vinos", precio: 0 },
    { nombre: "Quara 750 ml", categoria: "vinos", precio: 0 },
    { nombre: "New Age", categoria: "vinos", precio: 0 },
    { nombre: "Dr. Lemon", categoria: "vinos", precio: 0 },

    // POSTRES
    { nombre: "Flan", categoria: "postres", precio: 0 },
    { nombre: "Budín de pan", categoria: "postres", precio: 0 },
    { nombre: "Natilla de naranja", categoria: "postres", precio: 0 },
    { nombre: "Helado bombón", categoria: "postres", precio: 0 },
    { nombre: "Copa helada", categoria: "postres", precio: 0 }
];

// MOSTRAR LOS PRODUCTOS
const contenedor = document.getElementById("productos");
const botones = document.querySelectorAll(".filtro");

function mostrarProductos(categoria = "todos") {
    const lista = categoria === "todos"
        ? productos
        : productos.filter(producto =>
            producto.categoria === categoria
        );

    contenedor.innerHTML = "";

    lista.forEach(producto => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "producto";

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;
        tarjeta.appendChild(titulo);

        if (producto.descripcion) {
            const descripcion = document.createElement("p");
            descripcion.textContent = producto.descripcion;
            tarjeta.appendChild(descripcion);
        }

        const precio = document.createElement("span");
        precio.className = "precio";

        if (producto.precio > 0) {
            precio.textContent = "$ " +
                producto.precio.toLocaleString("es-AR");
        } else {
            precio.textContent = "Consultar";
        }

        tarjeta.appendChild(precio);
        contenedor.appendChild(tarjeta);
    });
}

// FILTRAR POR CATEGORIA
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        botones.forEach(item => item.classList.remove("activo"));
        boton.classList.add("activo");
        mostrarProductos(boton.dataset.categoria);
    });
});

// MOSTRAR TODA LA CARTA AL ABRIR
mostrarProductos();
