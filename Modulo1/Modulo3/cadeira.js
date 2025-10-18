var Cadeira = /** @class */ (function () {
    function Cadeira() {
    }
    return Cadeira;
}());
var cadeiraEscritorio = new Cadeira();
cadeiraEscritorio.cor = 'preta';
cadeiraEscritorio.acento = 'estofado';
cadeiraEscritorio.encosto = 'estofado';
cadeiraEscritorio.pes = 'movel';
console.log("cadeira de escrit\u00F3rio: ".concat(cadeiraEscritorio));
var cadeiraEscolar = new cadeira();
cadeiraEscolar.cor = 'azul';
cadeiraEscolar.acento = 'estofado';
cadeiraEscolar.encosto = 'estofado';
cadeiraEscolar.pes = 'fixo';
console.log("cadeira escola: ".concat(cadeiraEscolar));
var Cadeira = /** @class */ (function () {
    function Cadeira(cor, encosto, assendo, pes) {
        this.cadeiraEscritorio = new Cadeira('preta', 'estofado', 'estofado', 'movel');
        this.cor = cor;
        this.encosto = encosto;
        this.assento = assento;
        this.pes = pes;
    }
    return Cadeira;
}());
var Cadeira = /** @class */ (function () {
    function Cadeira(cor, encosto, assendo, pes) {
        this.cor = cor;
        this.assendo = assendo;
    }
    return Cadeira;
}());
var cadeiraEscritorio = new Cadeira('preta', 'estofado', 'estofado', 'movel');
