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
                    O tempo de movimentação entre as casas está contida nesse <a href="https://mocki.io/v1/10404696-fd43-4481-a7ed-f9369073252f">JSON</a>
                </li>
            </ol>
        </div>,
        comment : <div>
            Para a resolução do problema proposto eu utilizei o <a href="https://www.inf.ufsc.br/grafos/temas/custo-minimo/dijkstra.html">Algoritmo de Dijkstra</a> já implementado por uma biblioteca.
        </div>,
        link: "https://deboraguiar.github.io/AmazonIA/"
    }
]

export default projects