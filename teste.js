/*let list = []

 list.push(1)
 list.push(1)
 list.push(1)
 list.push(1)
 list.push(1)
 list.push(1)
 list.push(1)

  for (var c = 1 ;c <= list.length; c++){
     }
      console.log (`total de numeros digitados ${list.length}`)
      console.log(list)
       



      function finalizar() {
         res.innerHTML += `total de numeros ${list.length}`
         res.innerHTML = `Maior numero digitado ${MaiorN}`
         res.innerHTML = `Menor numero digitado ${MenorN}`
         res.innerHTML = `soma de valores digitados ${SV}`
         res.innerHTML = `Media de valores digitados ${MD}`
      
      
          }
      
          for(var c = 1; c <= list.length; c++ ){
            list[c] += list[c]
            var SV = SV + list[c] 
            if (list[c-1] < list[c] ){
              var  MaiorN = list[c]
            } else if (list[c-1] > list[c]){
              var   MenorN = list[c]
            }
            
        }  
        var MD = SV / 2  */

   

       /* if (num.value.length ==0 || NUM > 100 || NUM <= 0 ){
          alert('Valor invalido ou nulo')
      } else if (NUM >= 1 && NUM <= 100){
          var L = document.createElement('option')
          L.text = `Valor ${NUM} Adicionado`
          sel.appendChild(L)  
          list.push(NUM)                                                                 
      } 
       res.innerHTML = `${list}`*/
   

       let SomaV = 0
       let MDN = 0
       let maiorN = 0
       let menorN = 0
       let vetores = [1,2,3,4,5,6]

       for (let c = 0 ;c < vetores.length; c++){
           SomaV += vetores[c]
           if (vetores[c] >= maiorN ){
               maiorN = vetores[c]
           }  
            if (vetores[c] < menorN || menorN == 0){
              menorN = vetores[c]
           }
           
       }
       MDN = SomaV / 2
       console.log += `<p>Soma dos valores digitados: ${SomaV}</p>`
       console.log += `<p>Media dos Valores digitados: ${MDN}</p>`