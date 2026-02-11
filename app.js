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
        categoria: "",
        data: new Date().toLocaleDateString("pt-PT")
    };
    console.log(transacao);
});