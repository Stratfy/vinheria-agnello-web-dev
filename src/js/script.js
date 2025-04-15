/*EXERCÍCIO 1*/
//Declarando um variável com valor undefined 
let nome;
console.log(nome);               //saída: undefined

//Declarando uma variável com valor vazio
let grupo = "";
console.log(grupo);             //saída: (string vazia, nada aparece)

//Declarando uma variável com valor em JavaScript
let quantidade = 5;
console.log(quantidade);       //saída: 5

/*EXERCÍCIO 2*/
//Operador != compara se dois valores são diferentes, sem considerar o tipo
let x = 5;
let y = 10;
let z = "15";
console.log(x != y);            //saída de um valor booleano: true - 5 é diferente de 10 

let x1 = 2;
let y2 = 2;
console.log(x1 != y2);          //sáida: false 

//Operador == compara se dois valores são iguais, sem considerar o tipo 
let a = 20;
let b = "20";
console.log(a == b );          //saída: true 

let a1 = 30;
let b1 = 31;
console.log(a1 == b1);         //saída: false

//Operdaor >= verifica se o valor é maior ou igual 
let num1 = 32;
let num2 = 69;
let num3 = 69;
console.log(num1 >= num2);        //saída: false
console.log(num2 >= num1);        //saída: true
console.log(num2 >= num3);        //saída: true - pois o num2 é igual ao num3