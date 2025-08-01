function contar(){
   
   var inicio = window.document.getElementById('ini').value
   var fim = window.document.getElementById('fim').value 
   var passo = window.document.getElementById('pas').value
   var resp = window.document.getElementById('res')
    

    if (inicio == 0 ){
        resp.innerHTML= 'não é possível contar!'
    } else if(passo ==0){
        window.alert('Passo inválido! Considerando PASSO 1')
    }

   
}