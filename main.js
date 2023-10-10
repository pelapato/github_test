//FUN;OES DE CHAMENTO DE TAG HTML
let caixa=document.getElementById("contador")
let v1=document.getElementById("digito-1")
let v2=document.getElementById("digito-2")
let v3=document.getElementById("digito-3")
let v4=document.getElementById("digito-4")
let v5=document.getElementById("digito-5")
let v6=document.getElementById("digito-6")
let v7 = document.getElementById("digito-7")
let v8 = document.getElementById("digito-8")
let v9 = document.getElementById("digito-9")
let v10 = document.getElementById("digito-10")
let v11 = document.getElementById("digito-11")
let v12 = document.getElementById("digito-12")
let v13 = document.getElementById("digito-13")
let v14 = document.getElementById("digito-14")
let v15 = document.getElementById("digito-15")
let v16 = document.getElementById("digito-16")
let v17 = document.getElementById("digito-17")
let v18 = document.getElementById("digito-18")
let apagar=document.getElementById("apagar")
let corTema=document.getElementById("scrool-ball-enter")
let contFirm=0

//CONJUNTO DE COLLECTIONHTML
var valoresArray=[v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16,v17,v18]
valoresArray=[...valoresArray]
//OPERANDO ELEMENTOS OTIMIZADO HTML
valoresArray.map((el,i,valoresArray)=>{
  console.log(el.id)
  
  function system(){
    if(el.id=="digito-5"){
      console.log("ID")
    }
  }
  //apagar
  function limpar() {
    caixa.value=null
    console.log("apagou")
  }
  
  apagar.addEventListener("click", limpar)
  el.addEventListener("click",system)
})
//op;ao de rolagem
function color(){
  corTema.classList.toggle("rolagem")
}

corTema.addEventListener("click",color)