//Function//
// Default large and message//
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it!"));
}
make_shirt();
// Default message, medium size//
make_shirt("medium");
// Custom message, small size//
make_shirt("small", "Dive into Coding");
//Function//
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
//Function//
function city_country(city, country) {
    return "I love ".concat(city, ", ").concat(country);
}
console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
