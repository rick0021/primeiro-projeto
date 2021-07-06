var tabuada = prompt("entre com um numero para a tabuada")
tabuada = Number(tabuada)
var resposta = ""

for(i=0;i<11;i=i+1){
    resposta = resposta + tabuada +"x" + i + "=" + (tabuada*i) + " "
}

alert(resposta)