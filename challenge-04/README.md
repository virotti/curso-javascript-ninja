# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
> var isTruthy = function(param) {
... return param ? true : false;
... };
undefined
> isTruthy()
false

OU

> var isTruthy = function(param) {
... return !!param;
... };
undefined
> isTruthy()
false


// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
> isTruthy(0)
false
> isTruthy(-0)
false
> isTruthy('')
false
> isTruthy(false)
false
> isTruthy(NaN)
false
> isTruthy(null)
false
> isTruthy()
false

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
> isTruthy(1)
true
> isTruthy('casa')
true
> isTruthy(true)
true
> isTruthy({})
true
> isTruthy([])
true
> isTruthy(function() {})
true
> isTruthy('casal')
true
> isTruthy('eu')
true
> isTruthy(9 * 9)
true
> isTruthy(10 + 10)
true

/*
Declare uma variável chamada `carro`, atribuindo a ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
> var carro = {
      marca: 'Ford',
      modelo: 'Ka',
      placa: 'BRA-977',
      ano: '1977',
      cor: 'verde',
      quantasPortas: 4,
      assentos: 5,
      quantidadePessoas: 0};
undefined
> carro
{
  marca: 'Ford',
  modelo: 'Ka',
  placa: 'BRA-977',
  ano: '1977',
  cor: 'verde',
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
> carro.mudarCor = function(cor) {
...carro.cor = cor;
... };


/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
> carro.obterCor = function() {
...return carro.cor;
... };

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
> carro.obterModelo = function() {
...return carro.modelo;
... };

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
> carro.obterMarca = function() {
...return carro.marca;
... };

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
> carro.obterMarcaModelo = function() {
... return 'Este carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo();
... };
[Function (anonymous)]
> carro.obterMarcaModelo()
'Este carro é um Ford Ka'

/*
Crie um método que irá adicionar pessoas ao carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

> carro.adicionarPessoas = function( numeroPessoas ) {
    var totalPessoas = carro.quantidadePessoas + numeroPessoas;
    if ( carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos ) {
       return 'O carro já está lotado!';
       }
    if (totalPessoas > carro.assento) {
       var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
       var pessoaSingular = quantasPessoasCabem === 1 ? ' pessoa ' : ' pessoas ';
       var cabeSingular = quantasPessoasCabem === 1 ? ' cabe ' : ' cabem ';
       return 'Só ' + cabeSingular + ' mais ' + quantasPessoasCabem + ' ' + pessoaSingular + '!';
       }
    carro.quantidadePessoas += numeroPessoas;
    return 'Já temos ' + totalPessoas + ' pessoas no carro! ';


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
?

// Mude a cor do carro para vermelho.
?

// E agora, qual a cor do carro?
?

// Mude a cor do carro para verde musgo.
?

// E agora, qual a cor do carro?
?

// Qual a marca e modelo do carro?
?

// Adicione 2 pessoas no carro.
?

// Adicione mais 4 pessoas no carro.
?

// Faça o carro encher.
?

// Tire 4 pessoas do carro.
?

// Adicione 10 pessoas no carro.
?

// Quantas pessoas temos no carro?
?
```
