/*
OBJETIVO:
Conectar tudo.

PASSO A PASSO:

1) Capturar inputs do formulário.
2) Escutar clique do botão.
3) Validar dados.
4) Criar objeto transação.
5) Atualizar estado.
6) Re-renderizar UI.
7) Limpar formulário.

IMPORTANTE:
Sempre que adicionar uma transação:
- Atualizar lista
- Atualizar cards

Pergunta:
O que deve acontecer quando a página recarrega?
*/

//início

import { adicionarTransacao, carregarTransacoes, obterTransacoes } from "./modules/state.js";
import { mostrarTransacoes } from "./modules/userInterface.js";


carregarTransacoes();
mostrarTransacoes(obterTransacoes());

//input e transformaçao do formulario em objeto
const FORM = document.querySelector(".nova-transacao");

FORM.addEventListener("submit", e => {
    e.preventDefault()
    
    const DESCRICAO = document.querySelector("#descricao").value.trim();
    const VALOR = Number(document.querySelector("#quantidade").value);
    const TIPO = document.querySelector("#tipo-transacao").value;

    if (!DESCRICAO || !VALOR){
        alert("Preencha todos os campos.");
        return
    };

    const transacao = {
        id: Date.now(),
        DESCRICAO,
        VALOR,
        TIPO,
        categoria: categoriaEscolhida || "Sem categoria",
        data: new Date().toLocaleDateString("pt-PT")
    };
    adicionarTransacao(transacao);
      
    console.log("Estado atual: ", obterTransacoes());
});

//selecionar categoria e adicionar categoria ao objeto
const categorias = document.querySelectorAll(".categorias");

let categoriaEscolhida = "";

categorias.forEach(cat => {
    cat.addEventListener("click", e => {
        categoriaEscolhida = cat.textContent;

        categorias.forEach(c => c.classList.remove("selecionada"));
        cat.classList.add("selecionada");
    })
});

