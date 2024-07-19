// Porfavor le la documentación del repositorio que esta en el video
// para entender el funcionamiento de este archivo.

const API_URL_CLIENTES = "http://localhost:8080/api/v1/cliente";
const API_URL_CARROS = "http://localhost:8080/api/v1/carro";

// Función para cargar opciones de carros en el formulario de clientes
function cargarOpcionesCarros() {
  fetch(API_URL_CARROS)
    .then((response) => response.json())
    .then((data) => {
      const selectCarro = document.getElementById("clienteCarro");
      selectCarro.innerHTML = "";
      data.forEach((carro) => {
        const option = document.createElement("option");
        option.value = carro.idCarro;
        option.textContent = `${carro.nombre} - ${carro.modelo}`;
        selectCarro.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error al obtener la lista de carros:", error);
    });
}

// Función para obtener la lista de clientes desde la API
function obtenerClientes() {
  fetch(API_URL_CLIENTES)
    .then((response) => response.json())
    .then((data) => {
      const listaClientes = document.getElementById("listaClientes");
      listaClientes.innerHTML = "";
      data.forEach((cliente) => {
        const cardCliente = `
                    <div class="card mb-2">
                        <div class="card-header">${cliente.nombre}</div>
                        <div class="card-body">
                            <p>Nacionalidad: ${cliente.nacionalidad}</p>
                            <p>Teléfono: ${cliente.telefono}</p>
                            <p>Carro Comprado: ${
                              cliente.carro
                                ? cliente.carro.nombre
                                : "Sin asignar"
                            }</p>
                        </div>
                    </div>
                `;
        listaClientes.innerHTML += cardCliente;
      });
    })
    .catch((error) => {
      console.error("Error al obtener la lista de clientes:", error);
    });
}

// Función para obtener la lista de carros disponibles desde la API
function obtenerCarros() {
  fetch(API_URL_CARROS)
    .then((response) => response.json())
    .then((data) => {
      carrosDisponibles = data; // Almacenar los carros disponibles
      const listaCarros = document.getElementById("listaCarros");
      listaCarros.innerHTML = "";
      data.forEach((carro) => {
        const cardCarro = `
                    <div class="card mb-2" id="carro-${carro.idCarro}">
                        <div class="card-header">${carro.nombre}</div>
                        <div class="card-body">
                            <p>Modelo: ${carro.modelo}</p>
                            <p>Valor: ${carro.valor}</p>
                        </div>
                    </div>
                `;
        listaCarros.innerHTML += cardCarro;
      });
      cargarOpcionesCarros(); // Actualizar opciones de carros en el formulario de clientes
    })
    .catch((error) => {
      console.error("Error al obtener la lista de carros:", error);
    });
}

// Función para crear un nuevo cliente
function crearCliente(event) {
  event.preventDefault();
  const clienteData = {
    nombre: document.getElementById("clienteNombre").value,
    nacionalidad: document.getElementById("clienteNacionalidad").value,
    telefono: document.getElementById("clienteTelefono").value,
    carro: {
      idCarro: document.getElementById("clienteCarro").value,
    },
  };

  fetch(API_URL_CLIENTES, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(clienteData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Cliente creado:", data);
      document.getElementById("formCliente").reset();
      obtenerClientes();
    })
    .catch((error) => {
      console.error("Error al crear el cliente:", error);
    });
}

// Función para crear un nuevo carro
function crearCarro(event) {
  event.preventDefault();
  const carroData = {
    nombre: document.getElementById("carroNombre").value,
    modelo: document.getElementById("carroModelo").value,
    valor: document.getElementById("carroValor").value,
  };

  fetch(API_URL_CARROS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carroData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Carro creado:", data);
      document.getElementById("formCarro").reset();
      obtenerCarros(); // Actualizar la lista de carros disponibles
    })
    .catch((error) => {
      console.error("Error al crear el carro:", error);
    });
}

// Cargar opciones de carros al cargar la página
cargarOpcionesCarros();

// Obtener la lista inicial de clientes y carros al cargar la página
obtenerClientes();
obtenerCarros();

// Asignar manejadores de eventos a los formularios
document.getElementById("formCliente").addEventListener("submit", crearCliente);
document.getElementById("formCarro").addEventListener("submit", crearCarro);