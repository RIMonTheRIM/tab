let prenom = document.getElementById("Prenom");
let nom =  document.getElementById("Nom");
let date = document.getElementById("Date");
let email = document.getElementById("Email");
let idCount = 0;
let personneArray = [];


let btnEnregistrer = document.getElementById("btnEnregistrer");
btnEnregistrer.addEventListener("click", () =>{
    if(verification()){
        ajouter();
    }
})

let btnEffacer = document.getElementById("btnEffacer");
btnEffacer.addEventListener("click", ()=>{
    console.log("j'efface");
    prenom.value = "";
    nom.value = "";
    date.value = "";
    email.value = "";
})
let btnGenerer = document.getElementById("btnGenerer");
btnGenerer.addEventListener("click", () => {
    if(verification()){
        generer();
    }
    
})
function verification(){
    
    let count = 0;
    if(prenom.value === "" || prenom.value === null){
        console.log("prenom vide");
        alert("prenom vide");
        count +=1;
    }
    if(nom.value === "" || nom.value === null){
        console.log("nom vide");
        alert("nom vide");
        count +=1;
    }
    if(date.value === "" || date.value === null){
        console.log("date vide");
        alert("date vide");
        count +=1;
    }
    if(count===0) return true;
    else return false;
}

function generer(){
    let dateVal = new Date(date.value);
    dateVal = dateVal.toLocaleDateString("en-GB");
    let dateArray = dateVal.split("/");
    console.log(dateArray);

    let emailTxt =prenom.value[0]+nom.value+dateArray[2].toString()+"@supinfo.sn";
    email.value = emailTxt;

    console.log(prenom.value);
    console.log(nom.value);
    console.log(dateVal);
    console.log(emailTxt);
}

function ajouter(){
    let dateVal = new Date(date.value);
    dateVal = dateVal.toLocaleDateString("en-GB");
    let personne = {id:idCount, prenomVal:prenom.value, nomVal:nom.value, dateValue:dateVal, emailVal:email.value};
    console.log(personne);
    personneArray.push(personne);
    peupler(personne);
}

function peupler(personne){
    let table = document.getElementById("tableContent");
    let row = table.insertRow(-1);
    let cellID = row.insertCell(0); cellID.innerHTML =personne.id;
    let cellPrenom = row.insertCell(1); cellPrenom.innerHTML =personne.prenomVal;
    let cellNom = row.insertCell(2);cellNom.innerHTML =personne.nomVal;
    let cellDate =row.insertCell(3);cellDate.innerHTML =personne.dateValue;
    let cellEmail = row.insertCell(4);cellEmail.innerHTML =personne.emailVal;
    let cellAction =row.insertCell(5);cellAction.innerHTML ='<button class="btnSupprimer">Supprimer</button><button class="btnModifier">Modifier</button>';
}