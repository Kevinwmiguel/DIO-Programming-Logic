
for (let i = 0; i < 3; i++)
{
    let nome = prompt("Nome do seu heroi: ");
    let lvl = prompt("Dejesa saber a classificação do seu personagem?: Y/N");
    if (lvl == "N" || lvl == "n")
        break;
    let cl;
    let xp = parseInt(prompt("Informe a quantidade de XP: "));
    switch (true)
    {
        case xp <= 1000:
            cl = 'Ferro'
            console.log(cl);
            break;
        case xp >= 1001 && xp <= 2000:
            cl = 'Bronze'
            console.log(cl);
            break;
        case xp >= 2001 && xp <= 5000:
            cl = 'Prata'
            console.log(cl);
            break;
        case xp >= 5001 && xp <= 7000:
            cl = 'Ouro'
            console.log(cl);
            break;
        case xp >= 7001 && xp <= 8000:
            cl = 'Platina'
            console.log(cl);
            break;
        case xp >= 8001 && xp <= 9000:
            cl = 'Ascendente'
            console.log(cl);
            break;
        case xp >= 9001 && xp <= 10000:
            cl = 'Imortal'
            console.log(cl);
            break;
        case xp >= 10001:
            cl = 'Radiante'
            console.log(cl);
            break;
        default:
            cl = "Tadim"
            break;
        
       
    }
    console.log(`o Herói de nome ${nome} está no nível de ${cl}`);
    let cont = prompt("Quer continuar?: ");
    if (cont == 'N' || cont == 'n')
        break;
}

