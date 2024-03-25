

function alphabetPosition(text){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase();
        if (alphabet.indexOf(char) > -1) {
            result += (alphabet.indexOf(char) + 1) + ' ';
        }
    }
    return result.trim();
}