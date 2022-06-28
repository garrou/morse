// https,//fr.wikipedia.org/wiki/Code_Morse_international#Tables_d%E2%80%99encodage

const morseCode = new Map();
morseCode.set("a", ".-");
morseCode.set("b", "-...");
morseCode.set("c", "-.-.");
morseCode.set("d", "-..");
morseCode.set("e", ".");
morseCode.set("f", "..-.");
morseCode.set("g", "--.");
morseCode.set("h", "....");
morseCode.set("i", "..");
morseCode.set("j", ".---");
morseCode.set("k", "-.-");
morseCode.set("l", ".-..");
morseCode.set("m", "--");
morseCode.set("n", "-.");
morseCode.set("o", "---");
morseCode.set("p", ".--.");
morseCode.set("q", "--.-");
morseCode.set("r", ".-.");
morseCode.set("s", "...");
morseCode.set("t", "-");
morseCode.set("u", "..-");
morseCode.set("v", "...-");
morseCode.set("w", ".--");
morseCode.set("x", "-..-");
morseCode.set("y", "-.--");
morseCode.set("z", "--..");
morseCode.set("0", "-----");
morseCode.set("1", ".----");
morseCode.set("2", "..---");
morseCode.set("3", "...--");
morseCode.set("4", "....-");
morseCode.set("5", ".....");
morseCode.set("6", "-....");
morseCode.set("7", "--...");
morseCode.set("8", "---..");
morseCode.set("9", "----.");
morseCode.set(".", ".-.-.-");
morseCode.set(",", "--..--");
morseCode.set("?", "..--..");
morseCode.set("'", ".----.");
morseCode.set("!", "-.-.--");
morseCode.set("/","-..-.");
morseCode.set("(", "-.--.");
morseCode.set(")", "-.--.-");
morseCode.set("&",".--...");
morseCode.set(",","---...");
morseCode.set(";","-.-.-.");
morseCode.set("=","-...-");
morseCode.set("+",".-.-.");
morseCode.set("-","-....-");
morseCode.set("_","..--.-");
morseCode.set('"',".-..-.");
morseCode.set("$","...-..-");
morseCode.set("@", ".--.-.");
morseCode.set(" ",".......");

const result = document.getElementsByName("result")[0];
const toMorse = document.getElementsByName("toMorse")[0];
const toText = document.getElementsByName("toText")[0];

toMorse.addEventListener('input', textToMorse);
toText.addEventListener('input', morseToText);

/**
 * @param {String} text 
 */
function textToMorse(text) {
    toText.value = "";
    result.textContent = "";

    [...text.target.value].forEach(c => {  
        if (morseCode.has(c)) {
            result.textContent += morseCode.get(c.toLowerCase());
            result.textContent += " ";        
        } else {
            text.target.value = text.target.value.slice(0, text.target.value.length - 1); 
        }
    });
}

/**
 * @param {String} text 
 */
function morseToText(text) {
    toMorse.value = "";
    result.textContent = "";

    text.target.value.split(" ").forEach(s => {  
        let value = getByValue(s);

        if (value) {
            result.textContent += value;
        } else if (s === " ") {
            result.textContent += " ";
        }
    });
}

/**
 * @param {String} searchedValue 
 * @returns String | undefined
 */
function getByValue(searchedValue) {
    for (let [key, value] of morseCode.entries()) {
        if (value === searchedValue) {
            return key;
        }
    }
}