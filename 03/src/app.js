// class Meetup {
//     constructor(name) {
//         console.log("inside constructor "+ "Name: "+name );
//     }
// }

// let meetup = new Meetup('JS');



class Meetup {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
}

let meetup = new Meetup('JS', 'Blr');
console.log(`Name:${meetup.name} Loc:${meetup.location}`);



let meetup2 = new Meetup('Angular', 'Noida');
console.log(`Name:${meetup2['name']} Loc:${meetup2['location']}`);