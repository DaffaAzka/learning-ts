// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

// if (seat === AISLE) {
//     console.log("Seat is aisle");
// }

enum seatChoice {
    // AISLE = "AISLE", (you must use string value for all enum values)
    AISLE,
    MIDDLE,
    WINDOW,
    // FOURTH = 44
}

const seat = seatChoice.AISLE;

export {}