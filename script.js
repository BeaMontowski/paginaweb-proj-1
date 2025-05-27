const cardsDiv = document.getElementById('container')

function adicionaCartao(pergunta, resposta) {
    const card = document.createElement("div");
    card.classList.add("cartao__conteudo");
  
    const frente = document.createElement("div");
    frente.classList.add("pergunta");

    const frenteTitulo = document.createElement("h3")
    frenteTitulo.textContent = 'Van Gogh';
    frente.appendChild(frenteTitulo);

    const frenteParagrafo = document.createElement("p")
    frenteParagrafo.textContent = pergunta;
    frente.appendChild(frenteParagrafo);

    const verso = document.createElement("div");
    verso.classList.add("resposta");
    const versoParagrafo = document.createElement("p")
    versoParagrafo.textContent = resposta;
    verso.appendChild(versoParagrafo);

    card.appendChild(frente);
    card.appendChild(verso);
  
    cardsDiv.appendChild(card);
}

adicionaCartao(
    'Quem foi Vincent Van Gogh?', 
    'Van Gogh foi um pintor pós-impressionista holandês, conhecido por suas obras expressivas e coloridas.'
)

adicionaCartao(
    'Onde Van Gogh nasceu?', 
    'Ele nasceu em Zundert, na Holanda, em 30 de março de 1853'
)

adicionaCartao(
    'Qual é a obra mais famosa de Van Gogh?', 
    'A Noite Estrelada*, pintada em 1889.'
)

adicionaCartao(
    'Van Gogh vendeu muitos quadros em vida?', 
    'Não. Ele vendeu apenas um quadro enquanto estava vivo.'
)

adicionaCartao(
    'Qual era o nome do irmão de Van Gogh?', 
    'Theo van Gogh. Ele era comerciante de arte e apoiou Vincent financeiramente e emocionalmente.'
)

