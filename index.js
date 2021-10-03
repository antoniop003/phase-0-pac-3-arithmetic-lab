function add (a, b) {
    console.log(a + b);
    return(a + b)
    
}
function subtract (a, b) {
    console.log(a - b);
    return(a - b)
}
function multiply (a, b) {
    console.log(a * b);
    return(a * b)
}
function divide (a, b) {
    console.log (a / b);
    return(a / b)
}
function increment (a) {
    var n = a
    console.log(a++);
    return(a)
}
function decrement(a) {
    var n = a
    console.log(a--);
    return(a)
}
function makeInt(string) {
   return parseInt(string,10);
    
}
function preserveDecimal(string) {
    return parseFloat(string);
}
