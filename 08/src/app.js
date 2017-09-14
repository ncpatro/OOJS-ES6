// class Meetup {
//     constructor() {
//         console.log("inside Meetup constructor");
//     }
// }

// class techMeet extends Meetup {

// }

// class sportMeet extends Meetup {

// }

// let js = new techMeet();

/* ***** 2 ****** */
// class Meetup {
//     constructor() {
//         console.log("inside Meetup constructor");
//     }
// }

// class techMeet extends Meetup {
//     constructor() {
//         super();
//         console.log("inside techMeet constructor");
//     }
// }

// class sportMeet extends Meetup {

// }

// let js = new techMeet();


/* ***** 3 ****** */
// class Meetup {

// }

// class techMeet extends Meetup {
//     constructor() {
//         super();
//         console.log("inside techMeet constructor");
//     }
// }

// class sportMeet extends Meetup {

// }

// let js = new techMeet();

/* ***** 4 ****** */

class Meetup {
    constructor(organizer) {
        this.organizer = organizer;
    }
}

class techMeet extends Meetup {
    constructor(organizer) {
        super(organizer);
    }
}

class sportMeet extends Meetup {

}

let js = new techMeet('Mr. JS');
console.log(js.organizer);