class Meetup {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    start() {
        console.log(this.name + 'Meetup ' + 'is started at ' + this.location);
    }

    static getAddress() {
        console.log('Returned Adddress');
    }

    // static getAddress() {
    //     console.log('City: '+ this.location );
    // }
}

Meetup.admin = "Adam";
Meetup.getMembers = function () {
    console.log('Returned Members');
}


let meetup = new Meetup('JS', 'Blr');
let meetup2 = new Meetup('Angular', 'Noida');

console.log(Meetup.admin);
console.log(meetup.admin);

Meetup.getMembers();
meetup.getMembers();

Meetup.getAddress();
meetup.getAddress();