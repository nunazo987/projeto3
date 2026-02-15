import { adicionarTransacao, carregarTransacoes, obterTransacoes } from "./modules/state.js";
import { mostrarTransacoes, atualizarCards } from "./modules/userInterface.js";

// Categorias
const CATEGORIAS = document.querySelectorAll(".categorias");
let categoriaEscolhida = "";

CATEGORIAS.forEach(cat => {
    cat.addEventListener("click", () => {
        categoriaEscolhida = cat.textContent;

        CATEGORIAS.forEach(c => c.classList.remove("selecionada"));
        cat.classList.add("selecionada");
    });
});

// Formulário
const FORM = document.querySelector(".nova-transacao");

FORM.addEventListener("submit", e => {
    e.preventDefault();

    const DESCRICAO = document.querySelector("#descricao").value.trim();
    const VALOR = Number(document.querySelector("#quantidade").value);
    const TIPO = document.querySelector("#tipo-transacao").value;

    if (!DESCRICAO || !VALOR) {
        alert("Preencha todos os campos.");
        return;
    }

    const transacao = {
        id: Date.now(),
        descricao: DESCRICAO,
        valor: VALOR,
        tipo: TIPO,
        categoria: categoriaEscolhida || "Sem categoria",
        data: new Date().toLocaleDateString("pt-PT")
    };

    adicionarTransacao(transacao);
    mostrarTransacoes(obterTransacoes());
    atualizarCards(obterTransacoes());

    FORM.reset();
    categoriaEscolhida = "";
    CATEGORIAS.forEach(c => c.classList.remove("selecionada"));
});

// Inicialização
carregarTransacoes();
mostrarTransacoes(obterTransacoes());
atualizarCards(obterTransacoes());
