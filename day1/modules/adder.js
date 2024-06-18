/* 
// inline export 
export function adder(num1, num2){
    return num1 + num2;
}; 
*/
function adder(num1, num2){
    return num1 + num2;
}; 

function multiplier(num1, num2){
    return num1 * num2;
}; 

class Person{
    ability = "i can walk";
    constructor(nability){
        this.ability = nability;
    }
    sayability(){
        return this.ability;
    }
}

// alias export
// export { adder as sum }

// named export
export { adder, multiplier, Person }

