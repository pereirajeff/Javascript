function horas(){

    var txt = window.document.getElementById('texto')
    var hora = new Date()
    hrs =  hora.getHours()  
   
    
    if (hrs < 12){
        window.document.getElementById('imagem')
        imagem.src = 'manha.jpg' 
        document.body.style.background = '#fbdf64'
        txt.innerText = `Agora são ${hrs} horas. Bom dia!`
       
    } else if(hrs <= 18){
        window.document.getElementById('imagem')
        imagem.src = 'tarde.jpg' 
        document.body.style.background = '#096e97'
        txt.innerText = `Agora são ${hrs} } horas. Boa tarde!`

    } else {
        window.document.getElementById('imagem')
        imagem.src = 'noite.jpg' 
        document.body.style.background = '#08070c'
        txt.innerText = `Agora são ${hrs} horas. Boa noite!`
    }




}