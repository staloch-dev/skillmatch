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

  calcularPercentualAderencia(habilidades) {
    const habilidadesLower = habilidades.map((h) => h.toLowerCase());

    const possui = this.requisitos.filter((requisito) =>
      habilidadesLower.includes(requisito.toLowerCase())
    );

    const falta = this.requisitos.filter(
      (requisito) => !habilidadesLower.includes(requisito.toLowerCase())
    );

    const percentual = this.requisitos.length > 0
      ? (possui.length / this.requisitos.length) * 100
      : 100;

    let faixa;
    if (percentual >= 80) {
      faixa = "Alta";
    } else if (percentual >= 50) {
      faixa = "Média";
    } else {
      faixa = "Baixa";
    }

    return { possui, falta, percentual, faixa, elegivel: true };
  }

  compararRequisitos(habilidades) {
    const { possui, falta, percentual, faixa } =
      this.calcularPercentualAderencia(habilidades);

    console.log(`Aderência: ${percentual.toFixed(1)}% | Compatibilidade: ${faixa}`);

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
