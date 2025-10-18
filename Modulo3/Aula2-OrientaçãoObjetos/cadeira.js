/*class Cadeira {
    cor?: string;
    encosto?: string;
    assento?: string;
    pes?: string;

    constructor(cor?: string, encosto?: string, assento?: string, pes?: string) {
        this.cor = cor;
        this.encosto = encosto;
        this.assento = assento;
        this.pes = pes;
    }
}

const cadeiraEscola = new Cadeira('preta', 'estofado', 'estofado', 'fixos');

console.log(`cadeira Escola: ${(cadeiraEscola)}`);*/
var Cadeira = /** @class */ (function () {
    function Cadeira(cor, encosto, assento, pes) {
        this.cor = cor;
        this.encosto = encosto;
        this.assento = assento;
        this.pes = pes;
    }
    return Cadeira;
}());
var cadeiraEscola = new Cadeira('azul', 'estofado', 'estofado', 'fixos');
console.log("cor da cadeira escola: ".concat(cadeiraEscola.cor));
