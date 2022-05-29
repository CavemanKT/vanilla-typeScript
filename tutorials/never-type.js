"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'asdf';
if (typeof userInput == 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('err occurred', 500);
