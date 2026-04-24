class Personagem {
    constructor(id, nome, descricao, imagem) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.pontuacao = 0;
    }
}

class Pergunta {
    constructor(texto, opcoes) {
        this.texto = texto;
        this.opcoes = opcoes;
    }
}

class SistemaQuiz {
    constructor() {
        this.personagens = [];
        this.perguntas = [];
        this.indicePerguntaAtual = 0;
        this.listaIds = ['jon', 'daenerys', 'cersei', 'tyrion', 'arya', 'sansa'];

        this.inicializarDados();
        this.configurarEventos();
    }

    inicializarDados() {
        this.personagens = [
            new Personagem('jon', 'Jon Snow', 'Guiado pela honra e pelo dever. Você lidera pelo exemplo e protege os vivos.', 'Assets/Jon Snow.jpeg'),
            new Personagem('daenerys', 'Daenerys Targaryen', 'Forte e implacável. Você acredita no seu destino de quebrar a roda.', 'Assets/Daenerys Targaryen.jpeg'),
            new Personagem('cersei', 'Cersei Lannister', 'Estrategista impiedosa. O poder e a família são tudo o que importa.', 'Assets/Cersei Lannister.jpeg'),
            new Personagem('tyrion', 'Tyrion Lannister', 'Sua mente é sua arma. Você sobrevive lendo livros e entendendo as pessoas.', 'Assets/Tyrion Lannister.jpeg'),
            new Personagem('arya', 'Arya Stark', 'Independente e letal. Você busca justiça com as próprias mãos.', 'Assets/Arya Stark.jpeg'),
            new Personagem('sansa', 'Sansa Stark', 'Sobrevivente nata. Você aprendeu com seus inimigos e se tornou uma líder astuta.', 'Assets/Sansa Stark.jpeg')
        ];

        this.perguntas = [
            new Pergunta("Como você lida com seus inimigos?", [
                { texto: "Enfrento-os de frente, com honra ou com a minha espada.", pontos: { jon: 3, arya: 3, daenerys: 1, cersei: 0, tyrion: 0, sansa: 0 } },
                { texto: "Crio intrigas e alianças para que se destruam sozinhos.", pontos: { jon: 0, arya: 0, daenerys: 0, cersei: 3, tyrion: 2, sansa: 3 } },
                { texto: "Destruo-os completamente, sem piedade.", pontos: { jon: 0, arya: 1, daenerys: 3, cersei: 2, tyrion: 0, sansa: 0 } }
            ]),
            new Pergunta("O que significa o poder para você?", [
                { texto: "Um fardo necessário para proteger quem não pode se defender.", pontos: { jon: 3, arya: 1, daenerys: 1, cersei: 0, tyrion: 2, sansa: 1 } },
                { texto: "O controle absoluto para garantir a sobrevivência da minha casa.", pontos: { jon: 0, arya: 0, daenerys: 0, cersei: 3, tyrion: 0, sansa: 3 } },
                { texto: "Meu direito de nascença e a ferramenta para mudar o mundo.", pontos: { jon: 0, arya: 0, daenerys: 3, cersei: 1, tyrion: 0, sansa: 0 } }
            ]),
            new Pergunta("Qual é a sua maior arma?", [
                { texto: "Minha honra e habilidade em combate.", pontos: { jon: 3, arya: 2, daenerys: 0, cersei: 0, tyrion: 0, sansa: 0 } },
                { texto: "Meu intelecto e minha capacidade de negociação.", pontos: { jon: 0, arya: 0, daenerys: 0, cersei: 1, tyrion: 3, sansa: 2 } },
                { texto: "Recursos infinitos, medo ou fogo.", pontos: { jon: 0, arya: 0, daenerys: 3, cersei: 3, tyrion: 0, sansa: 0 } }
            ]),
            new Pergunta("Como você sobrevive a uma situação de extrema desvantagem?", [
                { texto: "Luto até o fim, inspirando os outros a fazerem o mesmo.", pontos: { jon: 3, arya: 1, daenerys: 2, cersei: 0, tyrion: 0, sansa: 0 } },
                { texto: "Fujo, me escondo nas sombras e ataco no momento certo.", pontos: { jon: 0, arya: 3, daenerys: 0, cersei: 0, tyrion: 1, sansa: 1 } },
                { texto: "Uso palavras, subornos ou manipulação mental para sair vivo.", pontos: { jon: 0, arya: 0, daenerys: 0, cersei: 2, tyrion: 3, sansa: 3 } }
            ]),
            new Pergunta("Qual o papel de um conselheiro ao seu lado?", [
                { texto: "Alguém que me diga a verdade, mesmo quando dói.", pontos: { jon: 3, arya: 0, daenerys: 1, cersei: 0, tyrion: 3, sansa: 1 } },
                { texto: "Um fantoche que executa minhas ordens sem questionar.", pontos: { jon: 0, arya: 0, daenerys: 0, cersei: 3, tyrion: 0, sansa: 0 } },
                { texto: "Alguém em quem eu possa confiar, mas cujas lições eu adapto.", pontos: { jon: 0, arya: 1, daenerys: 2, cersei: 0, tyrion: 0, sansa: 3 } }
            ]),
            new Pergunta("O que você prioriza em tempos de guerra?", [
                { texto: "A segurança do meu povo e a união contra o mal maior.", pontos: { jon: 3, arya: 0, daenerys: 1, cersei: 0, tyrion: 1, sansa: 2 } },
                { texto: "A eliminação silenciosa dos generais inimigos.", pontos: { jon: 0, arya: 3, daenerys: 0, cersei: 0, tyrion: 0, sansa: 0 } },
                { texto: "Manter minha posição de liderança a qualquer custo.", pontos: { jon: 0, arya: 0, daenerys: 2, cersei: 3, tyrion: 0, sansa: 0 } }
            ]),
            new Pergunta("Onde você se sente mais em casa?", [
                { texto: "No frio do Norte, junto às tradições da minha família.", pontos: { jon: 3, arya: 1, daenerys: 0, cersei: 0, tyrion: 0, sansa: 3 } },
                { texto: "Em movimento, explorando o mundo e fazendo meu próprio caminho.", pontos: { jon: 0, arya: 3, daenerys: 2, cersei: 0, tyrion: 1, sansa: 0 } },
                { texto: "Na capital, cercado de luxo, vinho e intrigas.", pontos: { jon: 0, arya: 0, daenerys: 0, cersei: 3, tyrion: 3, sansa: 0 } }
            ]),
            new Pergunta("Como você enxerga a lealdade?", [
                { texto: "Deve ser recíproca e baseada em princípios e respeito.", pontos: { jon: 3, arya: 2, daenerys: 1, cersei: 0, tyrion: 1, sansa: 1 } },
                { texto: "É frágil; prefiro confiar apenas em mim mesmo.", pontos: { jon: 0, arya: 3, daenerys: 0, cersei: 1, tyrion: 2, sansa: 3 } },
                { texto: "Exijo devoção absoluta, ou considero traição.", pontos: { jon: 0, arya: 0, daenerys: 3, cersei: 3, tyrion: 0, sansa: 0 } }
            ]),
            new Pergunta("Como reagir a uma traição familiar?", [
                { texto: "Com profunda tristeza, mas a justiça deve ser feita.", pontos: { jon: 3, arya: 0, daenerys: 0, cersei: 0, tyrion: 1, sansa: 1 } },
                { texto: "Planejo uma vingança meticulosa que eles nunca esquecerão.", pontos: { jon: 0, arya: 3, daenerys: 1, cersei: 2, tyrion: 0, sansa: 3 } },
                { texto: "Ignoro os laços de sangue e elimino a ameaça.", pontos: { jon: 0, arya: 0, daenerys: 3, cersei: 3, tyrion: 2, sansa: 0 } }
            ]),
            new Pergunta("Qual o seu objetivo final?", [
                { texto: "Apenas sobreviver ao inverno e proteger os vivos.", pontos: { jon: 3, arya: 0, daenerys: 0, cersei: 0, tyrion: 1, sansa: 0 } },
                { texto: "Retomar o Trono de Ferro e governar os Sete Reinos.", pontos: { jon: 0, arya: 0, daenerys: 3, cersei: 3, tyrion: 0, sansa: 0 } },
                { texto: "Garantir a independência e o futuro da minha família.", pontos: { jon: 0, arya: 3, daenerys: 0, cersei: 0, tyrion: 0, sansa: 3 } }
            ])
        ];
    }

