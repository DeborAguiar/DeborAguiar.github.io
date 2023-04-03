
function Card(props) {
  return (
    <div className={`carousel-item ${props.idx == 1 ? "active" : ""}`}>
      {chosePage(props.item)}
    </div>
  );
}

function chosePage(type) {
  switch (type) {
    case "Sobre":
      return (
        <div style={{ color: `white` }} className="row justify-content-center">
          <div className="col-md-3 d-flex align-items-center">
            <div style={{ height: "min-content" }}>
              <span style={{ color: `#EF8354` }}>
                Desenvolvimento Front-end
              </span>
              <br />
              <span className="fs-2 mb-3">Débora de Aguiar Boni</span>
              <br />
              <br />
              <a href="https://drive.google.com/file/d/102kXJ2zH5rmmwBbccOGbbwTREpc0D4te/view?usp=sharing">
                <button
                  style={{ height: "10vh" }}
                  className="btn btn-outline-light btn-lg"
                >
                  Baixar currículo
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div style={{ height: "min-content" }}>
              <span>
                Trabalho com desenvolvimento Frontend desde 2021, sou uma
                desenvolvedora apaixonada por tecnologia com habilidades em
                tecnologias como React, Angular, JavaScript, TypeScript,
                Bootstrap e Python. Sou experiente em criar interfaces de
                usuário atraentes e responsivas e desenvolver aplicações
                Frontend escaláveis e robustas. Tenho um histórico comprovado de
                trabalho em equipe e colaboração com designers, desenvolvedores
                e gerentes de projeto para fornecer soluções criativas e de alta
                qualidade aos clientes. Estou sempre buscando novos desafios e
                oportunidades para crescer como profissional e desenvolver
                minhas habilidades em tecnologia.
              </span>
            </div>
          </div>
        </div>
      );
    case "Skills":
      return (
        <div
          className="row rounded mx-auto d-block w-50"
          style={{ backgroundColor: "#BFC0C0" }}
        >
          <div className="col">
          </div>
        </div>
      );
    case "Experiências Anteriores":
    case "Formação":
    case "Contato":
  }
}

export default Card;
