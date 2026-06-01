import { db } from "./firebase-config.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const formulario = document.getElementById("formCasillero");

formulario.addEventListener("submit", async (e) => {

    e.preventDefault();

    const casillero = document.getElementById("casillero").value;
    const nombre = document.getElementById("nombre").value;
    const documento = document.getElementById("documento").value;

    try {

        await addDoc(collection(db, "prestamos"), {
            casillero: casillero,
            nombre: nombre,
            documento: documento,
            fecha: new Date().toISOString()
        });

        alert("Préstamo registrado correctamente");

        formulario.reset();

    } catch (error) {

        console.error(error);
        alert("Error al guardar el registro");

    }

});
