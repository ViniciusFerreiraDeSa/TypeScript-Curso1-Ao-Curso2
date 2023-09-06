export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error('Seletor de elemento não definido no DOM. Verifique');
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(modelo) {
        let template = this.template(modelo);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
