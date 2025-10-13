function somar (a: number, b:number) {
    return a+b;
}

somar('10", "10");
    
    const nintendo = {
        preco:'2000',
        novo:"Wii"
    };

    function trasformarPreco (produto: {nome: string; preco: string}): {
        produto.preco = 'R$' + produto.preco;
        return produto;
    }

    const produtoNovo = transformarPreco (nintendo);
    console.log(produtoNovo);
    }