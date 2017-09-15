import { TechMeet } from '../model/tech-meet.js';
import { SportMeet } from '../model/sport-meet.js';
import { ServiceError } from './service-Error.js';

export class MeetupDataService {
    constructor() {
        this.techMeets = [];
        this.sportMeets = [];
        this.serviceErrors = [];
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
                default:
                    let err = new ServiceError('Wrong meetup', data);
                    this.serviceErrors.push(err);
                    break;
            }
        }
    }

    loadTechMeet(meet) {
        try {
            let tm = new TechMeet(meet.id, meet.name, meet.members);
            tm.sponsor = meet.sponsor;
            tm.totalMeets = meet.totalMeets;
            return tm;
        } catch (e) {
            let err = new ServiceError('error during loading TechMeetups', meet);
            this.serviceErrors.push(err);
        }
        return null;
    }

    loadSportMeet(meet) {
        let sm = new SportMeet(meet.id, meet.name, meet.members);
        sm.ground = meet.ground;
        sm.totalPlayHrs = meet.totalPlayHrs;
        return sm;
    }
}