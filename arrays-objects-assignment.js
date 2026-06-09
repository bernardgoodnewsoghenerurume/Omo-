const students = [ 
    { id: 1, 
      name: "Alice",
      age: 20,
       grades: [85, 92,78], 
    }, 
    { id: 2,
      name: "John", 
      age: 21, 
      grades: [75, 80, 70], 
    },
    { id:3,
     name: "Mary",
     age: 19, 
     grades: [55, 60, 58], 
    }, 
    { id: 4, 
      name:"David", 
      age: 22, 
      grades: [95, 88, 92], }, 
      { id: 5, 
        name: "Sarah", 
        age:20, 
        grades: [45, 50, 55], 
    },
];

function calculateAverage(grades) { 
    const total = grades.reduce((sum,grade) => sum + grade, 0);
     const average = total / grades.length;
      return Number(average.toFixed(2));
     }

const studentsWithAverage = students.map((student) => {
     return {
        student, average: calculateAverage(student.grades),
     }; });

function getPassingStudents(students) { 
    return students.filter((student) => student.average >= 60); }

const passing = getPassingStudents(studentsWithAverage);

function processStudents(students, callback) { return
students.map(callback); }

function addLetterGrade(student) { let letterGrade;

if (student.average >= 90) {
     letterGrade = "A"; 
} else if (student.average >= 80) {
     letterGrade = "B"; 
    } else if (student.average >= 70) { 
        letterGrade = "C";
     } else if(student.average >= 60) {
         letterGrade = "D";
         } else {
             letterGrade = "F";
}

return {student, letterGrade, }; }

function addStatus(student) { return {student, status:
student.average >= 60 ? "Pass" : "Fail", }; }

const studentsWithGrades = processStudents( studentsWithAverage,
addLetterGrade );

const studentsWithStatus = processStudents( studentsWithAverage,
addStatus );

function findStudentById(students, id) { const student =
students.find((student) => student.id === id); return student || null; }

const student = findStudentById(students, 3);

console.log("Original Students:"); console.log(students);

console.log("\nStudents With Average:");
console.log(studentsWithAverage);

console.log("\nPassing Students:"); console.log(passing);

console.log("\nStudents With Letter Grades:");
console.log(studentsWithGrades);

console.log("\nStudents With Status:"); console.log(studentsWithStatus);

console.log("\nFind Student By ID (3):"); console.log(student);

console.log("\nFind Student By ID (99):");
console.log(findStudentById(students, 99));
