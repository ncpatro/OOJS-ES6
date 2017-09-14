// class Meetup {
//     constructor(organizer) {
//         this.isActive = false;
//     }
// }

// class techMeet extends Meetup {
//     constructor() {
//         super();
//         this.isActive = true;
//     }
// }

// class sportMeet extends Meetup {

// }

// let js = new techMeet();
// console.log(js.isActive); //true


/* ***** 2 ****** */
// class Meetup {
//     organise() {
//         console.log('Organising Meetup');
//     }
// }

// class techMeet extends Meetup {
// }

// class sportMeet extends Meetup {

// }

// let js = new techMeet();
// js.organise();


/* ***** 3 ****** */

class Meetup {
    organise() {
        console.log('Organising Meetup');
    }
}

class techMeet extends Meetup {
    organise() {
        super.organise();
        console.log('Organising techMeet');
        //super.organise();
    }
}

class sportMeet extends Meetup {

}

let js = new techMeet();
js.organise(); // Organising Meetup
// Organising techMeet