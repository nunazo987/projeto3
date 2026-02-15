export function calcularSaldo(transacoes) {
    const totalReceitas = transacoes
        .filter(t => t.tipo === "receita")
        .reduce((acc, t) => acc + t.valor, 0);

    const totalDespesas = transacoes
        .filter(t => t.tipo === "despesa")
        .reduce((acc, t) => acc + t.valor, 0);

    const saldo = totalReceitas - totalDespesas;

    return { saldo, totalReceitas, totalDespesas };
};

export function calcularTotalReceitas(transacoes) {
    return transacoes
        .filter(t => t.tipo === "receita")
        .reduce((acc, t) => acc + t.valor, 0);
};

export function calcularTotalDespesas(transacoes) {
    return transacoes
        .filter(t => t.tipo === "despesa")
        .reduce((acc, t) => acc + t.valor, 0);
};
