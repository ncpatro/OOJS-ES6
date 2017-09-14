class Meetup {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    start() {
        console.log(this.name + 'Meetup ' + 'is started at ' + this.location);
    }
}

let meetup = new Meetup('JS', 'Blr');
let meetup2 = new Meetup('Angular', 'Noida');

meetup.start();
meetup2.start();