//Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.//
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
//Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.//
var faviee_fruits = ["Mango", "Pineapple", "Pomegranate"];
if (faviee_fruits.includes("Mango")) {
    console.log("You really like Mango!");
}
if (faviee_fruits.includes("Pomegranate")) {
    console.log("You really like Pomegranate!");
}
//Question 30: Hello Admin: Greet users differently, especially 'admin'.//
var username = ["admin", "user1", "user2", "user3", "user4"];
username.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thankyou for logged in again!"));
    }
});
