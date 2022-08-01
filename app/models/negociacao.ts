export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.valor * this.quantidade;
  }

  get data(): Date {
    const data = new Date(this._data.getTime()); // gera uma cópia de data identica a encapsulada no construtor(que agora ficou protegida de modificação)
    return data;
  }
}
