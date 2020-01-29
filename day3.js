const students = [
  {
    name: 'Harish 🙋‍♂️',
    courses: [
      { id: 1, level: 2 },
      { id: 2, level: 3 }
    ]
  },
  {
    name: 'Lisa 🙍‍♀️',
    courses: [{ id: 3, level: 1 }]
  },
  { name: 'Adam 👦' }
];

const skills = [
  { level: 1, points: 10 },
  { level: 2, points: 20 },
  { level: 3, points: 30 }
];

const lessons = [
  { id: 1, course: 'Angular 8' },
  { id: 2, course: 'Javascript Tutorial' },
  { id: 3, course: 'React Native' }
];

// ('NOT THAT 💩');

const mapCoursesAndSkills = _ =>
  students.map(({ name, courses }) => {
    return {
      name,
      courses: (courses || []).map(({ id, level }) => {
        return {
          ...lessons.find(lesson => lesson.id === id),
          ...skills.find(skill => skill.level === level)
        };
      })
    };
  });

console.log(mapCoursesAndSkills());

// [{  name: 'Harish 🙋‍♂️',
//     courses: [
//       { id: 1, course: 'Angular 8', points: 20, level: 2 },
//       { id: 2, course: 'Javascript Tutorial', points: 30, level: 3 }
//     ]
//   },
//   {
//     name: 'Lisa 🙍‍♀️',
//     courses: [{ id: 3, course: 'React Native', points: 10, level: 1 }]
//   },
//   { name: 'Adam 👦', courses: [] }]

// ('CODE THIS ✔️') Class;

class Student {
  courses = [];
  constructor(name, courses) {
    this.name = name;
    this.courses = courses;
    this.mapLessons();
  }

  mapLessons() {
    this.courses = this.courses.map(({ id, level }) => {
      return {
        ...lessons.find(lesson => lesson.id === id),
        ...skills.find(skill => skill.level === level)
      };
    });
  }

  get detail() {
    return { name: this.name, courses: this.courses };
  }
}

const harish = new Student('Harish 🙋‍♂️', [
  { id: 1, level: 2 },
  { id: 2, level: 3 }
]);

console.log(harish.detail);
// { name: 'Harish 🙋‍♂️',
//   courses: [
//     { id: 1, course: 'Angular 8', level: 2, points: 20 },
//     { id: 2, course: 'Javascript Tutorial', level: 3, points: 30 }]
// }

// CODE THIS ✔️ on Order of Priority❗️
// ----------------------------------

// ❗️❗️ One line functions are not always useful for complex object maping

// ❗️❗️ Prefer to use class over functions
//      ✔️ Provides Getter Setter methods
//      ✔️ Can have public and private values
//      ✔️ Static values specific to Class
//      ✔️ Can use ❗️❗️ Inheritance ❗️❗️
//      ✔️ Allows better scalabilty over time
//      ✔️ Can perform certain tasks when a class is instantiated
//      ✔️ Better Code readability
//      ✔️ and much more..

// Did I miss something ❓
// Do leave it in Comments below 💭
