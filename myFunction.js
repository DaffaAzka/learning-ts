"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(n) {
    // n.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'. 
    return n += 2;
}
function getUpper(s) {
    return s.toUpperCase();
}
function signUp(username, email, isPaid) {
}
var loginUser = function (email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("hello");
signUp("Daffa Azka", "azka@gmail.com", true);
loginUser("Dest", "deltaka@gmail.com");
