import { calcularSaldo } from "./transactions.js";
import { removerTransacao, obterTransacoes } from "./state.js";

export function atualizarCards(transacoes) {
    const saldoTotalElem = document.querySelector(".cards-container .card:nth-child(1) .valor");
    const rendaTotalElem = document.querySelector(".cards-container .card:nth-child(2) .valor");
    const despesaTotalElem = document.querySelector(".cards-container .card:nth-child(3) .valor");

    const { saldo, totalReceitas, totalDespesas } = calcularSaldo(transacoes);

    saldoTotalElem.textContent = `€ ${isNaN(saldo) ? "0,00" : saldo.toFixed(2)}`;
    rendaTotalElem.textContent = `€ ${isNaN(totalReceitas) ? "0,00" : totalReceitas.toFixed(2)}`;
    despesaTotalElem.textContent = `€ ${isNaN(totalDespesas) ? "0,00" : totalDespesas.toFixed(2)}`;
};

export function mostrarTransacoes(transacoes) {
    const LISTA = document.querySelector(".lista-transacoes");
    LISTA.innerHTML = "";

    transacoes.forEach(t => {
        if (!t.tipo || !t.descricao || !t.valor) return;

        const LI = document.createElement("div");
        LI.classList.add("item-transacao");
        LI.classList.add(t.tipo === "receita" ? "receita" : "despesa");

        const TIPOCLASSE = t.tipo === "receita" ? "etiqueta-receita" : "etiqueta-despesa";

        LI.innerHTML = `
            <span class="transacao ${TIPOCLASSE}">${t.tipo.charAt(0).toUpperCase() + t.tipo.slice(1)}</span>
            <span class="categoria">${t.categoria}</span>
            <span class="data">${t.data}</span>
            <span class="valor">€ ${t.valor.toFixed(2)}</span>
            <button class="remover" data-id="${t.id}">Remover</button>
        `;

        LI.querySelector(".remover").addEventListener("click", () => {
            removerTransacao(t.id);
            mostrarTransacoes(obterTransacoes());
            atualizarCards(obterTransacoes());
        });

        LISTA.appendChild(LI);
    });
};
