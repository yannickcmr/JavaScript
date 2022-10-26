
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function Cryptofy(message, rotation){
    const shifted_alphabet = Rotation(rotation);
    var translation = [],
            crypto = "";

    for (let i = 0; i < alphabet.length; i++){
        translation.push([alphabet[i], shifted_alphabet[i]])
    }
    var char_list = message.toUpperCase();
    char_list = char_list.split("")


    for (let i = 0; i < char_list.length; i++){
        var char = char_list[i];
        
        if (char == " "){continue}
        for (let j = 0; j < translation.length; j++){
            if (char == translation[j][0]){
                crypto = crypto.concat(translation[j][1]);
            }
        }
    }
    return crypto
}

function Rotation(rotation){
    var shifted_alpha = Array.from(alphabet);

    if (rotation < 0){
        shifted_alpha = shifted_alpha.reverse();
        for (let i = 0; i > rotation; i--){
            shifted_alpha.push(shifted_alpha[0]);
            shifted_alpha.shift();
        } 
        shifted_alpha = shifted_alpha.reverse();
    }

    else if (rotation > 0){
        for (let i = 0; i < rotation; i++){
            shifted_alpha.push(shifted_alpha[0]);
            shifted_alpha.shift();
        }
    }
    return shifted_alpha
}

test = Cryptofy("hallo", -22)
console.log("Ergebnis: ", test)