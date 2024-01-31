let dia = "martes"
switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Hoy no es finde")
    break;
    case "sabado":
    case "domingo":
        console.log("hoy esa finde!!")
    break;
}