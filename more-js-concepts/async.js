console.log(1)
console.log(2)
const timeoutID = setTimeout(() => {
    console.log('lazy logged')
}, 10000)
console.log(4)
console.log(5)
console.log(6)

function doSomething(){
    console.log(3)
}
let num = 0;
const intervalID = setInterval(() => {
    console.log(++num)
    if(num === 10){
        clearInterval(intervalID)
    }
}, 1000);

/* // Synchronous
console.log('I')
console.log('eat')
console.log('Ice Cream')
/* Output:
I
eat
Ice Cream */


// Asynchronous
/* console.log('I')
setTimeout(() => {
    console.log('eat')
}, 3000);
console.log('Ice Cream'); */

/* Output:
I
Ice Cream
eat */ 