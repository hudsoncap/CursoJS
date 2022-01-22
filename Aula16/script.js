      var num  = document.getElementById('val')
      var list = document.getElementById('listn')
      let res = document.getElementById('res')
      let res2 = document.getElementById('res2')
      let lista = []
      let conta = document.getElementById('nome')
      let senha = document.getElementById('senha')
    
    function isNumero(n) {
        if (Number(n) >= 1 && Number(n) <= 1000) {
            return true
        } else {
            return false
        }
    } 

    function inLista(n,l) {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    } 
  
   
   function adicionar(){
       if (isNumero(num.value) && !inLista(num.value,lista) ){
           var NUM = Number(num.value)
           var L = document.createElement('option')
           L.text = `Valor ${NUM} Adicionado`
           list.appendChild(L)  
            lista.push(NUM)
            res.innerHTML =''
       }  else {
           window.alert('valor invalido ou ja adicionado na lista')
       } 
       num.value= ''
       num.focus()  
    } 

    function finalizar(){
        if (lista.length == 0){
            window.alert('Caixa Vazia, adicione algum numero.')
        } else {
        res.innerHTML = ''
        let SomaV = 0
        let MDN = 0
        let maiorN = lista[0]
        let menorN = lista[0]
        for (let c = 0 ;c < lista.length; c++){
            SomaV += lista[c] 
            if (maiorN < lista[c]){
                maiorN = lista[c]
            } 
            if (menorN > lista[c]){
                menorN = lista[c]
            }         
        }
        MDN = SomaV / lista.length
        res.innerHTML += `<p>Soma dos valores digitados: ${SomaV}</p>`
        res.innerHTML += `<p>Media dos Valores digitados: ${MDN}</p>`
        res.innerHTML += `<p>Menor valor digitado: ${menorN}</p>`
        res.innerHTML += `<p>Maior valor digitado: ${maiorN}</p>`
        res.innerHTML += `<p>Quantidade de Valores Registrados: ${lista.length}</p>`
    }
    }

     function verificando(c) {
        if (c.value.length == 0){
            return true
        } else {
           return false
     } 
     }
    
      function verificandosenha(s){
            if (s.value.length == 0 ){
                return true
            } else {
                return false
            }
      }

    
    
    function confirmar() {           
           if (verificando(conta) || verificandosenha(senha)){
               alert('Digite uma Conta ou senha Valida')
           } else {
           res2.innerHTML = (`Olá, ${conta.value.toLowerCase()}</br>`)
           res2.innerHTML+= (`Conectado com <strong>Sucesso</strong>`)
        } 
        conta.value= ''
        conta.focus()
        senha.value= ''
        senha.focus()    
    }

    
   