import pages from "../../../../Pages";
import skills from "./Skills";

function Card(props) {
  return (
    <div className={`carousel-item ${props.idx === 1 ? "active" : ""}`}>
      {chosePage(props.item)}
    </div>
  );
}

function chosePage(type) {
  //pages
  switch (type) {
    case "Sobre":
      return (
        <div className="row justify-content-center text-white">
          <div className="col-md-3 d-flex align-items-center">
            <div className="h-auto d-inline-block">
              <span className="orange_text">
                Desenvolvimento Front-end
              </span>
              <br />
              <span className="fs-2 mb-3">Débora de Aguiar Boni</span>
              <br />
              <br />
              <a href="https://drive.google.com/file/d/102kXJ2zH5rmmwBbccOGbbwTREpc0D4te/view?usp=sharing">
                <button
                  className="btn btn-outline-light btn-lg"
                >
                  Baixar currículo
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="h-auto d-inline-block">
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
      skills.sort((a, b) => b.level - a.level);
      return (
        <div id="skill_container" className="rounded mx-auto d-block w-50 p-3 align-items-center">
          <div className="row justify-content-md-center align-items-center">
            <div className="col-12 h-auto">
              {skills.map(({ skill, level }) => {
                return <div className="progress mb-3 shadow" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" >
                  <div className="progress-bar bg-orange" style={{ width: `${level}%` }}>{skill}</div>
                </div>
              })}
            </div>
          </div>

        </div>
      );
    case "Experiências Anteriores":
    case "Formação":
    case "Contato":
  }
}

export default Card;
