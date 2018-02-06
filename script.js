var easy = ["APPLE","RED","BLUE","CAT","DOG","BYE"];
var medium = ["CALIFORNIA","NEVADA","PURPLE","YELLOW","ORCHID","HELLO"];
var hard = ["MICHIGAN","PENNSYLVANIA","HYDRANGEA","SPAGHETTI","PERIWINKLE"];
var numberGuesses = 12;
var guessed= [];
var word = "";



function start(){
    var difficulty = document.getElementById("difficulty").value;
    if (difficulty == 1){
        word = easy[Math.floor(Math.random() * easy.length)];
    }
    if (difficulty == 2){
        word = medium[Math.floor(Math.random() * medium.length)];
    }
    if (difficulty == 3){
        word = hard[Math.floor(Math.random() * hard.length)];
    }
    console.log(word);
    printWord();
}

function printWord() {
    var spaces = "";
    for (i = 0; i < word.length; i++) {
        if (guessed.indexOf(word[i]) > -1) {
            spaces += word[i];
        } else {
            spaces += " _ ";
        }
    }
    console.log(spaces);
    document.getElementById("spaces").innerHTML = spaces;
    if(spaces.indexOf("_") > -1){
    }
}

function setLetter(letter) {
    var let = letter;
    var output = "";
    if (guessed.indexOf(let) > -1) {
        document.getElementById("error").innerHTML = "you already guessed that letter"
    }else{
        (guessed.indexOf(let) < 0)
        guessed.push(let);
        numberGuesses--;
        printWord();
    }
    winOrLose();
}


function showGuessed() {
        document.getElementById("guessedLetters").innerHTML = guessed;
}


function winOrLose() {
   var guessedWord=document.getElementById("spaces").innerHTML;
    if (numberGuesses < 0) {
        document.getElementById("lose").innerHTML = "you lose";
    }
     if(guessedWord==word) {
         document.getElementById("win").innerHTML = "you won";
     }else{
        printword();
     }
}



















