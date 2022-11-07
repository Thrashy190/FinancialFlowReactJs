import React, { useState } from "react";
import "./App.css";
import FormMovement from "./componentes/movement/formMovement";
import Accion from "./componentes/movement/movementList";
import Saving from "./componentes/saving";
import Debt from "./componentes/debt/debt";

function App() {
  //Movimientos - primer bloque
  const [bloquesMovement, setBloquesMovement] = useState([]);

  function addbloque(blockMovement) {
    setBloquesMovement([blockMovement, ...bloquesMovement]);
  }

  const onDeleteBloque = (bloque) => {
    const copia = [...bloquesMovement];
    let indiceABorrar = copia.findIndex((block) => bloque.name === block.name);
    copia.splice(indiceABorrar, 1);
    setBloquesMovement(copia);
  };

  return (
    <div className="App">
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>Mi flujo financiero</title>
          <link rel="stylesheet" href="style.css" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body>
          <nav>
            <div className="nav-content container">
              <h1>Mi flujo financiero 💸</h1>
              <div className="right-nav-items">
                <span>Usuario: Diego antonio</span>
                <a href="/ayuda">Ayuda</a>
                <a href="#">Salir</a>
              </div>
            </div>
          </nav>
          <main className="container">
            <h2>Tu flujo de efectivo es: $11,280</h2>
            <p>
              Esta es la cantidad que debes tener libre en tu carteta cada mes.
            </p>
            <FormMovement addbloque={addbloque} />
            <div className="panels">
              {/*MOVIMIENTOS*/};
              <section>
                <Accion
                  bloques={bloquesMovement.filter(
                    (bloque) => bloque.option === "ingresos"
                  )}
                  titulo="Ingresos"
                  onDeleteBloque={onDeleteBloque}
                />
                <Accion
                  bloques={bloquesMovement.filter(
                    (bloque) => bloque.option === "gastos"
                  )}
                  titulo="Gastos"
                  onDeleteBloque={onDeleteBloque}
                />
              </section>
              {/*DEUDAS*/};
              <section>
                <h2>Deudas</h2>
                <div className="column-controls">
                  <input type="text" placeholder="Persona" />
                  <input type="number" placeholder="Cantidad debida" />
                  <input type="date" />
                  <button className="secondary-btn">Listo</button>
                </div>
                <h3>A favor</h3>
                <ol>
                  <Debt
                    debt="1230"
                    person="Carlos Fernandez"
                    date="05/10/2020"
                  />
                  <Debt debt="22000" person="Primo alex " date="05/10/2020" />
                </ol>
                <h3>Por pagar</h3>
                <ol>
                  <Debt debt="500" person="Mamá" date="05/10/2020" />
                </ol>
              </section>
              <section>
                <h2>Alcancías</h2>
                <div className="column-controls">
                  <input type="text" placeholder="Nombre" />
                  <input type="number" placeholder="Meta (opcional)" />
                  <button className="secondary-btn">Listo</button>
                </div>
                <ul>
                  <Saving
                    totalSaved="0"
                    target="17230"
                    name="Fondo para emergencias"
                  />
                  <Saving
                    totalSaved="8230"
                    target="22400"
                    name="MacBook Pro 2018"
                  />
                  <Saving totalSaved="1000" target="15000" name="PC nueva" />
                </ul>
              </section>
            </div>
          </main>
        </body>
      </html>
    </div>
  );
}

export default App;
