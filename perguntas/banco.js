// Cada pergunta: texto, figura, alternativas e índice da resposta correta (começa em 0).
window.areas = [
{id:'letras',nome:'Letras e sons',icon:'🔤',cor:'#7560e7',tint:'#eee8ff',descricao:'Conheça o começo das palavras'},
{id:'numeros',nome:'Números',icon:'🔢',cor:'#369ecb',tint:'#e0f3ff',descricao:'Vamos contar juntos?'},
{id:'formas',nome:'Formas',icon:'🔺',cor:'#ed8d37',tint:'#fff0dc',descricao:'Descubra cada formato'},
{id:'cores',nome:'Cores',icon:'🎨',cor:'#d65a99',tint:'#ffe8f3',descricao:'Uma brincadeira colorida'},
{id:'animais',nome:'Animais',icon:'🐶',cor:'#40a882',tint:'#dff8ed',descricao:'Conheça nossos amigos'},
{id:'palavras',nome:'Primeiras palavras',icon:'📖',cor:'#d5a129',tint:'#fff4cd',descricao:'Encontre o nome da figura'}];
window.bancoPerguntas={};
const bichos=[['GATO','🐱'],['CACHORRO','🐶'],['VACA','🐮'],['PATO','🦆'],['PORCO','🐷'],['LEÃO','🦁'],['SAPO','🐸'],['COELHO','🐰'],['PEIXE','🐟'],['BORBOLETA','🦋']];
const coisas=[['BOLA','⚽'],['CASA','🏠'],['SOL','☀️'],['LUA','🌙'],['GATO','🐱'],['PATO','🦆'],['UVA','🍇'],['MAÇÃ','🍎'],['SAPO','🐸'],['BOLO','🎂']];
bancoPerguntas.letras=coisas.map(([nome,figura],i)=>({texto:`Qual é a primeira letra de ${nome}?`,figura,opcoes:[{v:nome[0]},{v:['E','O','I','A','U','B','C','M','P','S'].find(x=>x!==nome[0])},{v:['T','R','N','F','D'].find(x=>x!==nome[0])}],correta:0}));
bancoPerguntas.palavras=coisas.map(([nome,figura],i)=>({texto:'Onde está escrito o nome desta figura?',figura,opcoes:[{v:nome},{v:coisas[(i+2)%coisas.length][0]},{v:coisas[(i+4)%coisas.length][0]}],correta:0}));
bancoPerguntas.animais=bichos.map(([nome,figura],i)=>({texto:`Onde está o ${nome.toLowerCase()}?`,figura:'🔎',opcoes:[{v:figura,label:nome},{v:bichos[(i+1)%10][1],label:bichos[(i+1)%10][0]},{v:bichos[(i+3)%10][1],label:bichos[(i+3)%10][0]}],correta:0}));
bancoPerguntas.animais.push(...[['Qual animal faz miau?',0],['Qual animal faz au-au?',1],['Qual animal faz muu?',2],['Qual animal faz quá-quá?',3]].map(([texto,i])=>({texto,figura:'🎵',opcoes:[{v:bichos[i][1],label:bichos[i][0]},{v:bichos[(i+2)%10][1],label:bichos[(i+2)%10][0]},{v:bichos[(i+4)%10][1],label:bichos[(i+4)%10][0]}],correta:0})));
bancoPerguntas.numeros=Array.from({length:10},(_,i)=>({texto:`Quantos ${i%2?'morangos':'pontos'} aparecem?`,figura:(i%2?'🍓':'🔵').repeat(i+1),opcoes:[{v:String(i+1)},{v:String(i===0?3:i)},{v:String(i===9?8:i+2)}],correta:0}));
const formas=[['Círculo','circle'],['Quadrado','square'],['Triângulo','triangle'],['Retângulo','rectangle'],['Estrela','star']];
bancoPerguntas.formas=formas.map(([nome,tipo],i)=>({texto:`Onde está o ${nome.toLowerCase()}?`,figura:'🔎',opcoes:[{shape:tipo,label:nome},{shape:formas[(i+1)%5][1],label:formas[(i+1)%5][0]},{shape:formas[(i+2)%5][1],label:formas[(i+2)%5][0]}],correta:0}));
const cores=[['vermelho','#e34040'],['azul','#2389e8'],['amarelo','#ffd32c'],['verde','#28ad63'],['laranja','#f58328'],['roxo','#874cc9'],['rosa','#ec7eb3'],['preto','#252535']];
bancoPerguntas.cores=cores.map(([nome,cor],i)=>({texto:`Qual é a cor ${nome}?`,figura:'🎨',opcoes:[{color:cor,label:nome},{color:cores[(i+1)%8][1],label:cores[(i+1)%8][0]},{color:cores[(i+3)%8][1],label:cores[(i+3)%8][0]}],correta:0}));
