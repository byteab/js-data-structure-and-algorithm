function maxChar(str){
    const charObject = {};
    let max = 0;
    let maxChar = '';

    debugger
    for(let index of str){
        if(charObject[index]){
            charObject[index]++;
        }
        else{
            charObject[index] = 1
        }
    }

    for (let char in charObject) {
        if (charObject[char] > max) {
            max = charObject[char];
            maxChar = char;
        }
    }

    return maxChar
}