function calcular() {
var alt=(document.getElementById("altura").value)/100;
var pes=document.getElementById("peso").value;
var imc = pes / alt**2;
var res=""
if (imc <18.5){
   res= "voce esta magrelo"
}else if (imc<24.9){
    res= "parabens voce esta em forma "
}else if (imc<29.9){
    res= "voce esta um pouco acima do peso"
}else if (imc<39.9){
    res = "voce esta com obesidade "
}else if (imc>39.9){
    res = "voce esta com obesidade morbida"
}
document.getElementById("resultado").innerHTML= res
}