import { salvarTransacoes, carregarTransacoesStorage } from "./storage.js";

let transacoes = [];

export function carregarTransacoes() {
    transacoes = carregarTransacoesStorage();
};

export function adicionarTransacao(transacao) {
    transacoes.push(transacao);
    salvarTransacoes(transacoes);
};

export function removerTransacao(id) {
    transacoes = transacoes.filter(t => t.id !== id);
    salvarTransacoes(transacoes);
};

export function obterTransacoes() {
    return transacoes;
};
