"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Select the div element using the id property
const app = document.getElementById("app");
const table = document.getElementById("socies-table");
let socies = [
    {
        nombre: 'Lukas',
        apellido: 'Santillán',
        nick: 'N/A',
        edad: 20
    },
    {
        nombre: 'Lukas',
        apellido: 'Santillán',
        nick: 'N/A',
        edad: 20
    },
    {
        nombre: 'Lukas',
        apellido: 'Santillán',
        nick: 'N/A',
        edad: 20
    },
    {
        nombre: 'Lukas',
        apellido: 'Santillán',
        nick: 'N/A',
        edad: 20
    },
];
fetch("http://localhost:5000/socies")
    .then(resp => {
    resp.json()
        .then(data => {
        socies = data.socies;
    });
});
socies.forEach(socie => {
    let tr = document.createElement("tr");
    let td_nombre = document.createElement("td");
    td_nombre.textContent = socie.nombre;
    let td_apellido = document.createElement("td");
    td_apellido.textContent = socie.apellido;
    let td_nick = document.createElement("td");
    td_nick.textContent = socie.nick;
    let td_edad = document.createElement("td");
    td_edad.textContent = socie.edad.toString(10);
    tr === null || tr === void 0 ? void 0 : tr.appendChild(td_nombre);
    tr === null || tr === void 0 ? void 0 : tr.appendChild(td_apellido);
    tr === null || tr === void 0 ? void 0 : tr.appendChild(td_nick);
    tr === null || tr === void 0 ? void 0 : tr.appendChild(td_edad);
    table === null || table === void 0 ? void 0 : table.appendChild(tr);
});
