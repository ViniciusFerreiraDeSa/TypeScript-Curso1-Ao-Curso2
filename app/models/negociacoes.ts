import negociacao from "./negociacao.js";

export class Negociacoes {
                            // T = type Array<negociacao> mesma coisa que negociacao [];
    private _negociacoes : negociacao[] = [] ;

    // métodos para mecher com as negociações
    public adiconaPortaDeEntrada(negociacao: negociacao){
        this._negociacoes.push(negociacao);
    }
                            // ReadOnlyArray método do TypeScript
                            // ReadonlyArray<negociacao> mesma coisa que readonly negociacao [];
    public listaDeNegociacoes() : ReadonlyArray<negociacao> {
        return this._negociacoes; //  [...this._negociacoes] poderiamos usar esse método de JavaScript tbm usando o spread operator
    }
}

// const negociacoes = new Negociacoes();
// // negociacoes.adiconaPortaDeEntrada(new negociacao())
// negociacoes.listaDeNegociacoes().forEach(n =>{
//     n.
// });