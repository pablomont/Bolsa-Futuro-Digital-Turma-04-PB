function normalizarTexto(texto: string){
    return texto.trim().toLowerCase()
}

const text = '                    Suelle Maciel    '
console.log(text)
console.log(normalizarTexto(text))