let a = 497;
premier(a);
parfait(a);

function premier(num){
    let count = 0;
    for(let i = 1;i<=num;i++){
        if(num%i===0){
            count+=1;
        }
    }
    if(count===2){
        console.log(num+" est premier! "+count+" diviseurs");
    }
    else console.log(num+" n'est pas premier"+count+" diviseurs");
}
function parfait(num){
    let count = 0;
    for(let i = 1;i<num;i++){
        if(num%i===0){
            count+=i;
        }
    }
    console.log("count "+count);
    if (count===num) {
        console.log(num+" est parfait! "+count+" somme");
    }else{
        console.log(num+" n'est pas parfait"+count+" somme");
    }
}
function nbPresencePremiers(numArray){
    
}
function nbPresenceParfaits(numArray){
    
}
function triCroissant(numArray){
    
}
function triDecroissant(numArray){
    
}
function nombreDePresenceValeur(numArray){
    
}
function afficheTableau(numArray){
    
}