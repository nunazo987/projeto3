/*
OBJETIVO:
Atualizar a interface sempre que o estado mudar.

PENSAMENTO:

1) Selecionar o container da lista.
2) Limpar o conteúdo antes de renderizar novamente.
3) Para cada transação:
   - Criar elemento HTML dinamicamente.
   - Inserir no DOM.
4) Atualizar os cards com os valores calculados.

REFLEXÃO:
- Por que limpar antes de renderizar?
- O que acontece se não limpar?

DESAFIO:
Como aplicar classes diferentes para receita e despesa?
*/

export function mostrarTransacoes(transacoes){
   const lista = document.querySelector(".lista-transacoes");
   lista.innerHTML = "";

   transacoes.forEach(t => {
      const li = document.createElement("div");
      li.classList.add("item-transacao");
      li.classList.add(t.tipo === "receita" ? "receita" : "despesa");

      const tipoClasse = t.tipo === "receita" ? "etiqueta-receita" : "etiqueta-despesa";

      li.innerHTML = `
      <span class="transacao ${tipoClasse}">${t.tipo.charAt(0).toUpperCase() + t.tipo.slice(1)}</span>
      <span class="categoria">${t.categoria}</span>
      <span class="data">${t.data}</span>
      <span class="valor">${t.valor.toFixed(2)}</span>
      `;
      lista.appendChild(li);
   });
}