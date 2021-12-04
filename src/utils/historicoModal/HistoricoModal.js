import React from "react";
import {HistoricoModalConteudo} from "./HistoricoModalConteudo";
import {IoMdClose} from "react-icons/io";
export function HistoricoModal({modalVisivel, setModalVisivel}) {
  return (
    <div className="modal">
      <div className="modal-container">
        <p className="p-fechar-modal">
          <button
            className="fechar-modal"
            onClick={() => setModalVisivel(!modalVisivel)}
          >
            <IoMdClose size="2em" />
          </button>
        </p>
        <div className="modal-content">
          <HistoricoModalConteudo />
        </div>
      </div>
    </div>
  );
}
