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

import { addTransacao } from "./modules/transactions.js";
import { carregarTransacoes } from "./modules/transactions.js";

//input e transformaçao do formulario em objeto
const form = document.querySelector(".nova-transacao");

form.addEventListener("submit", e => {
    e.preventDefault()
    
    const descricao = document.querySelector("#descricao").value.trim();
    const valor = Number(document.querySelector("#quantidade").value);
    const tipo = document.querySelector("#tipo-transacao").value;

    if (!descricao || !valor){
        alert("Preencha todos os campos");
        return
    };

    const transacao = {
        id: Date.now(),
        descricao,
        valor,
        tipo,
        categoria: categoriaEscolhida || "Sem categoria",
        data: new Date().toLocaleDateString("pt-PT")
    };
    addTransacao(transacao);
    console.log(transacao);
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