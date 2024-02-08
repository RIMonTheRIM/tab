let num = prompt("Entrez un nombre");
num = Number(num);
boolNum = isNaN(num);
while(boolNum){
    num = prompt("Entrez un nombre valide!");
    num = Number(num);
    boolNum = isNaN(num);
}
console.log("nombre :"+num);
premier(num);
parfait(num);

function premier(num){
    let count = 0;
    for(let i = 1;i<=num;i++){
        if(num%i===0){
            count+=1;
        }
    }
    if(count===2){
        console.log(num+" est premier! "+count+" diviseurs");
        return true;
    }
    else{
        console.log(num+" n'est pas premier "+count+" diviseurs");
        return false;
    } 
}
function parfait(num){
    let count = 0;
    for(let i = 1;i<num;i++){
        if(num%i===0){
            count+=i;
        }
    }
    if (count===num) {
        console.log(num+" est parfait! "+count+" somme");
        return true;
    }else{
        console.log(num+" n'est pas parfait "+count+" somme");
        return false;
    }
}
function nbPresencePremiers(numArray){
    if(checkArray(numArray)){
        let count = 0;
        for(let i=0;i<numArray.length;i++){
            if(premier(numArray[i])){
                count+=1;
            }
        }
        if(count === 0) {
            count=-1;
            console.log("il n'ya pas de nombre premiers dans la liste");
        }else{
            console.log("il y'a "+count+" nombres premiers dans la liste");
        }
        return count;
    }
}
function nbPresenceParfaits(numArray){
    if(checkArray(numArray)){
        let count = 0;
        for(let i=0;i<numArray.length;i++){
            if(parfait(numArray[i])){
                count+=1;
            }
        }
        if(count === 0){
            count=-1;
            console.log("il n'ya pas de nombre parfaits dans la liste");
        }else{
            if(count===1){
                console.log("il y'a "+count+" nombres parfait dans la liste");
            }else console.log("il y'a "+count+" nombres parfaits dans la liste");     
        } 
        return count;
    }
}
function triCroissant(numArray){
    if(checkArray(numArray)){
        console.log("avant le tri:");
        afficheTableau(numArray);
        numArray.sort();
        console.log("après le tri");
        afficheTableau(numArray);
        return(numArray);
    }
}
function triDecroissant(numArray){
    if(checkArray(numArray)){
       numArray = triCroissant(numArray);
       console.log("inversion: ")
       numArray = numArray.reverse();
       afficheTableau(numArray);
       return numArray;
    }
}
function nombreDePresenceValeur(numArray, val){
    if(checkArray(numArray)){
        let count = 0;
        for(let i=0;i<numArray.length;i++){
            if(numArray[i]===val){
                count+=1;
            }
        }
        if (count===0){
            count = -1;
            console.log(val+" n'est pas présent!");
        }else{
            console.log(val+" est présent "+count+"fois");
        }
        return count;
    }
}
function afficheTableau(numArray){
    if(checkArray(numArray)){
        for(let i = 0;i<numArray.length;i++){
            console.log("tab-"+i+" = "+numArray[i]);
        }
    }
}
function checkArray(numArray){
    if(Array.isArray(numArray)){
        console.log("tableau vérifié");
        return true;
    }else{
        console.log("valeur entrée n'est pas un tableau");
        return false;  
    } 
}