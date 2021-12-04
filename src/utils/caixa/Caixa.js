import React, {useState} from "react";
import {ListaCaixa} from "./lista/ListaCaixa";

export function Caixa({cardapio}) {
  const [abrirCaixa, setAbrirCaixa] = useState(false);
  const [fecharPedido, setFecharPedido] = useState(null);
  return (
    <div className="caixa-container-box">
      <div className="caixa-container-button">
        {abrirCaixa === true ? (
          <button
            onClick={() => setAbrirCaixa(!abrirCaixa)}
            className="caixa-button"
            onChange={(e) => setFecharPedido(e.target.value)}
          >
            Fechar Caixa
          </button>
        ) : (
          <button
            onClick={() => setAbrirCaixa(!abrirCaixa)}
            className="caixa-button"
          >
            Abrir Caixa
          </button>
        )}

        {abrirCaixa === true ? <ListaCaixa cardapio={cardapio}/> : null}
      </div>
    </div>
  );
}
