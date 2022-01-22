 function contar() {
    var i =  document.querySelector('input#in')
    var f = document.querySelector('input#fm')
    var p =  document.querySelector('input#pss')
    var res = document.getElementById('resp')
    var I = Number(i.value)
    var F = Number(f.value)
    var P = Number(p.value)
    if (i.value.length ==0  || f.value.length == 0 || p.value.length == 0) {
          window.alert("[ERRO] Campos vazios")
      } else if (P == 0 && I < F ){
           window.alert("[ERRO] Passo = 0, sera substituido por 1")
           P=1 
           res.innerHTML= ''  
          for ( c = I ; c <= F ; c += P ){
            res.innerHTML += `${c} \u{1F449}` 
         }  
      } else if (P==0 && I > F) {
         window.alert("[ERRO] Passo = 0, sera substituido por 1")
         P=1
         res.innerHTML= ''  
         for ( c = I ; c >= F ; c -= P ){
            res.innerHTML += `${c} \u{1F449}`  
       }
      } else if (I < F){
         res.innerHTML= ''  
         for ( c = I ; c <= F ; c += P ){
          res.innerHTML += `${c} \u{1F449}` 
      } 
       } else if (I > F){
         res.innerHTML= ''  
         for ( c = I ; c >= F ; c -= P ){
            res.innerHTML += `${c} \u{1F449}` 
       }       
    }  res.innerHTML += ` \u{1F3F4}` 
      
   }