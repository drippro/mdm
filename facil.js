
var sortead = ["1243","1234","1324","1342","1423","1432","2134","2143","2314","2341","2431","2413","3124","3142","3214","3241","3421","3412","4132","4123","4213","4231","4321","4312"];//vetor com todos a possibilidades
var numb = Math.floor(Math.random() * sortead.length);//math floor arrdonda o numero sorteado,que escolhe alguma das possibilidades
var numbT = sortead[numb]//armazena ela dentro de uma var

    var lugar1 = numbT.indexOf("1");
    var lugar2 = numbT.indexOf("2");
    var lugar3 = numbT.indexOf("3");
    var lugar4 = numbT.indexOf("4");
    //indexOf percorre a string da possibilidade sorteada
    console.log(numbT)
    
    
function resetarnumero(){

    location.reload()
   
} 
function game(){
    const res = document.getElementById("inapst").value 
    const res2 = document.getElementById("inapst").value
    const res3 = document.getElementById("inapst").value
    const res4 = document.getElementById("inapst").value
    var psc1 = res.indexOf("1");
    var psc2 = res2.indexOf("2");
    var psc3 = res3.indexOf("3");
    var psc4 = res4.indexOf("4");

    if(res4.length == "5" || res4.length == "6" ||res4.length == "7" ||res4.length == "8" || res4.length == "9"|| res4.length == "0"){
        alert("Erro, use apenas os numeros = 1,2,3,4")
        
    const ans1 = document.getElementById("answ1").innerHTML = " "
    const ans2 = document.getElementById("answ2").innerHTML = " "
    const ans3 = document.getElementById("answ3").innerHTML = " "
    const ans4 = document.getElementById("answ4").innerHTML = " "
    const res = document.getElementById("inapst").value = " "
    }


    //indexOf percorre a string da tentativa colocada no input
    if(psc1 == lugar1){
        var rsp = document.getElementById("answ1").innerHTML = "Number 1 Correct✔️"
    }
    if(psc2 == lugar2){
        var rsp = document.getElementById("answ2").innerHTML = "Number 2 Correct✔️"
    }
    if(psc3 == lugar3){
        var rsp = document.getElementById("answ3").innerHTML = "Number 3 Correct✔️"
    }
    if(psc4 == lugar4){
        var rsp = document.getElementById("answ4").innerHTML = "Number 4 Correct✔️"
    }
    if (psc1 != lugar1 && psc2 != lugar2 && psc3 != lugar3 && psc4 != lugar4) {
    alert("Errou tente novamente!")
    
}//os if ve se a posicao da possibilidade sorteada é igual da resposta
  
    
}   


