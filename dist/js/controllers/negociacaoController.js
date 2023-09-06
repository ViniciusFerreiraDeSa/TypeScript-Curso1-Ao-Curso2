import { DiasDaSemana } from "../enums/diasDaSemana.js";
import negociacao from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemViw } from "../views/mensagemViw.js";
import { NegociacoesViw } from "../views/negociacoesViw.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesViw = new NegociacoesViw('#negociacoesViw', true);
        this._mensagemViw = new MensagemViw('#mensagemView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector("#valor");
        this._negociacoesViw.update(this._negociacoes);
    }
    adiciona() {
        const Negociacao = negociacao.criaDe(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        if (!this.ehDiaUtil(Negociacao.data)) {
            this._mensagemViw.update('Negociações feitas apenas em dias úteis!');
            return;
        }
        this._negociacoes.adiconaPortaDeEntrada(Negociacao);
        this.limparForm();
        this.atualizaView();
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    limparForm() {
        this._inputData.value = '',
            this._inputQuantidade.value = '',
            this._inputValor.value = '',
            this._inputData.focus();
    }
    atualizaView() {
        this._negociacoesViw.update(this._negociacoes);
        this._mensagemViw.update("Negociação feita com sucesso");
    }
}
