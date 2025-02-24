window.onload = function () {
    datosPaisos();
}

async function datosPaisos() {
    let resposta = await fetch("https://countriesnow.space/api/v0.1/countries/capital");
    let dades = await resposta.json();
    let taula = document.getElementById("taula-paisos");

    dades.data.forEach(element => {
        let fila = document.createElement("tr");
        let celdaPaís = document.createElement("td");
        let celdaCapital = document.createElement("td");

        celdaPaís.textContent = element.name;
        celdaCapital.textContent = element.capital;

        fila.appendChild(celdaPaís);
        fila.appendChild(celdaCapital);
        taula.appendChild(fila);
    });
}
