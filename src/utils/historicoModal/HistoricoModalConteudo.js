import React from "react";

export function HistoricoModalConteudo() {
  return (
    <>
      <h3 className="modal-titulo">
        Histórico {new Date().toLocaleDateString()}
      </h3>
      <div className="modal-form-conteudo">
        <p className="p-modal">Valor Total Vendas: ex R$50</p>
      </div>
      <div className="modal-form-conteudo">
        <p className="p-modal">Numero de Pedidos: 4</p>
      </div>

      <h3 className="modal-pedidos-titulo">Pedidos:</h3>
      <div className="modal-form-conteudo">
        <p className="p-modal">Mesa 01</p>
      </div>
      <div className="modal-form-conteudo">
        <p className="p-modal">Valor do Checkout: ex R$50.00</p>
      </div>
    </>
  );
}
