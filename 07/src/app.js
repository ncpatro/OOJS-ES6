class Meetup {

}

class techMeet extends Meetup {

}

class sportMeet extends Meetup {

}

let js = new techMeet();

console.log(js instanceof techMeet);
console.log(js instanceof Meetup);
console.log(js instanceof Object);