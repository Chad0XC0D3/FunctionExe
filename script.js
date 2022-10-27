const b = "=".repeat(25);


// 1
function fozzieBear() {
    console.log("Wocka Wocka!");
}

fozzieBear();
console.log(b);


// 2
function beaker(speak){
    console.log(speak);
    console.log(speak); 
    console.log(speak);
    console.log(speak);  
}

beaker("Meep");
console.log(b);


// 3
function muppetShows(a, b) {
    if(a === "Muppet" && b ==="Show"){
        console.log(`It's time to play the music. It's time to light the lights.`);
    }
}

muppetShows(`Muppet`,`Show`);
console.log(b);


// 4
function kermit(params) {
    return `Kermit the frog?`;
}

console.log(kermit());

console.log(b);

// 5
function muppetShowSeasons(seasons) {
    if(seasons === 5){
        return true;
    } else{
        return false;
    }
}

console.log(muppetShowSeasons(5));
console.log(b);

const manMuppet = function () {
    console.log(`Am i a man or a muppet.`);
}

rainbowConnection = () => `Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`;

console.log(rainbowConnection());


// no

// yes

const newMuppetsMovies = ['The muppets','Muppets most wanted'];

const upperMovies = newMuppetsMovies.map(function(x) {
    return x.toUpperCase();
});


const oldMuppetsMovies = [
    "The Muppet Movie", 
    "The Muppets Take Manhattan",
    "The Great Muppet Caper",
    "The Muppet Christmas Carol",
     "Muppet Treasure Island",
     "Muppets From Space"
];

const twoMovies = oldMuppetsMovies.filter(a => a.length === 22);
console.log(twoMovies);


const charactersOne = ["Statler", "Waldorf"];


const charactersTwo = ["The Swedish Chef", "Animal", "Rowlf"];

randomMuppets = (characters) => {
    console.log(`${characters[Math.floor(Math.random() * characters)]}`);
}