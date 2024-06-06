//Array Method//
let ice_cream: string[] = ["Belgium chocolate", "strawberry cheese", "buttercrunch"]

ice_cream.forEach(ice_cream => {
    console.log(`I like ${ice_cream} ice-cream!`);
});
console.log("I really love ice-cream!");


//Array Method//
let animals: string[] = ["Cat", "Rabbit", "Chicken"];

animals.forEach(animals => {
    console.log(`A ${animals} would make a great pet`);
});
    console.log("Any of these animals would make a great pet!");


//Function//
function make_shirt(size:string , message:string) {
    console.log(`Making a ${size} t-shirt with the message ${message} printed on it`);
};

make_shirt("medium", "Code is Life");