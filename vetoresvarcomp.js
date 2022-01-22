/*var num = [5,10,15]

for (let c = 0; c <= 10; c++) {
   if (typeof num[c] !== 'undefined' == 0){
  num[c] = c 
 }
 console.log(num[c])
}

let num = [16 ,1 ,2, 12, 3, 18,36,68,1]
num.sort((a , b) => a - b)
console.log(num)*/

let num = [16 ,1 ,2, 12, 3, 18,36,68,1]
num.sort((a , b) => a - b)

 /*for (let pos = 0; pos <  num.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
 }*/

 for(let C  in num ){
   console.log(`A posição ${C} tem o valor ${num[C]}`)
  
 }  var pos = num.indexOf(18)
 if (pos == -1) {
    console.log('valor não encontrado')
 } else {console.log(`o valor ${num[pos]} está na posição ${pos}`) }






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
  var MD = SV / 2  