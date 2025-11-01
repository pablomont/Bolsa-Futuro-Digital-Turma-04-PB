export class Pizza {
  constructor(public ingredientes: string[]) {}

  calculaPreco(): number {
    const qtd = this.ingredientes.length;

    if (qtd <= 2) return 15;
    if (qtd <= 5) return 20;
    return 23;
  }
}
