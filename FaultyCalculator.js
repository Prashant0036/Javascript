let rand=Math.round(Math.random()*100)
// Faulty Calculator
function faultyCalculations(a,b,op){
    if(op==="+"){
        return a/b;
        }
        else if(op==="-"){
            return a*b;
            }
            else if(op==="*"){
                return a-b;
                }
                
            else if(op==="/"){
                return a+b;
                }

}

function rightCalculations(a,b,op){
    if(op==="+"){
        return a+b;
        }
        else if(op==="-"){
            return a-b;
            }
            else if(op==="*"){
                return a*b;
                }
                
            else if(op==="/"){
                return a*b;
                }

}
let a=5;
let b=6;
let op="+";
if (rand<=10 && rand>=0){
console.log(faultyCalculations(a,b,op));
}
else{
    console.log(rightCalculations(a,b,op));
}
