var libri = {
    "titulli": "Kronike ne gur",
    "autori": "Ismail Kadare",
    "viti": 1971
};
// shenimi me pike
 document.write(libri.autori);       
//  rezultati ismail kadare

// shenimi me kllapa te mesme
document.write(libri["viti"]);
// rezultati 1971

console.log("autori" in libri)





// var personi = {
//     emri: "Arb",
//     mbiemri: "Smajlaj",
//     mosha : 16,
//     vendndodhja : "Prishtine",
//     emriPlote: function(){
//         alert("Pershendetje " + this.emri + " " + this.mbiemri);
//     }
// };

// personi.emriPlote();


var dog = {
    name: "Zipi",
    race: "golden retrivier",
    age: 5,
    color: "gold",
    energy: 100,
    getEnergy: function(){
        console.log(this.energy)
    },
    bark: function(){
        this.energy -=25
        console.log("Woof Woof Woof" + (this.energy));
    },
    eat: function(){
        this.energy +=25;
        if(this.energy > 100){
            alert("KUjdes keni kaluar limitin")
        }
        console.log("Yummy in my Tummy"+this.energy)
        
    },
};

dog.getEnergy();

dog.eat();