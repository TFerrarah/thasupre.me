function convert(){
    var combinations = {
        "oo" : "%"
    }

    var newAlphabet = {
        "a": ["@"],
        "b": 'b',
        "c": 'c',
        "d": 'd',
        "e": 'e',
        "f": 'f',
        "g": 'g',
        "h": 'h',
        "i": ["!"],
        "j": 'j',
        "k": 'k',
        "l": 'l',
        "m": 'm',
        "n": 'n',
        "o": ["()"],
        "p": 'p',
        "q": 'q',
        "r": 'r',
        "s": 's',
        "t": ["+"],
        "u": 'u',
        "v": 'v',
        "w": 'w',
        "x": 'x',
        "y": 'y',
        "z": 'z'
    }

    var numAlphabet = {
        "a": ["4"],
        "b": ["6", "8"],
        "c": 'c',
        "d": 'd',
        "e": ["3"],
        "f": 'f',
        "g": ["9", "6"],
        "h": 'h',
        "i": ["1"],
        "j": 'j',
        "k": 'k',
        "l": ["2"],
        "m": 'm',
        "n": 'n',
        "o": ["0"],
        "p": 'p',
        "q": 'q',
        "r": 'r',
        "s": ["5"],
        "t": ["7"],
        "u": 'u',
        "v": 'v',
        "w": 'w',
        "x": 'x',
        "y": 'y',
        "z": 'z'
    }

    var input = document.getElementById("originalText").value;
    var output = document.getElementById("output");
    var outputText = "";
    var inputText = input.toLowerCase();
    var userChoice = document.getElementById("userChoice");

    usedAlphabet = newAlphabet;
    if(userChoice.checked){
        usedAlphabet = numAlphabet;
    }


    for(var i = 0; i < inputText.length; i++){
        if(combinations[inputText[i] + inputText[i+1]]){
            outputText += combinations[inputText[i] + inputText[i+1]];
            i++;
        } else {
            if(usedAlphabet[inputText[i]]){
                outputText += usedAlphabet[inputText[i]][Math.floor(Math.random() * usedAlphabet[inputText[i]].length)];
            } else {
                outputText += inputText[i];
            }
        }
    }

    output.value = outputText;

}

function copy(){
    event.preventDefault();
    document.getElementById("output").select();
    navigator.clipboard.writeText(document.getElementById("output").value);

    // Make a text appear
    document.getElementById("copied").style.display = "block";
}

function background(checkbox){
    let main = document.getElementsByTagName("main")[0];
    if(!checkbox.checked){
        main.style.background= "url(./assets/img/background.jpg) no-repeat center center/cover";
    } else {
        main.style.background = "#7D21E6";
    }
}