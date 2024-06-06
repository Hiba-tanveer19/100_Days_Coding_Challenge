//Array Method//
var ice_cream = ["Belgium chocolate", "strawberry cheese", "buttercrunch"];
ice_cream.forEach(function (ice_cream) {
    console.log("I like ".concat(ice_cream, " ice-cream!"));
});
console.log("I really love ice-cream!");
//Array Method//
var animals = ["Cat", "Rabbit", "Chicken"];
animals.forEach(function (animals) {
    console.log("A ".concat(animals, " would make a great pet"));
});
console.log("Any of these animals would make a great pet");
//Function//
function make_shirt(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message ").concat(message, " printed on it"));
}
;
make_shirt("medium", "Code is Life");
