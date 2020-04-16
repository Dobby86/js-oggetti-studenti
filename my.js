// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// -Stampare a schermo attraverso il for in tutte le proprietà;
// - Creare un array di oggetti di studenti.
// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
$(document).ready(function() {
// console.log("ciao");
// esercizio 1111111111111111111111
var studente = {
    nome : "marco",
    cognome : "delo",
    eta: 34,

};
// var dati = [nome,cognome,eta];
console.log(studente);
// -Stampare a schermo attraverso il for in tutte le proprietà;

$("button").click(function(){
    // var studente = studente.lenght;
for ( var i in studente) {
    console.log(studente[i]);
    $("h1").text(studente[i]);

}

});
// esercizio 2222222222222222222
// - Creare un array di oggetti di studenti.
// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
var studenti = [
{
    nome : "marco",
    cognome : "delo"
},
{
    nome : "jack",
    cognome : "yeye"
},
 {
    nome : "aldoo",
    cognome : "ciufciuf"
}];
var studentiVari = studenti[0];

for (var i=0; i< studenti.length; i++){
    //
    primoNome = studenti[i].nome;
    primoCognome = studenti[i].cognome;

    //
    console.log(primoNome + " " + primoCognome );
    $("h2").text(primoNome + " " + primoCognome );
}
// esercizio 3333333333
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// fine
});
