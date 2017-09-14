class Meetup {
    organise() {
        console.log('Organising Meetup');
    }

    static getMeetupFounderDetails() {
        console.log("Meetup Founder Details");
    }
}

class techMeet extends Meetup {
    organise() {
        super.organise();
        console.log('Organising techMeet');
    }

    static getMeetupFounderDetails() {
        console.log("Meetup Founder Details2");
        super.getMeetupFounderDetails();
    }
}

class sportMeet extends Meetup {

}

let js = new techMeet();
techMeet.getMeetupFounderDetails();