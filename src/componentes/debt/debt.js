import React from "react";

function Debt(parametros){
    return(
      <li className="debt">
        <div>
          <div>{parametros.person} - ${parametros.debt}</div>
          <small>{parametros.date}</small>
        </div>
        <button className="secondary-btn">Saldar</button>
      </li>
    );
  }

  export default Debt;