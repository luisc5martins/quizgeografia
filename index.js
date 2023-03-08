// Definir perguntas e respostas
const perguntas = [
    {
      pergunta: "Qual é a bandeira do Brasil?",
      opcoes: [
        {texto: "A", correta: false},
        {texto: "B", correta: false},
        {texto: "C", correta: true}
      ]
    },
    {
      pergunta: "Qual é a bandeira da França?",
      opcoes: [
        {texto: "A", correta: false},
        {texto: "B", correta: true},
        {texto: "C", correta: false}
      ]
    },
    {
      pergunta: "Qual é a bandeira do Japão?",
      opcoes: [
        {texto: "A", correta: true},
        {texto: "B", correta: false},
        {texto: "C", correta: false}
      ]
    },
    {
      pergunta: "Qual é a bandeira da Alemanha?",
      opcoes: [
        {texto: "A", correta: false},
        {texto: "B", correta: true},
        {texto: "C", correta: false}
      ]
    }
  ];
  
  // Selecionar elementos HTML
  const quiz = document.querySelector("#quiz");
  const perguntaAtual = document.querySelector("h2");
  const opcoesResposta = document.querySelectorAll("input[type=radio]");
  const botaoEnviar = document.querySelector("#enviar");
  const feedback = document.querySelector("#feedback");
  
  // Iniciar quiz
  let indicePerguntaAtual = 0;
  let pontuacao = 0;
  mostrarPergunta();
  
  function mostrarPergunta() {
    const pergunta = perguntas[indicePerguntaAtual];
    perguntaAtual.innerText = pergunta.pergunta;
    opcoesResposta.forEach((opcao, indice) => {
      opcao.nextElementSibling.innerText = pergunta.opcoes[indice].texto;
      opcao.checked = false;
    });
  }
  
  function verificarResposta() {
    const respostaSelecionada = document.querySelector("input[type=radio]:checked");
    if (respostaSelecionada) {
      const resposta = respostaSelecionada.value
    }}