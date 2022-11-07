import React from "react";

function Saving(parametros){
    return(
      <li className="saving">
        <div>
          <h4>{parametros.name}</h4>
          <small>
            Total: <b>${parametros.totalSaved} / ${parametros.target} </b>
          </small>
        </div>
        <div className="bottom-saving-items">
          <input className="saving-input" type="number" placeholder="Entrada o salida" />
          <button className="secondary-btn">OK</button>
        </div>
      </li>
    );
  }

  export default Saving;