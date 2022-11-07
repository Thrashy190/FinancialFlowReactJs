import React, { useState } from "react";

function FormMovement(propiedades) {
  const [move, setmove] = useState({
    concepto: "",
    cantidad: "",
    opciones: "ingresos",
  });

  function handleInputChange(event) {
    setmove({
      ...move,
      [event.target.name]: event.target.value,
    });
  }

  function MostrarConsola(event) {
    event.preventDefault();
    console.log(
      "nombre: " +
        move.concepto +
        " cantidad: " +
        move.cantidad +
        " tipo: " +
        move.opciones
    );
    propiedades.addbloque({
      name: move.concepto,
      amount: Number(move.cantidad),
      option: move.opciones,
    });
  }

  return (
    <form className="main-controls" onSubmit={MostrarConsola}>
      <input
        type="text"
        placeholder="Concepto"
        name="concepto"
        value={move.concepto}
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Cantidad"
        name="cantidad"
        value={move.cantidad}
        onChange={handleInputChange}
      />
      <select
        name="opciones"
        value={move.opciones}
        onChange={handleInputChange}
      >
        <option value="ingresos">Ingresos</option>
        <option value="gastos">Gastos</option>
      </select>
      <button type="submit">registrar</button>
    </form>
  );
}

export default FormMovement;
