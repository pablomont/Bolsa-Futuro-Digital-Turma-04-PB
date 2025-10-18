/*
class Cadeira {
    cor?: string
    encosto?: string
    assento?: string
    pes?: string 

    constructor(cor:string, encosto?:string
        assento?: string, pes?: string
    ) {
        this.cor = cor
        this.encosto = encosto
        this.assento = assento
        this.pes = pes
    }
}

const cadeiraEscritorio = new Cadeira('preta', 'estofado', 'estofado', 'movel')

const cadeiraEscritorio = new Cadeira()
cadeiraEscritoiro.cor = 'preta'
cadeiraEscritoiro.assento ='estofado'
cadeiraEscritoiro.encosto = 'enscosto'
cadeiraEscritoiro.pes = 'novel'

const cadeiraEscritorio = new Cadeira('preta', 'estofado', 'estofado', 'movel')

cadeiraEscritorio.

console.log(`cor cadeira de escritorio: ${cadeiraEscritorio}`)
*/

class Cadeira {
    constructor(
    public cor?: string, encosto?: string,
    assento?: string, pes?: string
    ){}
}

const cadeiraEscritorio = new Cadeira('preta', 'estofado', 'estofado', 'movel')

console.log(`cor da cadeira de escritorio: ${cadeiraEscritorio.cor}`)
