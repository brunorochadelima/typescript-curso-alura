export class MensagemView {
  private elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  template(model: string) {
    return `
  <p class="alert alert-info">${model}<p/>
  `;
  }

  update(model: string) {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}
