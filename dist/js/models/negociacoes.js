export class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiconaPortaDeEntrada(negociacao) {
        this._negociacoes.push(negociacao);
    }
    listaDeNegociacoes() {
        return this._negociacoes;
    }
}
