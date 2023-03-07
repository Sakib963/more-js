const number = 19;
// console.log(number.push(45))
// TypeError: number.push is not a function

/* let address;
console.log(address.home);
TypeError: Cannot read properties of undefined */

let address = {city: 'Dhaka'};
// console.log(address.home.city)
console.log(address?.home?.city)