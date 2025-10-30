export class Pizza {
  constructor(public ingredientes: string[]) {}

  calculaPreco(): number {
    const quantidade = this.ingredientes.length

    if (quantidade <= 2) {
      return 15
    } else if (quantidade >= 3 && quantidade <= 5) {
      return 20
    } else {
      return 23
    }
  }
}
