// class Cadeira {
//     cor? : string
//     encosto? : string
//     assento? : string
//     pes? : string
// }

// /*instanciação*/

/* CTRL K + CTRL C PRA COMENTAR PARAGRAFOS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
/* para compilar- rodar um ts-(converter um arquivo ts em js) coloca no terminal:  npx tsc cadeira.ts!!!!!!!!!!!!!*/

// const cadeiraEscritorio = new Cadeira()
// cadeiraEscritorio.cor = "preta"
// cadeiraEscritorio.assento = "estofado"
// cadeiraEscritorio.encosto = "estofado"
// cadeiraEscritorio.pes = "móvel"

// console.log(`Cadeira de Escritório: ${cadeiraEscritorio}`)

// const cadeiraEscola = new Cadeira()
// cadeiraEscola.cor = "azul"
// cadeiraEscola.assento = "plastico"
// cadeiraEscola.encosto = "plastico"
// cadeiraEscola.pes = "fixo"
// console.log(`Cadeira de Escola: ${cadeiraEscola}`)

/*instanciação com construtor*/

// class Cadira {
//     cor? : string
//     encosto? : string
//     assento? : string
//     pes? : string

//     constructor(cor: string, encosto: string, assento: string, pes: string) {
//         this.cor = cor
//         this.encosto = encosto
//         this.assento = assento
//         this.pes = pes
//     }
// }
// const cadiraEscritorio = new Cadira("preta", "estofado", "estofado", "móvel")
// console.log(`Cadeira de Escritório: ${cadiraEscritorio}`)

/*instanciação contrutor mais enxuto e atual */

class Cadeira {
    constructor(
        public cor?: string, public encosto?: string, 
        public assento?: string, public pes?: string) {}
}
const cadeiraEscola = new Cadeira("azul", "plastico", "plastico", "fixo")
console.log(`cor da Cadeira de Escola: ${cadeiraEscola.cor}`)