//variables 
let num1 =1;
let num2 =2;
let num3 =3;
let mayor;
//opercion
if (num1 >= num2 && num1 >= num3){
    mayor = num1;
    
}else if(num2 >= num1 && num2 >= num3){
    mayor = num2;
    
    
}else{  // se resueme porque solo queda una variable en el caso que el mator sea este  
    mayor = num3;
}
console.log("mayor es", mayor);