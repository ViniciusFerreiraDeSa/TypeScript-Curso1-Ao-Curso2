export default class negociacao{
    constructor(
        private readonly _data: Date,
        public  readonly quantidade: number, 
        public readonly valor: number
        ){}
    get volume():number{
        return this.quantidade * this.valor;
    }
    get data (): Date{
        const data = new Date(this._data.getTime());
        return data
    }
    // metodo que pega os valores em String e converte para dados com o return;
    // todo método statico podemos chamar diretamente da classe
    public static criaDe(dataString:string, quantidadeString:string, valorString:string): negociacao{
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new negociacao(data, quantidade, valor);
    }
}

