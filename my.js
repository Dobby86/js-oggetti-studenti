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
    // prece = document.getElementById("ok").innerHTML;
    prece = $("h1").html();
    prece = prece + " " + studente[i];

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


for (var i=0; i< studenti.length; i++){
    //
    var studentiVari = studenti[i];
    var primoNome = studenti[i].nome;
     var primoCognome = studenti[i].cognome;

    //
    console.log(primoNome + primoCognome);
    var postato = $(".due");
    postato.append( " " + primoNome + " " + primoCognome);
}
// esercizio 3333333333

// fine
});
