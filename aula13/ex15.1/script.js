function teste(){   

   var n = window.document.getElementById('numero')
    var res = window.document.getElementById('res')
    var n = Number(n.value)
    
    
    if(n <=0 || n > 2025){

      window.alert('erro')

    } else{

      var sex = window.document.getElementsByName('radsex')
      var genero = ''
      var idade = 2025 - n
      var img = document.createElement('img')
      img.setAttribute('id','foto') 

      if (sex[0].checked){
         var genero = 'Masculino'

         if (idade >=0 && idade <10){
            img.setAttribute('src','bebemenino.jpg')
            document.body.style.background = '#dbcbbd'
         }else if (idade < 21) {
            img.setAttribute('src','jovemhomem1.jpg')
         } else if( idade < 50){
             img.setAttribute('src','homem.jpg')
              document.body.style.background = 'red'
         } else {
            img.setAttribute('src','velho.jpg')
         }

      } else if(sex[1].checked){
         var genero = 'Feminino'
         if (idade >=0 && idade <10){
            img.setAttribute('src','bebemenina.jpg')

         } else if (idade <21){
            img.setAttribute('src','jovemmulher.jpg')

         } else if(idade <50){
            img.setAttribute('src','mulher.jpg')
         }
         else{
            img.setAttribute('src','velha.jpg')
         }
      }

        res.innerHTML = `Genero ${genero}.Você tem ${idade} anos.`
        
         res.appendChild(img)
      
    } 
    
   
   
   
    }
    

