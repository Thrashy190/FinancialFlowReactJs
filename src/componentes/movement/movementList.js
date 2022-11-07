import React from "react";
import Bloque from "./bloque";

function Accion({ bloques, titulo, onDeleteBloque }) {
  let suma = 0;
  for (let index = 0; index < bloques.length; index++) {
    const bloque = bloques[index];
    suma += bloque.amount;
  }

  return (
    <div className="movement-group">
      <h2>{titulo}</h2>
      <p>
        Total de {titulo}: ${suma}
      </p>
      <ul>
        {bloques.map((bloque) => (
          <Bloque bloque={bloque} onDelete={onDeleteBloque} />
        ))}
      </ul>
    </div>
  );
}

export default Accion;
