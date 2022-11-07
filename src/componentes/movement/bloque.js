import React from "react";

function Bloque(parametros) {
  return (
    <li
      className={
        "movement " +
        (parametros.bloque.option === "ingresos" ? "income" : "expense")
      }
    >
      <span>
        {parametros.bloque.name} - ${parametros.bloque.amount}
      </span>
      <span
        className="delete-btn"
        onClick={() => parametros.onDelete(parametros.bloque)}
      >
        x
      </span>
    </li>
  );
}

export default Bloque;
