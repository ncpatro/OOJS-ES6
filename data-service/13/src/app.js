import { SportMeet } from './model/sport-meet.js';
import { TechMeet } from './model/tech-meet.js';
import { meetupData } from './meetup-data.js';

import { MeetupDataService } from './services/meetup-data-service.js';

let meetupDataService = new MeetupDataService();
meetupDataService.loadData(meetupData);

console.log(meetupDataService.techMeets);
console.log(meetupDataService.sportMeets);

//console.log(meetupData);