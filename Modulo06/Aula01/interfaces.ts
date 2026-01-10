interface Movel{
    mover(): void
    parar(): void
    velocidade: Number;  
}
class Cavalo implements Movel{
    mover(): void
        this.velocidade+= 5;
    }
    parar(): void
        this.velocidade =0
    {
    velocidade: number = 0;
}

const cavalo: Movel ={
    mover: function (): void {
        throw new Error("Function not implementend");
    }
    parar: function (): void {
        throw new Error("Function not implementend");
    }
