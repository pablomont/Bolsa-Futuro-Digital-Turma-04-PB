export class Pizza{
    //Cria uma instância de Pizza e armazena os ingredientes no campo privado _ingredientes
    constructor(private _ingredientes: string[]){}

    //Retorna o preço da pizza de acordo com a quantidade de ingredientes:
    // 0, 1 ou 2 ingredientes → R$ 15
    // 3 a 5 ingredientes → R$ 20
    // Mais de 5 ingredientes → R$ 23
    calculaPreco(){
        if(this._ingredientes.length <= 2){
            return 15
        } else if(this._ingredientes.length <= 5){
            return 20
        } else {
            return 23
        }
    }

    get ingredientes(){
        return this._ingredientes
    }
}