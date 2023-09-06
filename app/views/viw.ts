                // definir um tipo, nas classes filhas definimos o tipo dele
                // classe abstrata não pode ter instancias diretamente
export abstract class View<T>{
    // modificador protected só a view tem acesso a essa propriedade, mas os herdeiros de view tem acesso a essa propriedade
    protected elemento: HTMLElement;
    private escapar: boolean = false;
                                // ? parâmetro opcional se o Úsuario quiser passar ele passa, se não ele deixa em branco. Ele pega o valor de private escapar
    constructor(seletor: string, escapar?: boolean){
        const elemento = document.querySelector(seletor);
         if(elemento){
            this.elemento = elemento as HTMLInputElement;
         }else{
            throw Error('Seletor de elemento não definido no DOM. Verifique');
         }
        // precisamos da lógica pq se parsamos algo para ele, ele adota esse valor.
        if(escapar){
            this.escapar = escapar;
        }
    }
    public update(modelo: T): void{
        let template = this.template(modelo);
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
    // no método abstrato, a classe pai não sabe oque vai ser implementado a classe herdeira 
    // protected também resolveria o problema, porém o método privado só a classe pode trabalhar com o método
    protected abstract template(modelo: T):string;
    
}