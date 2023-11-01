const URL = `https://6542320cf0b8287df1ffaa7a.mockapi.io/users/`;
const btnBuscarID = document.getElementById("btnGet1");
const divResultados = document.getElementById("results");
const btnAgregar = document.getElementById("btnPost");
const btnModificar = document.getElementById("btnPut");
const btnEliminar = document.getElementById("btnDelete");
let fetchedData = [];

fetch(URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `La solicitud falló con el código de estado ${response.status}`
      );
    }
    return response.json();
  })
  .then((data) => {
    // Almacena los datos recuperados en la variable fetchedData
    fetchedData = data;
  })
  .catch((error) => console.error(error));

// Boton buscar id
btnBuscarID.addEventListener("click", () => {
  let inputBuscarID = document.getElementById("inputGet1Id").value;
  if (inputBuscarID != "" && inputBuscarID > 0) {
    const user = fetchedData.find((element) => element.id === inputBuscarID);

    if (user) {
      divResultados.innerHTML = `
      Nombre: ${user.name}<br>
      Lastname: ${user.lastname}<br>
      ID: ${user.id}<br>
      `;
    } else {
      divResultados.innerHTML =
        "No se encontró un usuario con la ID proporcionada.";
    }
  } else {
    fetchedData.forEach((element) => {
      divResultados.innerHTML += `
      Nombre: ${element.name}<br>
      Lastname: ${element.lastname}<br>
      ID: ${element.id}<br>
      <hr>
        `;
    });
  }
});

//Funcion Agregar
btnAgregar.addEventListener("click", () => {
  let inputNombre = document.getElementById("inputPostNombre").value;
  let inputApellido = document.getElementById("inputPostApellido").value;
  let newID = fetchedData.length + 1;

  fetchedData.push({
    name: inputNombre,
    lastname: inputApellido,
    id: newID,
  });
  console.log("adentro");
});

//Funcion Modificar
btnModificar.addEventListener("click", () => {
  let inputModificar = document.getElementById("inputPutId").value;
  let newNombre = document.getElementById("inputPutNombre").value;
  let newAppellido = docuemnt.getElementById("inputPutApellido").value;
});

//Funcion Eliminar
btnEliminar.addEventListener("click", () => {});