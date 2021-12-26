import WikiDip from './components/projects/WikiDip';
import CookingTimers from './components/projects/CookingTimers';
import Dispose from './components/projects/Dispose';
import Onia from './components/projects/Onia';
import AltSchool from './components/projects/AltSchool';

let projects = [
  {
    path: 'wiki-dip',
    component: WikiDip,
    name: 'Wikipedia desktop improvements project',
    description: 'various improvements to the desktop interface of Wikipedia'
  },
  {
    path: 'cooking-timers',
    component: CookingTimers,
    name: 'Cooking timers',
    description: 'a basic timer tool, built with react.js'
  },
  {
    path: 'wiki-kids',
    component: 'WikiKids',
    name: 'Wikipedia for kids',
    description: 'explorations of making Wikipedia more accessible for younger learners'
  },
  {
    path: 'dispose',
    component: Dispose,
    name: 'DISPOSE',
    description: 'an art project / online magazine involving disposable cameras'
  },
  {
    path: 'createbuilddestroy',
    component: 'CreateBuildDestroy',
    name: 'Create Build Destroy',
    description: 'a clothing company i ran with a few friends in college'
  },
  {
    path: 'altschool',
    component: AltSchool,
    name: 'AltSchool',
    description: 'an education technology startup i worked for in san francisco'
  },
  {
    path: 'onia',
    component: Onia,
    name: 'Onia',
    description: 'my first job out of college, designer for a clothing company in nyc'
  },
  {
    path: 'misc',
    component: '',
    name: 'Misc.',
    description: 'a bunch of other bits and pieces'
  }
];

export function getProjects() {
  return projects;
}
