import { Meetup } from './meetup.js';

export class TechMeet extends Meetup {
    constructor(id, name, members) {
        super(id, name, members);
        this.totalMeets = null;
        this.sponsor = null;
    }
}