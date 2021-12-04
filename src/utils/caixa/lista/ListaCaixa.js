import React from "react";

export function ListaCaixa({cardapio}) {

  return (
    <div>
      <div>
        <div className="lista-content"><div>{cardapio.name} R${cardapio.valor}</div> + 1  -</div>
      </div>
    </div>
  );
}
