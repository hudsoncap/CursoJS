const produtos= [
    { nome: "nootbook",
        preco: 2100}, 
    { nome: "celular",
        preco: 400}, 
]                   
const total   = produtos.map(p => p.preco * 4).reduce((a,b) => a+b,0)
console.log(total)  