    configurarEventos() {
        let btnIniciar = document.getElementById('btn-start');
        btnIniciar.addEventListener('click', () => {
            this.iniciarQuiz();
        });

        let btnReiniciar = document.getElementById('btn-restart');
        btnReiniciar.addEventListener('click', () => {
            this.reiniciarQuiz();
        });
    }

    trocarTela(telaId) {
        let telas = document.getElementsByClassName('screen');
        for (let i = 0; i < telas.length; i++) {
            telas[i].classList.remove('active');
        }
        document.getElementById(telaId).classList.add('active');
    }

    iniciarQuiz() {
        this.indicePerguntaAtual = 0;

        for (let i = 0; i < this.personagens.length; i++) {
            this.personagens[i].pontuacao = 0;
        }

        this.trocarTela('quiz-screen');
        this.renderizarPergunta();
    }

    renderizarPergunta() {
        let pergunta = this.perguntas[this.indicePerguntaAtual];
        
        let tituloPergunta = document.getElementById('question-text');
        tituloPergunta.textContent = "Pergunta " + (this.indicePerguntaAtual + 1) + " de 10: " + pergunta.texto;

        let containerOpcoes = document.getElementById('options-container');
        containerOpcoes.innerHTML = '';

        for (let i = 0; i < pergunta.opcoes.length; i++) {
            let opcao = pergunta.opcoes[i];
            let botao = document.createElement('button');
            botao.textContent = opcao.texto;

            botao.addEventListener('click', () => {
                this.computarResposta(opcao.pontos);
            });

            containerOpcoes.append(botao);
        }
    }

    computarResposta(pontos) {
        for (let i = 0; i < this.listaIds.length; i++) {
            let idAtual = this.listaIds[i];
            let valor = pontos[idAtual];

            for (let j = 0; j < this.personagens.length; j++) {
                if (this.personagens[j].id === idAtual) {
                    this.personagens[j].pontuacao += valor;
                }
            }
        }

        this.indicePerguntaAtual++;

        if (this.indicePerguntaAtual < this.perguntas.length) {
            this.renderizarPergunta();
        } else {
            this.exibirResultado();
        }
    }

    exibirResultado() {
        let personagemVencedor = this.personagens[0];

        for (let i = 1; i < this.personagens.length; i++) {
            if (this.personagens[i].pontuacao > personagemVencedor.pontuacao) {
                personagemVencedor = this.personagens[i];
            }
        }

        document.getElementById('result-name').textContent = personagemVencedor.nome;
        document.getElementById('result-desc').textContent = personagemVencedor.descricao;
        document.getElementById('result-image').src = personagemVencedor.imagem;
        document.getElementById('result-score').textContent = "Pontuação final: " + personagemVencedor.pontuacao + " pontos.";

        this.trocarTela('result-screen');
    }

    reiniciarQuiz() {
        this.trocarTela('welcome-screen');
    }
}

let sistemaQuiz = new SistemaQuiz();