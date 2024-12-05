let numbers=[1,2,3,4,5,6,7,8,9];
let sum= numbers.reduce(funct);
function funct(acc,val){
    sumation=acc+val;
    return sumation;
}
let min= numbers.reduce((acc, val)=>Math.min(acc,val));

console.log(' min is now:'+ min );
// let max= numbers.reduce(funcmin);
// function funcmin(acc2,val2){
//     if(acc2>val2){
//         return acc2;
//     }
//     else{
//         return val2;
//     }
// }

// console.log(' max is:', max);

console.log(' :',sum );