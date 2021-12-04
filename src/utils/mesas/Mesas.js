import React, {useState, Fragment} from "react";
import {NumerosMesas} from "./NumerosMesas";
import data from "../mesas/mockyTest/mesas.json";
export function Mesas({listaMesa, setListaMesa}) {
  const [dados, setDados] = useState(data);
  
  return (
    <div className="mesa-container-box">
      <div className="mesa-content">
        {dados.map((numeros) => (
          <Fragment key={numeros.id}>
            <NumerosMesas numeros={numeros} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
