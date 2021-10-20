/* password generator 
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina “La password assegnata è: ” nomecognomecolorepreferito21
*/

let nome = prompt("Inserisci il tuo nome");
// console.log(nome);

let cognome = prompt("Inserisci il tuo cognome");
// console.log(cognome);

let colorePreferito = prompt("Inserisci il tuo colore preferito");
// console.log(colorePreferito);

const numeroDopoLaPassword = 21;
// console.log(numeroDopoLaPassword);

// document.getElementById("generator").innerHTML = "La tua password è: " + nome + cognome + colorePreferito + numeroDopoLaPassword;

// ----OPPURE----

document.getElementById("generator").innerHTML = 
`
La tua password è: ${nome}${cognome}${colorePreferito}${numeroDopoLaPassword}
`;