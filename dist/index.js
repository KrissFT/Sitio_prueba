"use strict";
// 1. Select the div element using the id property
const app = document.getElementById("app");
// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");
// 3. Add the text content
p.textContent = "Hola contenido dinámico!";
// 4. Append the p element to the div element
app === null || app === void 0 ? void 0 : app.appendChild(p);
