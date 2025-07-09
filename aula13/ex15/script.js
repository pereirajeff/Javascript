function calc(){
    var data = new Date()
    var ano = data.getFullYear()
    var ida = window.document.getElementById('idade')
    var resp = document.getElementById('res')
    

   
    if (ida.value.length == 0 || ida.value > ano){
        window.alert('Tente novamente')
    } else  {
        var fsex = document.getElementsByName('radsex')
        var faixa =  ano - Number(ida.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (faixa >=0 && faixa <10){
                // crianca
                img.setAttribute('src','bebemenino.jpg')
            }else if(faixa < 21){
                //jovem
                img.setAttribute('src','jovemhomem1.jpg')
            }else if (faixa <50){
                //adulto 
                img.setAttribute('src','homem.jpg')
            } else{
                //velho
                img.setAttribute('src','velho.jpg')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
             if (faixa >=0 && faixa <10){
                // crianca
                img.setAttribute('src','bebemenina.jpg')
            }else if(faixa < 21){
                //jovem
                img.setAttribute('src','jovemmulher.jpg')
            }else if (faixa <50){
                //adulto 
                img.setAttribute('src','mulher.jpg')
            } else{
                //velho
                img.setAttribute('src','velha.jpg')
            }

            }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${faixa} anos`
        res.appendChild(img)
    }


        }