/*
OBJETIVO:
Centralizar o controle das transações em memória.

PENSAMENTO:

1) Carregar as transações salvas quando o sistema iniciar.
2) Criar função para:
   - Retornar lista atual.
   - Adicionar nova transação.
   - (Opcional) remover transação.
3) Sempre que alterar o estado:
   - Atualizar o localStorage.

REFLEXÃO:
- Por que não manipular o localStorage diretamente no UI?
- O que significa separar responsabilidade?

DESAFIO:
Como garantir que o array nunca fique fora de sincronia?
*/

//inicio

let transacoes = [];

export function addTransacao(transacao){
   transacoes.push(transacao);
   const dados = JSON.parse(localStorage.getItem("transacoes"));
   salvarTransacoes();
};

function salvarTransacoes(){
   localStorage.setItem("transacoes", JSON.stringify(transacoes));
};

export function carregarTransacoes(){
   const dados = JSON.parse(localStorage.getItem("transacoes"));
   if (dados) transacoes = dados; 
};

console.log(transacoes);