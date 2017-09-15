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
                    this.techMeets.push(data);
                    break;
                case 'sport':
                    this.sportMeets.push(data);
                    break;
            }
        }
    }
}