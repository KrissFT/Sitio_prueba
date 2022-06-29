import { Socie } from "./models/socie.model";
// 1. Select the div element using the id property
const app = document.getElementById("app");
const table = document.getElementById("socies-table");
let socies: Array<Socie>=[];
let socie: Socie;


/**
 * 
 * Funcion principal autoload
 */
 fetch("http://localhost:5000/socies")
 .then(resp => {
     resp.json()
     .then (data => {
         socies = data.socies;
         completarGrilla(socies);
     })
 });



function completarGrilla(socies: Array<Socie>): void {
    socies.forEach((socie:Socie) => {
        let tr = document.createElement("tr");

        let link = document.createElement("a");
        link.href = "http://localhost:5000/socie/"+ socie.nick;
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
        td_button.className = "button-show";
        td_button.onclick = function() {
            showSocie(socie);
        };
    
        tr?.appendChild(td_nombre);
        tr?.appendChild(td_apellido);
        tr?.appendChild(td_nick);
        tr?.appendChild(td_edad);
        tr?.appendChild(td_button);
        table?.appendChild(tr);
     });
}



    function showSocie (socie:Socie){
        fetch("http://localhost:5000/socie/"+socie.nick)
        .then(resp => {
            resp.json()
            .then (data => {
                let form = document.createElement("form");

                let row0 = document.createElement("row");
                row0.className = "row"
                let row1 = document.createElement("row");
                row1.className = "row"
                let row2 = document.createElement("row");
                row2.className = "row"
                let row3 = document.createElement("row");
                row3.className = "row"

                let col0 = document.createElement("div");
                col0.className = "col-4"
                let col1 = document.createElement("div");
                col1.className = "col-4"
                let col2 = document.createElement("div");
                col2.className = "col-4"
                let col3 = document.createElement("div");
                col3.className = "col-4"
                //label nombre
                let label_nombre = document.createElement("label");
                label_nombre.textContent = "Nombre: "
                // input nombre
                let input_nombre = document.createElement("input");
                input_nombre.type = "text";
                input_nombre.value = socie.nombre;
                input_nombre.className = "input-edit-socie";
                input_nombre.name = "nombre";
                //label apellido
                let label_apellido = document.createElement("label");
                label_apellido.textContent = "Apellido: "
                // input apellido
                let input_apellido = document.createElement("input");
                input_apellido.value = socie.apellido;
                input_apellido.className = "input-edit-socie";
                input_apellido.name = "apellido"
                //label nick
                let label_nick = document.createElement("label");
                label_nick.textContent = "Nickname: "
                // input nick
                let input_nick = document.createElement("input");
                input_nick.value = socie.nick;
                input_nick.className = "input-edit-socie";
                input_nick.name = "nick";
                //label edad
                let label_edad = document.createElement("label");
                label_edad.textContent = "Edad: "
                //input edad
                let input_edad = document.createElement("input");
                input_edad.value = socie.edad.toString(10);
                input_edad.className = "input-edit-socie";
                input_edad.name = "edad";
                //botón
                let button = document.createElement("button");
                button.type = "submit";
                button.className = "btn btn-info";
                button.textContent = "Actualizar";
                button.formAction = "http://localhost:5000/edit-socie/"+socie.nick;
                button.formMethod = "post";
                button.onclick = function() {
                    completarGrilla(socies)
                }

                col0.appendChild(label_nombre);
                col0.appendChild(input_nombre);
                col1.appendChild(label_apellido);
                col1.appendChild(input_apellido);
                col2.appendChild(label_nick);
                col2.appendChild(input_nick);
                col3.appendChild(label_edad);
                col3.appendChild(input_edad);
                row0.appendChild(col0);
                row1.appendChild(col1);
                row2.appendChild(col2);
                row3.appendChild(col3);

                form.appendChild(row0);
                form.appendChild(row1);
                form.appendChild(row2);
                form.appendChild(row3);
                form.appendChild(button);

                app?.replaceChildren(form);
            })
        });
    }