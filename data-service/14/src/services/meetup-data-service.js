import { TechMeet } from '../model/tech-meet.js';
import { SportMeet } from '../model/sport-meet.js';

export class MeetupDataService {
    constructor() {
        this.techMeets = [];
        this.sportMeets = [];
    }

    loadData(meetupData) {
        for (let data of meetupData) {
            switch (data.nature) {
                case 'tech':
                    let tm = this.loadTechMeet(data);
                    this.techMeets.push(tm);
                    break;
                case 'sport':
                    let sm = this.loadSportMeet(data);
                    this.sportMeets.push(sm);
                    break;
            }
        }
    }

    loadTechMeet(meet) {
        let tm = new TechMeet(meet.id, meet.name, meet.members);
        tm.sponsor = meet.sponsor;
        tm.totalMeets = meet.totalMeets;
        return tm;
    }

    loadSportMeet(meet) {
        let sm = new SportMeet(meet.id, meet.name, meet.members);
        sm.ground = meet.ground;
        sm.totalPlayHrs = meet.totalPlayHrs;
        return sm;
    }
}