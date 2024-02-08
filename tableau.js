let prenom = ['pierre','mathilde','Florent','arthur','le kram'];
let age=[12,3,34,46,18];

for(let i = 0;i<prenom.length;i++){
    textAdd = prenom[i]+"<br/>";
    document.getElementById("content").innerHTML += textAdd;
} 

const buttonCharger = document.getElementById("charger");
buttonCharger.addEventListener("click",()=>{

    let newPrenom = document.getElementById("prenom").value;
    if(newPrenom=="" || newPrenom==null){
        console.log("empty");
    }else{
        console.log('pushed');
        console.log(prenom.push(newPrenom));
    }

    document.getElementById("content").innerHTML = "";
    for(let i = 0;i<prenom.length;i++){
        console.log(i);
        textAdd = prenom[i]+"<br/>";
        document.getElementById("content").innerHTML += textAdd;
    } 
});