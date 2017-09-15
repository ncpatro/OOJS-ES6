import { SportMeet } from './model/sport-meet.js';
import { TechMeet } from './model/tech-meet.js';
import { meetupData } from './meetup-data.js';

import { MeetupDataService } from './services/meetup-data-service.js';

let meetupDataService = new MeetupDataService();
meetupDataService.loadData(meetupData);

let techMeetup = meetupDataService.getTechMeetupById('1');
console.log(techMeetup);

let techMeetups = meetupDataService.filterTechMeetupByName('a');
for (let techMeetup of techMeetups) {
    console.log(techMeetup.name);
}
