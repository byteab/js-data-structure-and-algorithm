function reverse(str){
    return str.split('').reverse().join('')
}


// function reverse(str){
//     let string = '';
//     let i = str.length -1;
    
//     while(i >= 0){
//         string += str[i];  
//         i--;
//     }
//     return string;
// }


// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');
//   }

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }


// function reverse(str) {
//   let reversed = '';
//
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//
//   return reversed;
// }