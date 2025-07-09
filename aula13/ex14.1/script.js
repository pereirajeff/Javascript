function horas(){
    var res = window.document.getElementById('res')
    var hora = new Date()
    var hrs =  hora.getHours()

    if (hrs < 12){
        res = res.innerHTML = `Agora são ${hrs} horas. bom dia!`
        imagem.src = ("manha.jpg")
        document.body.style.background = ("#9d9000")


    } else if (hrs < 18){
        res = res.innerHTML = `Agora são ${hrs} horas. Boa tarde`
        imagem.src = ("tarde.jpg")
        document.body.style.background = ("#488cb5")
    } else {
       res = res.innerHTML = `Agora são ${hrs} horas. Boa noite`
        imagem.src = ("noite.jpg")
        document.body.style.background = ("#0c172a") 
    }
    

}