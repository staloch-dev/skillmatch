class Vaga {
  constructor(id, titulo, empresa, nivel, requisitos, salarioBase) {
    this.id = id;
    this.titulo = titulo;
    this.empresa = empresa;
    this.nivel = nivel;
    this.requisitos = requisitos;
    this.salarioBase = salarioBase;
  }

  exibirDetalhes() {
    console.log(
      `Vaga #${this.id}: ${this.titulo} na ${this.empresa} (Nível ${this.nivel}) - Salário: R$${this.salarioBase.toFixed(2)} | Requisitos: ${this.requisitos.join(", ")}`
    );
  }

  compararRequisitos(habilidades) {
    const possui = [];
    const falta = [];

    this.requisitos.forEach((requisito) => {
      const encontrado = habilidades.find(
        (habilidade) => habilidade.toLowerCase() === requisito.toLowerCase()
      );

      encontrado ? possui.push(requisito) : falta.push(requisito);
    });

    console.log(
      possui.length > 0
        ? `Requisitos atendidos: ${possui.join(", ")}.`
        : "Nenhum requisito atendido."
    );

    console.log(
      falta.length > 0
        ? `Requisitos faltando: ${falta.join(", ")}.`
        : "Você atende a todos os requisitos desta vaga!"
    );
  }
}

module.exports = Vaga;
