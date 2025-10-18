// class Cadeira{
//     cor?: string
//     encosto?: string
//     acento?: string
//     pes?: string
// }
// const cadeiraEscritorio = new Cadeira()
// cadeiraEscritorio.cor = 'preta'
// cadeiraEscritorio.acento = 'estofado'
// cadeiraEscritorio.encosto = 'estofado'
// cadeiraEscritorio.pes = 'movel'

// console.log(`cadeira de escritório: ${cadeiraEscritorio}`)

// const cadeiraEscolar = new cadeira()
// cadeiraEscolar.cor = 'azul'
// cadeiraEscolar.acento = 'estofado'
// cadeiraEscolar.encosto = 'estofado'
// cadeiraEscolar.pes = 'fixo'

// console.log(`cadeira escola: ${cadeiraEscolar}`)

// class Cadeira {
//     concor?: string
//     encosto?: string
//     acento?: string
//     pes?: string

// constructor(cor?: string, encosto?: string;
//     assendo?: string, pes?: string)
//  {
//   this.cor = cor
//   this.encosto = encosto
//   this.assento = assento
//   this.pes = pes
// }

// const cadeiraEscritorio = new Cadeira('preta','estofado','estofado','movel')

class Cadeira {
    constructor(
        public cor?: string, public encosto?:string, 
        public assendo?:string, public pes?:string
){}     
    
}
 const cadeiraEscritorio = new Cadeira('preta','estofado',
    'estofado','movel')

console.log(`Cor da cadeira de escritório: ${cadeiraEscritorio.cor}`)