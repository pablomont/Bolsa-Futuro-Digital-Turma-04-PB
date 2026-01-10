interface Movel {
    mover(): void
    parar(): void
    velocidade: number;
}

class Cavalo implements Movel {
    mover(): void {
        this.velocidade += 5;
    }
    parar(): void {
        this.velocidade = 0;
    }
    velocidade: number = 0;

}

const cavalo: Movel = {
    mover: function (): void {
        throw new Error("Function not implemented.");
    },
    parar: function (): void {
        throw new Error("Function not implemented.");
    },
    velocidade: 0
}

class Carro implements Movel {
    mover(): void {
        this.velocidade += 15;
    }
    parar(): void {
        this.velocidade = 0;
    }
    velocidade: number = 0;

}