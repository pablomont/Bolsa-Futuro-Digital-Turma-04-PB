// class Cadeira {
//     cor?: string;
//     encosto?: boolean;
//     assento?: boolean;
//     pes?: number;
//     rodas?: boolean;
//     constructor(cor?: string, encosto?: boolean, assento?: boolean, pes?: number, rodas?: boolean){
//         this.cor = cor;
//         this.encosto = encosto;
//         this.assento = assento;
//         this.pes = pes;
//         this.rodas = rodas;
//     }
// }
// const cadeiraDeRodinhas = new Cadeira("Rosa", true, true, 4, true)
// // const cadeiraDeRodinhas = new Cadeira();
// // cadeiraDeRodinhas.assento = true;
// // cadeiraDeRodinhas.cor = "Preto"
// // cadeiraDeRodinhas.encosto = true;
// // cadeiraDeRodinhas.pes = 4;
// // cadeiraDeRodinhas.rodas = true;
// console.log("Cadeira de rodinhas:")
// console.log(cadeiraDeRodinhas)

var Cadeira = /** @class */ (function () {
    function Cadeira(cor, encosto, assento, pes) {
        this.cor = cor;
        this.encosto = encosto;
        this.assento = assento;
        this.pes = pes;
    }
    return Cadeira;
}());
var cadeiraDeRodinhas = new Cadeira("rosa", true, "estofado", 6);
console.log(cadeiraDeRodinhas);
