function manipulatingString(inputString,cback){
    const manipulatedString = inputString.toUpperCase()
    cback(manipulatedString)

}
// function to call the above functions and pass in a callback function as an argument
function logString(manipulatedString){
    console.log(`The manipulated string is : ${manipulatedString}`);
}

manipulatingString("hello,friend",logString)