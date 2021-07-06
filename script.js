var tabuada = prompt("entre com um numero para a tabuada")
tabuada = Number(tabuada)
var resposta = ""

for(i=0;i<11;i=i+1){
    p = document.createElement("p")
    p.innerHTML = tabuada +"x" + i + "=" + (tabuada*i) + "\n"
    document.querySelector("#pao").appendChild(p)
}

//alert(resposta)

