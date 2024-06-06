//Question 34: Ice-creams: Share your favorite ice-creamss and express your love for them.//
var ice_cream = ["Belgium chocolate", "strawberry cheese", "buttercrunch"];
ice_cream.forEach(function (ice_cream) {
    console.log("I like ".concat(ice_cream, " ice-cream!"));
});
console.log("I really love ice-cream!");
//Question 35: Animals: Highlight animals with a common trait//
var animals = ["Cat", "Rabbit", "Chicken"];
animals.forEach(function (animals) {
    console.log("A ".concat(animals, " would make a great pet"));
});
console.log("Any of these animals would make a great pet!");
//Question 36: T-Shirt: Create a function for customizing t-shirts.//
function make_shirts(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message ").concat(message, " printed on it"));
}
;
