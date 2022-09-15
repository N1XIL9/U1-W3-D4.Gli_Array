// •Ad una stringa di partenza, dovrai applicare i metodi per caratteri maiuscoli e minuscoli, suddividere nei suoi
// elementi e selezionarne due. I due selezionati saranno concatenati in un'unica stringa

// MAIUSCOLO

let fattoria = "benvenuto nella fattoria di zio tom";
let maiuscolo = fattoria.toUpperCase();
console.log(maiuscolo);



//MINUSCOLO

let minuscolo = fattoria.toLowerCase();
console.log(minuscolo);



// SUDDIVISIONE e SELEZIONE DUE ELEMENTI 

let benvenuti = fattoria.split(" ");
console.log(benvenuti);
console.log(benvenuti[0]);
console.log(benvenuti[4]);



// CONCATENARE I DUE ELEMENTI 

console.log(benvenuti[0] + benvenuti[4]);



// •Crea un array di persone

let people = [
    'Aldo',
    'Giovanni',
    'Giacomo',
];

// • Leggi il terzo elemento

console.log(people[2])




// • Passa all'array un valore tramite una variabile, leggi la lunghezza dell'array

let persona = people[3] = 'Nicola'
console.log(people.length)




// • Crea una funzione all'interno della quale utilizzerei i valori numerici tratti da un array

arrayNumerico = [12, 24, 36, 48, 60, 72];

function somma() {
    let result = arrayNumerico[2] + arrayNumerico[4]
    return result;
}

console.log(somma());



// •Usa i metodi push/pop e shift/unshift su un array

let colori = [
    'blu',
    'giallo',
    'rosso',
]
console.log(colori);



// PUSH/POP 
let aggiungi = colori.push('viola'); //PUSH
console.log(aggiungi);

let elimina = colori.pop('rosso'); //POP
console.log(elimina);


// SHIFT/UNSHIFT 

let strumenti = [
    'pianoforte',
    'chitarra',
    'violino'
]
console.log(strumenti);


let add = strumenti.shift(); //SHIFT
console.log(add);
console.log(strumenti);


let primoElemento = strumenti.unshift('flauto'); //UNSHIFT
console.log(strumenti);
