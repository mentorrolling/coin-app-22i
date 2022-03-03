import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const promesa = () => {
//   return new Promise((resolve, reject) => {
//     let validar = false;

//     setTimeout(() => {
//       if (validar) {
//         resolve("La promesa fue Exitosa :)");
//       } else {
//         reject("La promesa falló :(");
//       }
//     }, 3000);
//   });
// };

// promesa()
//   .then((respuesta) => console.log(respuesta))
//   .catch((error) => console.warn(error));

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));

//async await
// const peticionHttp = async () => {
// try {

//   const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const resultado = await resp.json();
//   return resultado;

// } catch (error) {
//   return error
// }

// };
// peticionHttp().then((respuesta) => {
//   let datosRecibidos = respuesta;
//   console.log(datosRecibidos);
// })
// .catch(error=>console.log(error))
