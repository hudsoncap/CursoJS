   /*function parouimpar(n) {
        if (n %2==0) {
            return 'PAR'
        }  else {
            return 'IMPAR'
        } 
   }
    
   let num = 11
   let res = parouimpar(num)
    console.log(`o numero ${num} é ${res}`)



    let V = function(x){
      return x*2 }
     
     console.log(V(25))

     function fatorial(x){
       var res = 0
       var t = 0
       var y =0
       for(var c = x-1 ; c >= 1 ; c-- ){
           y = c
           res = y * x
           t = res
           x = t          
       } return x
     }

     let fat = fatorial(9)
     console.log(`${fat}`)*/

     function fatorial(x){
        var fat = 1
        for (var c = x ;c > 1; c-- ){
            fat *= c
        }
        return fat
     }
     let num = 5
     let Rfat = fatorial(num)
     
     console.log(`fatorial de ${num} é ${Rfat}`)