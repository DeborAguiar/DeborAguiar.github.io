const projects = [
    {
        projName: "AmazonIA",
        enun: <div>
            Dadas três posições (origin, pickup e destination) calcule o trajeto mais rapido sabendo que:
            <ol>
                <li>
                    A movimentação só é permitida horizontal ou verticalmente
                </li>
                <li>
                    O tempo de movimentação entre as casas está contida nesse <a href="https://mocki.io/v1/10404696-fd43-4481-a7ed-f9369073252f" target="_blank">JSON</a>
                </li>
            </ol>
        </div>,
        comment : <div>
            - Para a resolução do problema proposto eu utilizei o <a href="https://www.inf.ufsc.br/grafos/temas/custo-minimo/dijkstra.html" target="_blank">Algoritmo de Dijkstra</a> já implementado por uma biblioteca.
            <br/>
            - Questão proposta por <img src="https://media.graphassets.com/gJsd71c5SGh1RyV8tIrV" width="20" /> <a className="text-decoration-none" href="https://ateliware.com/" target="_blank">Ateliware</a>
        </div>,
        link: "https://deboraguiar.github.io/AmazonIA/"
    }
]

export default projects