"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Select the div element using the id property
const app = document.getElementById("app");
const table = document.getElementById("socies-table");
let socies = [];
let socie;
fetch("http://localhost:5000/socies")
    .then(resp => {
    resp.json()
        .then(data => {
        socies = data.socies;
        socies.forEach((socie) => {
            let tr = document.createElement("tr");
            let link = document.createElement("a");
            link.href = "http://localhost:5000/socie/" + socie.nick;
            link.innerText = socie.nombre;
            let td_nombre = document.createElement("td");
            //td_nombre.textContent = socie.nombre;
            td_nombre.appendChild(link);
            let td_apellido = document.createElement("td");
            td_apellido.textContent = socie.apellido;
            let td_nick = document.createElement("td");
            td_nick.textContent = socie.nick;
            let td_edad = document.createElement("td");
            td_edad.textContent = socie.edad.toString(10);
            let td_button = document.createElement("button");
            td_button.textContent = "Mostrar";
            td_button.onclick = function () {
                showSocie(socie);
            };
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_nombre);
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_apellido);
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_nick);
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_edad);
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_button);
            table === null || table === void 0 ? void 0 : table.appendChild(tr);
        });
    });
});
function showSocie(socie) {
    fetch("http://localhost:5000/socie/" + socie.nick)
        .then(resp => {
        resp.json()
            .then(data => {
            let p0 = document.createElement("p");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");
            p0.textContent = "Nombre: " + data.socie.nombre;
            p1.textContent = "Apellido: " + data.socie.apellido;
            p2.textContent = "Nick: " + data.socie.nick;
            p3.textContent = "Edad: " + data.socie.edad;
            app === null || app === void 0 ? void 0 : app.appendChild(p0);
            app === null || app === void 0 ? void 0 : app.appendChild(p1);
            app === null || app === void 0 ? void 0 : app.appendChild(p2);
            app === null || app === void 0 ? void 0 : app.appendChild(p3);
        });
    });
}
