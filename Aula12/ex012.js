var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
  console.log(`agora são exatamente ${hora}:${minutos} `)
  if (hora < 12.00){
      console.log('BOM DIA')
  } else if (hora <= 18.00){
      console.log("BOA TARDE")
  } else if (hora > 18.00) {
      console.log("BOA NOITE")
  }