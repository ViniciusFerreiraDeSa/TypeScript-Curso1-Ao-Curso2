import { View } from "./viw.js";
export class NegociacoesViw extends View {
    template(modelo) {
        return ` 
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody> 
                ${modelo.listaDeNegociacoes().map(negociacao => {
            return `
                        <tr>
                            <td>${this.formatarData(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        
        `;
    }
    formatarData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
