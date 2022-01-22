    function verificar() {
        var data = new Date()
        var ano = data.getFullYear()
        var mes = data.getMonth()
        var fano1 = window.document.getElementById('txtano')
        var res = window.document.getElementById('res')
        var idade = ano - Number(fano1.value)
        var img = document.createElement('img')
            img.setAttribute('id','foto')
        //window.alert(`Nascimento ${fano} ano atual ${ano}` )
        if (fano1.value.length ==0 || fano1.value > ano) {
            window.alert('[ERRO] Verifique o dados e tente novamente!')
        } 
         else  {
            var fsex = window.document.getElementsByName('radsex')
            var genero = ''
            
            if(fsex[0].checked){
                genero = 'Homem'
                if (idade >= 1 && idade <=3){
                    //bebe    
                    img.setAttribute('src','bebe.png')
                    res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos !`                
                } else if (idade > 3 && idade <= 13 ) {
                    //criança   
                    img.setAttribute('src','criancah.png')
                    res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos !`                   
                } else if (idade > 13 && idade < 18){
                    //adolescente
                    img.setAttribute('src','adolecenteh.png')
                    res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos !`  
                } else if (idade >= 18 && idade <= 50){
                    //adulto
                    img.setAttribute('src','adultoh.png')
                    res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos !`  
                } else if(idade >50) {
                    //idoso
                    img.setAttribute('src','idosoh.png')
                    res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos !`  
                } else if (idade == 0){                  
                    res.innerHTML = `Detectamos <strong>${genero}</strong> com apenas alguns meses !` 
                    img.setAttribute('src','bebe.png')                 
            }
            } else if (fsex[1].checked){
                genero = 'Mulher'
                if (idade >=1 && idade <=3){
                    //bebe 
                    img.setAttribute('src','bebe.png')
                    res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos !`                    
                } else if (idade > 3 && idade <= 13 ) {
                    //criança   
                    img.setAttribute('src','criancam.png')  
                    res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos !`                
                } else if (idade > 13 && idade < 18){
                    //adolescente
                    res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos !`
                    img.setAttribute('src','adolecentem.png') 
                } else if (idade >= 18 && idade <= 50){
                    //adulto
                    res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos !`
                    img.setAttribute('src','adultom.png') 
                } else if (idade >50) {
                    //idoso
                    res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos !`
                    img.setAttribute('src','idosam.png') 
                } else if (idade == 0){                  
                        res.innerHTML = `Detectamos <strong>${genero}</strong> com apenas alguns meses !` 
                        img.setAttribute('src','bebe.png')                 
                }}
            res.style.textAlign= 'center' 
            res.appendChild(img) 
        }
        
        
    }
   