export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  // renderiza o template no local informado pelo constructor
  update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
