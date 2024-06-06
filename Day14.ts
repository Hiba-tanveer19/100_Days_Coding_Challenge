//Album: Create objects for music albums.Use functions to return objects//

function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));



//Magicians: Display magician names from an array.Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner//

let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians:string[]) {
    magicians.forEach(magicians => {
    console.log(`One of the best magician ${magicians}`);
    
    });
}

show_magicians(magicians);



//Great Magicians: Add "the Great" to magician names.Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference//

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names

