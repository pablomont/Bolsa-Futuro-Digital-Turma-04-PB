interface Movel {
    mover(): void;
    parar(): void;
    velocidade: number;
}

const Cavalo: Movel{
    mover(): void{
        this.velocidade += 5;
    }
    parar(): void{
        this.velocidade += 0;
    }
    velocidade: number = 0;
}

class Carro implements Movel{
    mover(): void{
        this.velocidade += 15;
    }
    parar(): void{
        this.velocidade = 0;
    }
    velocidade: number = 0;
}

// class Smartv implements Televisor, PlayerVideo{
//     //deve implementar os contratos das duas interfaces
// }

interface Ponto{
    x: number;
    y: number;
}

// Em Java, isso falharia  por não dizer "implements Ponto"
// const meuPonto: {x: 10, y: 20}