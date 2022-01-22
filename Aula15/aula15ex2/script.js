 function calcular() {
     var N = document.querySelector('input#n1')
     var tab = document.getElementById('sel')
     
     if (N.value.length == 0) {
        window.alert('[ERRO] Digite algum numero')
    } else { 
       var n = Number(N.value)
       tab.innerHTML= ''
       for (let c = 1; c <= 10; c++) {
           var item = document.createElement('option')
           item.text = `${n} x ${c} = ${n*c}`
           tab.appendChild(item)          
       }
    }
     
 }