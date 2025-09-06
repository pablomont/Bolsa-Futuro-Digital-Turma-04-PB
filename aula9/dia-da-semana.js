var diaDaSemana = "15"
switch(diaDaSemana) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
        console.log("Dia útil")
        break;
    case "6":
    case "7":
        console.log("Final de Semana")
        break;
    default:
        console.log("Feriado")
}