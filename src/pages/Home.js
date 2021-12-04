import React, {useEffect, useState} from "react";
import {Caixa} from "../utils/caixa/Caixa";
import {Cardapio} from "../utils/cardapio/Cardapio";
import {HistoricoModal} from "../utils/historicoModal/HistoricoModal";
import {Mesas} from "../utils/mesas/Mesas";
import Api from "../api/Api"
export function Home() {
  const [modalVisivel, setModalVisivel] = useState(false);
  // uma const de usestate serve para armanezar dados no caso esse é o da lista cardapio, como ela
  //é uma ARRAY dentro do usestate está um [] para indicar q ela irá receber um array
  //sempre q tiver o set significa q é onde vc pode alterar o dado e o nome sem o set é o dado em si q vc irá utilizar :)
  const [listaCardapio, setListaCardapio] = useState([]);
  const [listaMesa, setListaMesa] = useState([]);
  const [cardapioCaixa, setCardapioCaixa] = useState({})
  const [cardapio, setCardapio] = useState([]);
  console.log(cardapioCaixa)
  // lista cardapio
  useEffect(() => {
    Api.get("/categories").then((responseListaCardapio) => {
      const dataListaCardapio = responseListaCardapio.data;
      setListaCardapio(dataListaCardapio);
    });
  }, []);
  //só o cardapio selecionado
  useEffect(() => {
    Api.get(`/categories/${cardapioCaixa}`).then((responseCardapio) => {
      const dataCardapio = responseCardapio.data;
      setCardapio(dataCardapio);
    });
  }, [cardapioCaixa]);
  
  /* lista de mesas
   useEffect(() => {
    Api.get("/").then((responseListaMesa) => {
      const dataListaMesa = responseListaMesa.data;
      setListaMesa(dataListaMesa);
    });
  }, []);
  */
  return (
    <div className="home-container">
      <h1 className="home-container-title">Café de Bonheur</h1>
      <div className="home-content">
        <div className="home-detalhes">
          <h1 className="home-content-title">Caixa</h1>
          <button
            className="home-modal-button"
            type="button"
            onClick={() => setModalVisivel(!modalVisivel)}
          >
            Histórico
          </button>
          {modalVisivel ? (
            <HistoricoModal
              modalVisivel={modalVisivel}
              setModalVisivel={setModalVisivel}
            />
          ) : null}
        </div>
        <div className="home-box-modulos">
          <div className="caixa-container">
            <Caixa 
            listaMesa={listaMesa} 
            setListaMesa={setListaCardapio}
             listaCardapio={listaCardapio}
            setListaCardapio={setListaCardapio}
            cardapio={cardapio}/>
          
          </div>
          <div className="mesa-container">
            <Mesas
            listaMesa={listaMesa} 
            setListaMesa={listaCardapio}/>
          </div>
        </div>
        <div className="cardapio-container">
          <Cardapio
            listaCardapio={listaCardapio}
            setListaCardapio={setListaCardapio}
            setCardapioCaixa={setCardapioCaixa}
          />
        </div>
      </div>
    </div>
  );
}
