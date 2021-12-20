import WikiDip from "./components/projects/WikiDip";
import CookingTimers from "./components/projects/CookingTimers";

let projects = [
  {
    path: 'wiki-dip',
    component: WikiDip,
    name: 'Wikipedia: desktop improvements project',
    description: 'various improvements to the desktop interface of Wikipedia',
    content: '<h1>Desktop improvements project</h1>'
  },
  {
    path: 'cooking-timers',
    component: CookingTimers,
    name: 'Cooking timers',
    description: 'a basic timer tool, built with react.js',
    content: '<h1>Cooking timers</h1>'
  },
  {
    path: 'wiki-kids',
    component: 'WikiKids',
    name: 'Wikipedia for kids',
    description: 'explorations of making Wikipedia more accessible for younger learners',
    content: '<h1>Wikipedia for kids</h1>'
  },
  {
    path: 'dispose',
    component: 'Dispose',
    name: 'DISPOSE',
    description: 'an art project / online magazine involving disposable cameras',
    content: '<h1>Dispose</h1>'
  },
  {
    path: 'createbuilddestroy',
    component: 'CreateBuildDestroy',
    name: 'Create Build Destroy',
    description: 'a clothing company i ran with a few friends in college',
    content: '<h1>Create Build Destroy</h1>'
  },
  {
    path: 'altschool',
    component: 'AltSchool',
    name: 'AltSchool',
    description: 'an education technology startup i worked for in san francisco',
    content: '<h1>AltSchool</h1>'
  },
  {
    path: 'onia',
    component: 'Onia',
    name: 'Onia',
    description: 'my first job out of college, designer for a clothing company in nyc',
    content: '<h1>Onia</h1>'
  }
];

export function getProjects() {
  return projects;
}

export function pathComponentObject() {
  var obj = {};
  projects.forEach(element => {
    obj[element.path] = element.component;
  });
  return obj;
}
