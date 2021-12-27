import courses from './courses';
import studyGroups from './studyGroups';

type Course = {
    id:           number,
    studyGroupId: number,
    title:        string,
    keywords:     string[],
    eventType:    string
}
type StudyGroup = {
    id: number,
    courseId: number,
    title: string,
    keywords: string[],
    eventType: string
}
type SearchEventOptions = {
  query: string | number,
  eventType: 'courses' | 'groups'
}

function searchEvents(options: SearchEventOptions ) {
  const events: (Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;

  events.filter((event: Course | StudyGroup) => {
    if(typeof options.query === 'number') {
      return options.query === event.id;           
    }
    if(typeof options.query === 'string') {
      return event.keywords.includes(options.query);
    }
  }) 
};

const searchResult = searchEvents({query: 'art', eventType: 'courses'});
console.log(searchResult);