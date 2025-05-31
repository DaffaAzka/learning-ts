abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) {}

    abstract getSepia(): void

    getNumber(): number {
        return 3
    }
}

// const hitesh = new TakePhoto("blaba", "jsa");

class Instagram extends TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string,
        public brust: string,
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        
    }

}

const hitesh = new Instagram("blaba", "jsa");