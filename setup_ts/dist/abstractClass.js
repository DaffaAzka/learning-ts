"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getNumber() {
        return 3;
    }
}
// const hitesh = new TakePhoto("blaba", "jsa");
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, brust) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
    }
    getSepia() {
    }
}
const hitesh = new Instagram("blaba", "jsa");
