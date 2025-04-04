let idade = 88;
switch (true) {
    case idade >= 0 && idade <= 12:
        console.log("Criança 🍼");
        break;
    case idade >= 13 && idade <= 17:
        console.log("Adolescente 😎");
        break;
    case idade >= 18 && idade <= 59:
        console.log("Adulto 💼");
        default:
        console.log("Idoso 👴");
};