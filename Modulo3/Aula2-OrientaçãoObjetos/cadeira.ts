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

class Cadeira {
    constructor(
        public cor?: string, public encosto?:string, 
        public assento?:string, public pes?: string
    ){}
       
}

const cadeiraEscola = new Cadeira('azul','estofado','estofado','fixos')
console.log(`cor da cadeira escola: ${cadeiraEscola.cor}`)