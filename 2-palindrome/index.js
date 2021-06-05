function palindrome(str) {
    return str.split('').every((char, index) => {   // every have two argument(value and index of value)
      return char === str[str.length - index - 1];  //  only return true or false 
    });
  }

  
  // function palindrome(str) {
  //   const reversed = str
  //     .split('')
  //     .reverse()
  //     .join('');
  //
  //   return str === reversed;    // check string is equal its reversed string
  // }