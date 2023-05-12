import skills from "./Skills";
import projects from "./Projects";

function Card(props) {
  return (
    <div className={`carousel-item ${props.idx === 0 ? "active" : ""}`}>
      {chosePage(props.item)}
    </div>
  );
}

function chosePage(type) {
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
        <div className=" rounded mx-auto d-block w-50 p-3 align-items-center">
          <div className="row justify-content-md-center align-items-center">
            <div className="col-12 h-auto">
              {skills.map(({ skill, level }) => {
                return <div className="progress mb-3 shadow" role="progressbar" aria-label=" 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" >
                  <div className="progress-bar bg-orange" style={{ width: `${level}%` }}>{skill}</div>
                </div>
              })}
            </div>
          </div>
        </div>
      );
    case "Projetos":
      return <div className="mx-auto d-block w-50 align-items-center">
        <div className="row justify-content-md-center align-items-center">
          <div className="col-12 h-auto">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              {projects.map(({ projName, enun, comment, link }) => {
                return <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      {projName}
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      {enun}
                      {comment && <div className="font-monospace" style={{ color: "#708c60" }}>
                        /*<br />
                          {comment}
                        */
                      </div>}
                      <div className="fs-4">
                        <a href={link} target="_blank" className="text-decoration-none">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" className="bi bi-link" viewBox="0 0 16 16">
                            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                          </svg>
                          <span className="ms-1">
                            Visualização
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    case "Contato":
      return <div className="mx-auto d-block w-50 text-white">
        <div className="row align-items-center"> {/* Centraliza elementos verticalmente */}
          <div className="col-12 h-auto"> {/* " */}
            <div className="row justify-content-center mb-5"> {/* Linkedin */}
              <div className="col-8 text-center">
                <a href="https://www.linkedin.com/in/débora-boni/" target="_blank">
                  <button className="btn btn-primary rounded-circle mb-2">
                    <i className="bi bi-linkedin"></i>
                  </button>
                </a>
                <p>https://www.linkedin.com/in/débora-boni/</p>
              </div>
            </div>
            <div className="row justify-content-evenly"> {/* Telefone e E-mail */}
              <div className="col-6 text-center">
                <a href="https://wa.me/5511996605776" target="_blank">
                  <button className="btn btn-primary rounded-circle mb-2">
                    <i className="bi bi-whatsapp"></i>
                  </button>
                </a>
                <p>+55 (11) 99660-5776</p>
              </div>
              <div className="col-6 text-center">
                <a href="mailto:${debora.aguiar.boni@gmail.com}" target="_blank">
                  <button className="btn btn-primary rounded-circle mb-2">
                    <i className="bi bi-envelope"></i>
                  </button>
                </a>
                <p>debora.aguiar.boni@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    default:
      break;
  }
}

export default Card;
