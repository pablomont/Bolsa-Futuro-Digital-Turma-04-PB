//class Cadeira {
//  cor?: string
// encosto?: string
//  assento?: string
//  pes?: string
//}
//const cadeiraEscritorio = new Cadeira()
//cadeiraEscritorio.cor = 'preta'
//cadeiraEscritorio.assento = 'estofado'
//cadeiraEscritorio.encosto = 'estofado'
//cadeiraEscritorio.pes = 'movel'
//console.log(`Cadeira de escritório: ${cadeiraEscritorio}`)
//const cadeiraEscola = new Cadeira()
//cadeiraEscola.cor = 'azul'
//cadeiraEscola.assento = 'madeira'
//cadeiraEscola.encosto = 'madeira'
//cadeiraEscola.pes = 'fixo'
//console.log(`Cadeira de Escola: ${cadeiraEscola} `)
// class Cadeira {
//     cor?: string
//     encosto?: string
//     assento?: string
//     pes?: string
//     constructor(cor?: string, encosto?: string, 
//         assento?: string, pes?: string
//     ) {
//         this.cor = cor
//         this.encosto = encosto
//         this.assento = assento
//         this.pes = pes
//     }
// }
// const cadeiraEscritorio = new Cadeira('preta', 'estofado', 'estofado', 'movel')
var Cadeira = /** @class */ (function () {
    function Cadeira(cor, encosto, assento, pes) {
        this.cor = cor;
        this.encosto = encosto;
        this.assento = assento;
        this.pes = pes;
    }
    return Cadeira;
}());
var cadeiraEscritorio = new Cadeira('preta', 'estofado', 'estofado', 'movel');
console.log("Cor da cadeira de escrit\u00F3rio: ".concat(cadeiraEscritorio.cor));
