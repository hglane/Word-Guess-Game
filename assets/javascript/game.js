// Create an array of Words
var nflTeams = ['Chiefs', 'Patriots','Steelers','Jets','Browns','Ravens','Jaguars','Raiders','Broncos','Bills','Colts','Dolphins','Chargers','Titans','Texans','Bengals','Buccaneers'];

// Choose word randomly
var randomNum = Math.floor(Math.random() * nflTeams.length);
var chosenWord = nflTeams[randomNum];
var rightWord = [];
var wrongWord = []; 
var underScore = [];

//Dom manipulation
var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');


//Main
//-----------------------------------------

console.log(chosenWord)
// Create underscores based on length of word
function generateUnderscore(){
    for (var i = 0; i < chosenWord.length; i++){
        underScore.push('_');
    }
    return underScore;
};



// Get users guess
document.addEventListener('keypress', function(){
    var keyword = String.fromCharCode(event.keyCode);
//if users guess is right
    if(chosenWord.indexOf(keyword) > -1){
    //add to right words array
        rightWord.push(keyword); 
        
    //replace underscore with right letter
        underScore[chosenWord.indexOf(keyword)] = keyword;
            docUnderScore[0].InnerHTML = underScore.join(' ');
            docRightGuess[0].InnerHTML = rightWord;
    //checks to see if user word matches guesses
        if(underScore.join('') == chosenWord){
            alert('You win');
        }
    }
    else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
    }
});

underScore[0].innerHTML = generateUnderscore().join(' ');


