//Question 31: No Users: Ensure your user list isn’t empty.//
//Empty array//
var usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    console.log("Greet users");
}
//Question 32: Checking Usernames: Ensure uniqueness in usernames.//
var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach(function (new_users) {
    if (current_users.some(function (current_users) { return current_users.toLowerCase() == new_users.toLowerCase(); })) {
        console.log("".concat(new_users, " will need to enter a new username!"));
    }
    else {
        console.log("".concat(new_users, " is available!"));
    }
});
//Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.//
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (numbers) {
    var suffix = "th";
    if (numbers == 1) {
        suffix = "st";
    }
    else if (numbers == 2) {
        suffix = "nd";
    }
    else if (numbers == 3) {
        suffix = "rd";
    }
    console.log("".concat(numbers).concat(suffix));
});
