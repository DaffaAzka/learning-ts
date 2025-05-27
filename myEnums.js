"use strict";
// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;
Object.defineProperty(exports, "__esModule", { value: true });
// if (seat === AISLE) {
//     console.log("Seat is aisle");
// }
var seatChoice;
(function (seatChoice) {
    // AISLE = "AISLE", (you must use string value for all enum values)
    seatChoice[seatChoice["AISLE"] = 0] = "AISLE";
    seatChoice[seatChoice["MIDDLE"] = 1] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 2] = "WINDOW";
    // FOURTH = 44
})(seatChoice || (seatChoice = {}));
var seat = seatChoice.AISLE;
