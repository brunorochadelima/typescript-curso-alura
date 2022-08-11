export abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor)
    if(elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`seletor ${seletor} não existe no dom`  )
    }
    
    if ( escapar) {
      this.escapar = escapar;
    }
  }

  // renderiza o template no local informado pelo constructor
  public update(model: T): void {
    let template = this.template(model);
    if ( this.escapar ) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "")
    }

    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
