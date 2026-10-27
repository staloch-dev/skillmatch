const Vaga = require("./vaga");

class VagaInternacional extends Vaga {
  constructor(id, titulo, empresa, nivel, requisitos, salarioBase, pais, moeda, idiomaExigido) {
    super(id, titulo, empresa, nivel, requisitos, salarioBase);
    this.pais = pais;
    this.moeda = moeda;
    this.idiomaExigido = idiomaExigido;
  }

  exibirDetalhes() {
    console.log(`Vaga Internacional #${this.id}: ${this.titulo} na ${this.empresa} (${this.nivel}) - Local: ${this.pais} | Idioma: ${this.idiomaExigido} | Salário Base: ${this.salarioBase.toFixed(2)} ${this.moeda} | Requisitos: ${this.requisitos.join(", ")}`);
  }

  compararRequisitos(habilidadesCandidato) {
    super.compararRequisitos(habilidadesCandidato);

    const atendeIdioma = habilidadesCandidato.includes(this.idiomaExigido);
    console.log(atendeIdioma
        ? `Idioma: O candidato possui proficiência em ${this.idiomaExigido}.`
        : `Idioma: O candidato precisa de proficiência em ${this.idiomaExigido}.`
    );
  }
}

module.exports = VagaInternacional;
