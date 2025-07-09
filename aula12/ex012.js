
var agora = new Date()
var hora = agora.getHours()

if (hora <5 ){
    console.log(`Agora são ${hora} horas. Boa madrugada!`)
    } else if (hora < 12 ){
        console.log (`Agora são ${hora} horas. Bom dia!`)
        } else if (hora <18){
            console.log (`Agora são ${hora} horas. Boa Tarde`)
            } else  {
                console.log(`Agora são ${hora} horas. Boa noite!`)
                }    

