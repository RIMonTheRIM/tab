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
        console.log(num+" n'est pas premier"+count+" diviseurs");
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
    console.log("count "+count);
    if (count===num) {
        console.log(num+" est parfait! "+count+" somme");
        return true;
    }else{
        console.log(num+" n'est pas parfait"+count+" somme");
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
        if(count === 0) count=-1;
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
        if(count === 0) count=-1;
        return count;
    }
}
function triCroissant(numArray){
    if(checkArray(numArray)){
        console.log("avant sort");
        afficheTableau(numArray);
        numArray.sort();
        console.log("après sort");
        afficheTableau(numArray);
        return(numArray);
    }
}
function triDecroissant(numArray){
    if(checkArray(numArray)){
       numArray = triCroissant(numArray);
       numArray = numArray.reverse();
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
        if (count===0) count = -1;
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