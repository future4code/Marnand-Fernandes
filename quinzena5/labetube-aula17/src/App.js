import React from 'react';
import lupa from './lupa.svg';
import labenu from './labenu.png';
import './App.css';

function App() {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>
            <span className="logo">
              <img src={labenu} />
            </span>
            Lab Tube
          </h1>
          <form>
            <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
            <span>
              <img src={lupa} />
            </span>
          </form>
        </header>

        <main>
          <nav className="menu-vertical">
            <div className="botoes-meunu-vertical">Início</div>
            <div className="botoes-meunu-vertical">Em alta</div>
            <div className="botoes-meunu-vertical">Inscrições</div>
            <hr />
            <div className="botoes-meunu-vertical">Originais</div>
            <div className="botoes-meunu-vertical">Histórico</div>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="" />
              <h4>{titulo}</h4>
            </div>
          </section>
        </main>

      </div>
    </div>
  );
}

export default App;
