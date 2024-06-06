//Album: Create objects for music albums.Use functions to return objects//
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
//Magicians: Display magician names from an array.Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner//
var magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log("One of the best magician ".concat(magicians));
    });
}
show_magicians(magicians);
//Great Magicians: Add "the Great" to magician names.Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference//
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
