import { View } from "./viw.js";
export class MensagemViw extends View {
    template(modelo) {
        return `
            <p class="alert alert-info">${modelo}</p>
        `;
    }
}
