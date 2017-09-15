import { TechMeet } from '../model/tech-meet.js';
import { SportMeet } from '../model/sport-meet.js';
import { ServiceError } from './service-Error.js';

export class MeetupDataService {
    constructor() {
        this.techMeets = [];
        this.sportMeets = [];
        this.serviceErrors = [];
    }

    getTechMeetupById(id) {
        return this.techMeets.find((techMeet) => {
            return techMeet.id === id;
        });
    }

    filterTechMeetupByName(name) {
        return this.techMeets.filter((techMeet) => techMeet.name.indexOf(name) >= 0);
    }

    loadData(meetupData) {
        for (let data of meetupData) {
            switch (data.nature) {
                case 'tech':
                    if (this.validateTechMeetData(data)) {
                        let tm = this.loadTechMeet(data);
                        if (tm) {
                            this.techMeets.push(tm);
                        }
                    } else {
                        let err = new ServiceError('Wrong Tech meetup data', data);
                        this.serviceErrors.push(err);
                    }
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

    validateTechMeetData(meet) {
        let isValid = true;
        if (Number.isNaN(Number.parseInt(meet.members))) {
            let err = new ServiceError(`invalid members data ${meet.members}`, meet);
            this.serviceErrors.push(err);
            isValid = false;
        }
        return isValid;
    }
}