export class Pizza {
  constructor(private _ingredientes: string[]) {}

  get ingredientes(): string[] {
    return this._ingredientes
  }

  calculaPreco(): number {
    const quantidade = this._ingredientes.length

    if (quantidade <= 2) {
      return 15
    } else if (quantidade >= 3 && quantidade <= 5) {
      return 20
    } else {
      return 23
    }
  }
}
