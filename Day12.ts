//Question 34: Ice-creams: Share your favorite ice-creamss and express your love for them.//
let ice_cream: string[] = ["Belgium chocolate", "strawberry cheese", "buttercrunch"]

ice_cream.forEach(ice_cream => {
    console.log(`I like ${ice_cream} ice-cream!`);
});
console.log("I really love ice-cream!");


//Question 35: Animals: Highlight animals with a common trait.//
let animals: string[] = ["Cat", "Rabbit", "Chicken"];

animals.forEach(animals => {
    console.log(`A ${animals} would make a great pet`);
});
    console.log("Any of these animals would make a great pet!");


//Question 36: T-Shirt: Create a function for customizing t-shirts.//
function make_shirts(size:string , message:string) {
    console.log(`Making a ${size} t-shirt with the message ${message} printed on it`);
};

