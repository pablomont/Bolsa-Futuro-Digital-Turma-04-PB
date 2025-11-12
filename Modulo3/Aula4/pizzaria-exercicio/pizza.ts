export class Pizza {
  constructor(
    public nome: string,
    public ingredientes: string[],
    public precoBase: number
  ) {}

  calculaPreco(): number {
    return this.precoBase;
  }
}
