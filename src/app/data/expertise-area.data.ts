import { ExpertiseAreaSchema } from "@data/schema/expertise-area.schema";
import { site, api, mobile, monitor, speed, search, cloud } from '@icon/regular.icon'


const expertiseAreaData: ExpertiseAreaSchema[] = [
  {
    icon: site,
    percent: '95%',
    name: 'Java Development'
  },
  {
    icon: api,
    percent: '95%',
    name: 'Spring Boot & REST APIs'
  },
  {
    icon: monitor,
    percent: '90%',
    name: 'Microservices Architecture'
  },
  {
    icon: speed,
    percent: '85%',
    name: 'Database Design & Optimization'
  },
  {
    icon: search,
    percent: '80%',
    name: 'Code Quality & Testing'
  },
  {
    icon: cloud,
    percent: '85%',
    name: 'Cloud & DevOps'
  }
];

export default expertiseAreaData
