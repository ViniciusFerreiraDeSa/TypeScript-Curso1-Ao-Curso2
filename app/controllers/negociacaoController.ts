
import { DiasDaSemana } from "../enums/diasDaSemana.js";
import negociacao from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemViw } from "../views/mensagemViw.js";
import { NegociacoesViw } from "../views/negociacoesViw.js";

export class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();      
    private _negociacoesViw = new NegociacoesViw('#negociacoesViw', true); // quero fazer o escape da  invasão ent passomos o valor true
    private _mensagemViw = new MensagemViw('#mensagemView');

    constructor(){
        // elementos do documento                       fazendo uma trasfromação explicita
                // temos dois modos de fazer, deixei os dois no código.
        this._inputData = <HTMLInputElement> document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this._inputValor = document.querySelector("#valor") as HTMLInputElement;
        this._negociacoesViw.update(this._negociacoes);

    }

    public adiciona(): void{
                            // chamando o método diretamente da classe negociacao
        const Negociacao = negociacao.criaDe(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value,
        )
        // se nçao for dia útil eu ja faço logo o retorno da mensagem
        if(!this.ehDiaUtil(Negociacao.data)){
            this._mensagemViw.update('Negociações feitas apenas em dias úteis!');
            return
        }
            this._negociacoes.adiconaPortaDeEntrada(Negociacao);
            this.limparForm();
            this.atualizaView();    
    }
    // Verifica se é dia útil
    private ehDiaUtil(data:Date){
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    // Limpar o formulario e adicionar o foco denovo em data

    private limparForm(): void{
        this._inputData.value = '',
        this._inputQuantidade.value = '',
        this._inputValor.value= '',
        this._inputData.focus();
    }
    private atualizaView(): void {
        this._negociacoesViw.update(this._negociacoes);
        this._mensagemViw.update("Negociação feita com sucesso")
    }
}
