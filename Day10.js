//Stages of a person's life with an If/Else chain//
var age = 25;
if (age < 2) {
    console.log("The person is a baby!");
}
else if (age < 4) {
    console.log("The person is a toddler!");
}
else if (age < 13) {
    console.log("The person is a kid!");
}
else if (age < 20) {
    console.log("The person is a teenager!");
}
else if (age < 65) {
    console.log("The person is an adult!");
}
else {
    console.log("The person is an elder!");
}
//Array with If/Else condition//
var faviee_fruits = ["Mango", "Pineapple", "Pomegranate"];
if (faviee_fruits.includes("Mango")) {
    console.log("You really like Mango!");
}
if (faviee_fruits.includes("Pomegranate")) {
    console.log("You really like Pomegranate!");
}
// Array method //
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) { return console.log(number * 2); });
// Array, Loop & If/Else condition //
var usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(function (usernames) {
    if (usernames === "admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(usernames, ", thankyou for logged in again!"));
    }
});
