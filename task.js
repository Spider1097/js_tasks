
/////////////practic 1///////////////////////

// let button=document.getElementById("finish");

// button.addEventListener('click', checkTest);

// function checkTest(){
//     let result=0;

//     let a1=document.getElementById("q1").value;
//     let a2=document.getElementById("q2").value;
//     let a3=document.getElementById("q3").value;
//     let a4=document.getElementById("q4").value;
//     let a5=document.getElementById("q5").value;

//     if(a1==="4"){
//         result+=1;
//     }

//     if(a2==="5"){
//         result+=1;
//     }

//     if(a3==="6"){
//         result+=1;
//     }

//     if(a4==="1"){
//         result+=1;
//     }

//     if(a5==="2"){
//         result+=1;
//     }

//     alert(result);
// }

/////////////practic 1///////////////////////

/////////////practic 2///////////////////////

// let valeuInput=document.getElementById("js_input_value");
// let currencyInput=document.getElementById("js_currency_selector");
// let outputNode=document.getElementById("js_output");

// valeuInput.addEventListener('input', function(){
//     let rub=Number(valeuInput.value);
//     currency=currencyInput.value;
//     let result = conver(rub,currency);
//     outputNode.innerHTML= result;
// });

// currencyInput.addEventListener('change', function(){
//     let rub=Number(valeuInput.value);
//     currency=currencyInput.value;
//     let result = conver(rub,currency);
//     outputNode.innerHTML= result;
// });

// const RATES = {
//     usd:0.014,
//     eur:0.013
// }

// function conver(rub,currency){

//     if(!RATES[currency]){
//         return null;
//     }

//     return rub*RATES[currency];

// }

/////////////practic 2///////////////////////

/////////////practic 3///////////////////////

// let first_number=document.getElementById("first_number");
// let second_number=document.getElementById("second_number");
// let symbol=document.getElementById("js_currency_selector")
// let button=document.getElementById("finish");
// let output=document.getElementById("js_output");

// button.addEventListener('click', function(){
//     let result=0;
//     result=calkulation(first_number.value,second_number.value,symbol.value);
//     output.innerHTML=result;
// });

// symbol.addEventListener('change', function(){
//     let result=0;
//     result=calkulation(first_number.value,second_number.value,symbol.value);
//     output.innerHTML=result;
// });

// function calkulation(num1, num2, symbol){

//     if(Number(num2)===0){
//         return 0;
//     }

//     switch(symbol){
//         case "+":
//             return Number(num1)+Number(num2);
//             break;
//         case "-":
//             return Number(num1)-Number(num2);
//             break;
//         case "*":
//             return Number(num1)*Number(num2);
//             break;
//         case "/":
//             return Number(num1)/Number(num2);
//             break;
//     }

// }

/////////////practic 3///////////////////////


// function sortt(arry){ return arry.sort(function(a, b){return a - b});}

// input=[4,6,2,3,7,8,1,9,0];

// console.log(sortt(input));





