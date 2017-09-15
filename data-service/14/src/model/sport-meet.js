import { Meetup } from './meetup.js';

export class SportMeet extends Meetup {
    constructor(id, name, members) {
        super(id, name, members);
        this.totalPlayHrs = null;
        this.ground = null;
    }
}