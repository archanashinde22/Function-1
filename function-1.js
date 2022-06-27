// String manipulations

let jonSnowHealth = 100 ;

// String Conversion
//jonSnowHealth = 100 +''
// console.log(jonSnowHealth);
//jonSnowHealth = String(100)
// console.log(jonSnowHealth);
//jonSnowHealth =Boolean(jonSnowHealth);
// console.log(jonSnowHealth);

let theWinnerIs =  `Jamie is the Winner`;
// winner reassigning 
//theWinnerIs = theWinnerIs.toLowerCase().replace(`jamie`,`Jon`).toUpperCase();
// saving to a new variable
 let newWinner = theWinnerIs.toLowerCase().replace(`jamie`,`Jon`).toUpperCase();
 //onsole.log(theWinnerIs);
 
 // convert-String-to kebab-case
 // convert it to lower case, then 
 newWinner = newWinner.replaceAll(` `, `-`)
 console.log(newWinner);
// let newWinnerLower = newWinner.toLowerCase();
// let newWinnerSplit = newWinnerLower.split(` `);
// let newWinnerKebab = newWinnerSplit.join(`-`);

// same as above but minified by chaining commands
let newWinnerKebab = newWinner.toLowerCase().split(` `).join(`-`)
console.log(newWinner,'----------------',newWinnerKebab);

// Functions

// lets create a function that will check to see if Jon's alive 

function isJonAlive(){
    if(jonSnowHealth >0){
        console.log(`Jon is Alive!`)
    } else (
        console.log(`Rip Jon Snow`)
    )
} 
isJonAlive();

// lets create a function that will be used everytime jon is attacked

function surpriseAttack(attack){
    jonSnowHealth -= attack ;
    isJonAlive();   
}
surpriseAttack(21) ;
surpriseAttack(13) ;
surpriseAttack(32) ;
surpriseAttack(26) 
surpriseAttack(26) ;


// create a function that allows two people to great each other

function greeting(person1,person2){
console.log(`Hello , ${person1}!`);
console.log(`Hey there , ${person2}!`);
}
greeting(`Dj`,'Kellie');


