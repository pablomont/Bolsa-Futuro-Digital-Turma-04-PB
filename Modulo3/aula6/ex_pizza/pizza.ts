export class Pizza {
  // atributo privado
  private _ingredientes: string[];

  // usar _ingredientes internamente
  constructor(ingredientes: string[]) {
    this._ingredientes = ingredientes;
  }

  calculaPreco(): number {
    const qtd = this._ingredientes.length;

    if (qtd <= 2) return 15;
    if (qtd <= 5) return 20;
    return 23;
  }

  // getter público
  get ingredientes(): string[] {
    return this._ingredientes;
  }
}
