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

class Cadeira {
    constructor(
        public cor?: string, public encosto?: string, 
        public assento?: string, public pes?: string
    ){}
}

const cadeiraEscritorio = new Cadeira ('preta', 'estofado',
    'estofado', 'movel')

console.log(`Cor da cadeira de escritório: ${cadeiraEscritorio.cor}`)