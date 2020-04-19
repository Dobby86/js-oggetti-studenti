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
    document.getElementById("ok").innerHTML = prece + " " + studente[i];

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
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var studentes = [
{
    nome : "roberto",
    cognome : "treq",
    eta : 34
},
{
    nome : "nicola",
    cognome : "biatji",
    eta : 28
},
 {
    nome : "salvatore",
    cognome : "zang",
    eta : 25
}];
// vari prompt
var inserisciNome = prompt("inserisci nome");
var inserisciCognome =  prompt("inserisci cognome");
var inserisciEta = parseInt(prompt("inserire eta"));
// inseriamo il push
studentes.push({
    "nome" : inserisciNome,
    "cognome" : inserisciCognome,
    "eta" : inserisciEta
}

);
for (var i=0; i< studentes.length; i++){
    //
    var studentesVari = studentes[i];
    var secondiNome = studentes[i].nome;
     var secondiCognome = studentes[i].cognome;
     var secondiEta = studentes[i].eta;

    //
    console.log(secondiNome +secondiCognome
    +secondiEta);

    var postato = $(".tre");
    postato.append( " " + secondiNome + " " + secondiCognome + " " + secondiEta);
}
// fine
});
