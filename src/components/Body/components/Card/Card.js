import skills from "./Skills";

function Card(props) {
  return (
    <div className={`carousel-item ${props.idx === 3 ? "active" : ""}`}>
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
            <div className="accordion h-auto" id="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <span className="orange_text">
                      Accordion Item #2
                    </span>
                  </button>
                </h2>
                <div id="collapseTwo" className="orange_text accordion-collapse collapse" data-bs-parent="#accordion">
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    case "Contato":
      return <div className="mx-auto d-block w-50 text-white">
        <div className="row align-items-center"> {/* Centraliza elementos verticalmente */}
          <div className="col-12 h-auto"> {/* " */}
            <div class="row justify-content-center mb-5"> {/* Linkedin */}
              <div class="col-8 text-center">
                <a href="https://www.linkedin.com/in/débora-boni/" target="_blank">
                  <button class="btn btn-primary rounded-circle mb-2">
                    <i class="bi bi-linkedin"></i>
                  </button>
                </a>
                <p>https://www.linkedin.com/in/débora-boni/</p>
              </div>
            </div>
            <div class="row justify-content-evenly"> {/* Telefone e E-mail */}
              <div class="col-6 text-center">
                <a href="https://wa.me/5511996605776" target="_blank">
                  <button class="btn btn-primary rounded-circle mb-2">
                    <i class="bi bi-whatsapp"></i>
                  </button>
                </a>
                <p>+55 (11) 99660-5776</p>
              </div>
              <div class="col-6 text-center">
                <a href="mailto:${debora.aguiar.boni@gmail.com}" target="_blank">
                  <button class="btn btn-primary rounded-circle mb-2">
                    <i class="bi bi-envelope"></i>
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
