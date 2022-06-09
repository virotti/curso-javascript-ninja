/*
Crie um array com 5 items (tipos variados).
*/
// > array = [ 1, 'letra', [ 'a', 'b', 'c'], { nome: 'Vinicius', sobrenome: 'Nunes Menti'}, 1.1 ];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// > function addItem(item) {
... array.push(item);
... return array;
... }

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
> console.log( addItem( [3, true, 'Ninja' ] ) );


/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// > console.log( 'O segundo elemento do segundo array é ' + array[8][1] + '.' );

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// > console.log( 'O primeiro array tem ' + array.length + ' itens.' );

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// > console.log( 'O segundo array tem ' + array[8].length + ' itens.' );

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
> counter = 10
10
> while( counter < 20) {
... counter % 2 === 0 ? console.log( counter ) : '';
... counter++;
... }
10
12
14
16
18
19

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// > counter = 10
10
> while(counter < 20) {
... counter % 2 != 0 ? console.log( counter ) : '';
... counter++;
... }
11
13
15
17
19
19

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
// > for( var counter = 100; counter <= 120; counter++ ) {
... counter % 2 === 0 ? console.log( counter ) : '';
... }
100
102
104
106
108
110
112
114
116
118
120

console.log( 'Números ímpares entre 111 e 125:' );
// > for( var counter = 111; counter <= 125; counter++ ) {
... if(counter % 2 != 0) {
..... console.log ( counter );
..... }
... }
111
113
115
117
119
121
123
125
