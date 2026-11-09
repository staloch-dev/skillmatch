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

    const percentualAderencia = this.requisitos.length > 0
      ? (possui.length / this.requisitos.length) * 100
      : 100;

    let faixaCompatibilidade;
    if (percentualAderencia >= 70) {
      faixaCompatibilidade = "Alta";
    } else if (percentualAderencia >= 50){
      faixaCompatibilidade = "Média";
    } else {
      faixaCompatibilidade = "Baixa";
    }

    console.log(`Aderência: ${percentualAderencia.toFixed(1)}% | Compatibilidade: ${faixaCompatibilidade}`);
    
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
