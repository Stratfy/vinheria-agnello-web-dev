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

/*EXERCÍCIO 3*/
//Exemplo
let peso1 = 70;        //kg
let altura1 = 1.75;    //metros

//Fórmula do IMC
let imc = Math.round((peso1 / (altura1 * altura1)) * 100) / 100;    /*foi necessário a utilização do 
                                                                    método Math.round para arredondar 
                                                                    até 2 casas decimais, sem ele ficaria, 
                                                                    22.857142857142858*/
//Verificação do índice de massa corporal (IMC)
switch (true){
    case (imc < 18.5):  
      console.log("IMC:", imc);
      console.log("Classificação: Abaixo do peso");
      break;
  
    case (imc >= 18.5 && imc <= 24.9):
      console.log("IMC:", imc);
      console.log("Classificação: Peso ideal");
      break;
  
    case (imc > 24.9):
      console.log("IMC:", imc);
      console.log("Classificação: Acima do peso");
      break;
  
    default:
      console.log("Valor de IMC inválido.");
  }


// Exercício 4 - 50 repetições
function exercicio4(){
  console.log("Exercício 4 - for 50 vezes")
  for(var i = 0; i < 50; i++){
    console.log("O valor é ",i+1)
  }
}

//Exercício 5 - Login
function exercicio5(){
 //Declara as variáveis que serão usadas
  let usuario, senha;
  alert("Exercício 5 - Login")
  //Atribui valores as variáveis por input do usuário
  usuario = prompt("Digite o nome de usúario");
  senha = prompt("Digite a senha");
  //Verifica os valores adicionados
  if(usuario == "admin" && senha == 1234 ){
    alert("Usuário Autenticado")
  }else{
    alert("Falha na Autenticação")
  }
}

//Exercício 6 - Média Notas
function exercicio6(){
  //Declara as variáveis
  let nota;
  let media = 0.0;
  
  alert("Exercício 6 - Média: Escreva 7 notas para obter sua média")
  
  //Laço para atribuir as notas e as somar na média
  for(var i = 0; i < 7;i++){
    nota = parseFloat(prompt(`Escreva a Nota ${i+1}`))
    media = media + nota;

  }
  //Calcula a média e arrendonda o valor 
  media = Math.round(media/7);
 
  //Julga a média e retorna a a aprovação
  if(media >= 6){
    alert(`Aprovado! -- Média ${media}`)
  }else{
    alert(`Reprovado! -- Média ${media}`)
  }
  
}

//Executa os exercícios, já que foram feitos como funções
exercicio4();
exercicio5();
exercicio6();

