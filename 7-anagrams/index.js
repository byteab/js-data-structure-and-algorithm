function anagrams(stringA , stringB){
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str){
    return str
    .replace(/[^\w]/g , '')  // replace(search value , replace this value) , (/[^\w]/g) => Regular Expression : this use for remove spacing
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}


// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {  // object have two parameter {key , value}
//     return false;
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// function buildCharMap(str) {
//   const charMap = {};  // {} => create object = {key , value}
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }