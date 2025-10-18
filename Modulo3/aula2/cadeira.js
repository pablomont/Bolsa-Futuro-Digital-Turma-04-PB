// class Cadeira{
//     cor?: string;
//     enconsto?:string;
//     pés?: string;
//     assento?: string;
// }
// const cadeiraEscritorio = new Cadeira()
// cadeiraEscritorio.cor = 'preta'
// cadeiraEscritorio.enconsto = 'estofado'
// cadeiraEscritorio.pés = 'movel'
// cadeiraEscritorio.assento = 'estofado'
// console.log(`Cadeira de escritório: ${cadeiraEscritorio}`)
// class Cadeira{
//     cor?: string;
//     enconsto?:string;
//     pés?: string;
//     assento?: string;
//     constructor(cor?: string, enconsto?: string, pés?: string, assento?: string){
//         this.cor = cor
//         this.enconsto = enconsto
//         this.pés = pés
//         this.assento = assento
//     }
// }
// const cadeiraEscritorio = new Cadeira('preto','estofado','móvel','estofado')
// const cadeiraEscolar = new Cadeira('azul','estofado','fixo','estofado')
// console.log(`Cadeira de escola: ${cadeiraEscolar}`)
var Cadeira = /** @class */ (function () {
    function Cadeira(cor, enconsto, pés, assento) {
        this.cor = cor;
        this.enconsto = enconsto;
        this.pés = pés;
        this.assento = assento;
    }
    return Cadeira;
}());
var cadeiraEscritorio = new Cadeira('preto', 'estofado', 'móvel', 'estofado');
console.log("Cor da cadeira de escrit\u00F3rio: ".concat(cadeiraEscritorio.cor));
