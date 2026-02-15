const CHAVE = "transacoes";

export function salvarTransacoes(transacoes) {
    localStorage.setItem(CHAVE, JSON.stringify(transacoes));
};

export function carregarTransacoesStorage(){
   const DADOS = localStorage.getItem(CHAVE);
   return DADOS ? JSON.parse(DADOS) : [];
};
