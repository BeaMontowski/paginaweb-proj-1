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

adicionaCartao(
    'Van Gogh cortou a própria orelha?',
    'Sim, ele cortou parte da orelha durante um surto mental em 1888, quando vivia em Arles, na França'
)
adicionaCartao(
    'Van Gogh pintava com que estilo?',
    'Ele pintava no estilo pós-impressionista, com pinceladas fortes e cores intensas.'
)

adicionaCartao(
    'Quantas obras Van Gogh produziu?',
    'Cerca de 2.100 obras, incluindo mais de 800 pinturas a óleo.'
)

adicionaCartao(
    'Cerca de 2.100 obras, incluindo mais de 800 pinturas a óleo.',
    'Ele morreu em 29 de julho de 1890, provavelmente por suicídio, aos 37 anos.'
)

adicionaCartao(
    'Van Gogh ficou famoso em vida?',
    'Não. Ele só se tornou mundialmente famoso depois de sua morte.'
)