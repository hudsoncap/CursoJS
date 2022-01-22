     function carregar() {
        var msg = document.querySelector("div#msg")
        var img = document.getElementById('imagem')
        var data = new Date()
        var hora = data.getHours()
        //var hora = 13
        var min = data.getMinutes()
        msg.innerHTML = ` Hora atual ${hora}: ${min}`
        if (hora >= 0 && hora < 12 ){
            img.src = 'tarde.png' 
            document.body.style.background= "#c1d7e2"
        } else if (hora >= 12 && hora < 18){
            img.src = 'manha.png'
            document.body.style.background = "#d67079"
        } else {
            img.src = 'noite.png'
            document.body.style.background = "#776199"
        }
     }
          
   