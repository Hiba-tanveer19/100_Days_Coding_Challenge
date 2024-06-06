//Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.     // If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
// Hiba, 06-03-2024
// This program prints a personal message
var myname = "Hiba";
console.log("Assalam o Alaikum warahmatullahi wa barakatuh ".concat(myname, ", Hope you're in the best state of Iman and Health!"));
//Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by
// accessing each element in the list, one at a time.
var names = ["Humna Khan", "Aqsa Sajid", "Zubi dubious", "Samin", "Syeda Saba Noor", "Noor us Sabah"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, 
//print a message to them. The message should be the same for each person, but personalized with their name.
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Assalam o Alaikum warahmatullahi wa barakatuh ".concat(name_1, ", May Malik e Kun Faya Kun blessed you \n    with the BESTEST!"));
}
