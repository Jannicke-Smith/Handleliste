/* eksempler på variabel. som med komponenet i figma. 
En verdi som gjentar seg flere ganger i program. 
variabel kan ikke ha samme navn*/

// let kan endres, mens const ikke kan endres. ikke bruk var med mindre du må//

var firstName ='jeg';

const newName= 'hen';

/* defalt er 34, men om man legger til bare age blir 33 lest*/
let age = 34;
age = 33;

console.log('min føste console kommentar');
console.log(firstName + ' er ikke sliten');
console.log(firstName + ' er sliten nå');

console.clear();

//å skjekke om butikken er åpen eller stengt akkurat nå

function checkOpeningTime() {

// 1 må vite når den åpner
const openingTime = 8;
// 2 må vite når den stenger
const closingTime = 18;
// 3 tid/ klokkeslett og dato akkurat nå
const today = new Date();
console.log(today);
// 4 stengte dager
console.log(today.getHours());
console.log(today.getMinutes());
const timeNow = today.getHours();
console.log(timeNow);
//
if(timeNow > openingTime && timeNow < closingTime) {
    alert('Butikken er åpen');

} else {
    alert ('Butikken er stengt')
}

}

checkOpeningTime();

// bytte mellom darkmode og lightmode

//mode value

function switchMode(status) {
    if(status ==='light') {
        alert('du valgte light mode');
    } else {
        alert('Du er i dark mode')
    }
};

const myStatus = 'light'

switchMode('dark');
switchMode('light');

console.clear()

// kalkuere omtrets av en sirkelved diameter verdi

function calculateCircle(diameter) {

    //2PIr // diameter*PI

    const pi = Math.PI;
    const result = diameter * pi
    console.log(Math.ceil(result));
}

calculateCircle(13);

console.clear





function calculateRectangle(areal) {

    const result = areal
    console.log(Math.ceil(result));
}
calculateRectangle(15*20);


