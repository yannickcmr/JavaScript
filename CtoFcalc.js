'use scrict';
const   raum = 23,
            sonne = 5000,
            mond = -80,
            siedepunkt = 100;

function CelsiusToFahrenheit (temp){
    fahrenheit = temp * 1.8 + 32
    console.log("Umgerechnet ergibt das: " + fahrenheit + "° Fahrenheit.")
} 

CelsiusToFahrenheit(sonne)
CelsiusToFahrenheit(mond)
CelsiusToFahrenheit(siedepunkt)