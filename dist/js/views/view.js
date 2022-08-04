export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    // renderiza o template no local informado pelo constructor
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
