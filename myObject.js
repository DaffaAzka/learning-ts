"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Dest",
    email: "azkadaiki",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Dest", isPaid: true });
function createCourse() {
    return { name: "ReactJS", price: 399 };
}
// Bad syntax
var bad = {
    name: "DeltaGrimn",
    email: "az@gmail.com",
    isActive: true,
    isPaid: true,
    course: "ReactJS"
};
function editUser(user) {
    console.log(user.name);
}
editUser({
    name: "Dest",
    email: "azkadaiki",
    isActive: true
});
var myUser = {
    _id: "123",
    name: "Dest",
    email: "azkadaiki",
    isActive: true
};
