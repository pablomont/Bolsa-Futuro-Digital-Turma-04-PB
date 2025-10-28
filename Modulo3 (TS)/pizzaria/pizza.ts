export class Pizza {

    constructor(public ingredientes: string[]) {}
    calculaPreco(){
        if (this.ingredientes.length <= 2) {
            return 15;
    } else if (this.ingredientes.length <= 5) {
            return 20;
    } else {
            return 23;
    }
}
}