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
function imc(){
  let peso1 = parseFloat(document.getElementById('peso').value);        //kg, usa os valores do input com id peso
  let altura1 = parseFloat(document.getElementById('altura').value);    //metros, usa os valores do input com id altura 
  let resultado = document.getElementById('resultado'); // variavel para armazenar o resultado pelo id resultado
  
  

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
        resultado.textContent = `IMC: ${imc} Classificação: Abaixo do peso` // retorna em texto no site
        break;
    
      case (imc >= 18.5 && imc <= 24.9):
        console.log("IMC:", imc);
        console.log("Classificação: Peso ideal");
        resultado.textContent = `IMC: ${imc} Classificação: Peso ideal` // retorna em texto no site
        break;
    
      case (imc > 24.9):
        console.log("IMC:", imc);
        console.log("Classificação: Acima do peso");
        resultado.textContent = `IMC: ${imc} Classificação: Acima do peso` // retorna em texto no site
        
        break;

      default:
        console.log("Valor de IMC inválido.");
        resultado.textContent = "Valores inválidos"; // retorna em texto no site
    }
  }


  
/*EXERCÍCIO 4 - 50 repetições*/
function exercicio4(){
  console.log("Exercício 4 - for 50 vezes")
  for(var i = 0; i < 50; i++){
    console.log("O valor é ",i+1)
  }
}




/*EXERCÍCIO 5 - Login*/
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

/*EXERCÍCIO 6 - Média Notas*/
function exercicio6(){
  //Declara as variáveis
  let nota;
  let media = 0.0;
  let resultadomedia = document.getElementById('resultadomedia'); // pega o elemento resultado media pelo id para apresenta lo na pagina
  
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
    resultadomedia.textContent = `Aprovado! -- Média ${media}`;
  }else{
    alert(`Reprovado! -- Média ${media}`)
    resultadomedia.textContent = `Reprovado! -- Média ${media}`;
  }
  
}

/*EXERCÍCIO 7 - I/O*/
function exercicio7(){
  //Declara as variáveis e atribui o valor dos inputs da pagina por id
  let nome = document.getElementById('nome').value;
  let idade = document.getElementById('idade').value;
  let curso = document.getElementById('curso').value;
  let ano = document.getElementById('ano').value;
  let resultadoex7 = document.getElementById('resultadoex7')

  //Verifica os valores
  if(nome != "" && idade != 0 && curso != "" && ano != 0){
    //Output da mensagem
    resultadoex7.textContent = `Bem-vindo aluno(a) ${nome} de ${idade} anos, do ${ano}ºano do curso ${curso}`
  }else{
    resultadoex7.textContent = "Válores inválidos!"
  }
}

/*EXERCÍCIO 8 - Manipulações de uma string*/
function exercicio8(){
  let frase = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.";
  let um  = frase.indexOf("em");
  let dois = frase.lastIndexOf("ia");
  let tres = frase.indexOf("ciência");
  let quatro = frase.indexOf("métodos");
  let resultadoex8 = document.getElementById('resultadoex8');
  resultadoex8.textContent = `--> Primeira posição "em": ${um}\n--> Última posição "ia": ${dois}\n--> Ocorrência de "ciência": ${tres}\n--> Ocorrência de "método": ${quatro} `

}

function indextexto() {
  // Declara a frase
  let frase = document.getElementById('textofrase').value;;
  let busca = document.getElementById('chartexto').value;
  let index = frase.indexOf(busca);
  

  let resultadoindex = ""; // Inicializa corretamente como string

  // Gera a linha com underscores até o índice
  for (let i = 0; i < index; i++) {
    resultadoindex += "_";
  }

  resultadoindex += "^"; // Marca a posição

  // Atualiza o conteúdo com <br> para quebra de linha
  let resultadoindextexto = document.getElementById('resultadoindextexto');
  resultadoindextexto.innerHTML = `${frase}<br>${resultadoindex}<br>Index = ${index}`;
}

/*EXERCÍCIO 9 - String var*/
function exercicio9(){
  //Declara a váriavel como uma String vazia
  let variavel = "";
  //Atribui um novo valor da variável como o float dela (Casting)
  variavel = parseFloat(variavel);
  //Retorna o tipo da variável (number)
  alert(`Exercício 9 - String to float\nTipo: ${typeof variavel}`)
  console.log(`Exercício 9 - String to float\nTipo: ${typeof variavel}`)
}


