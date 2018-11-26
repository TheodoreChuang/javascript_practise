const students = require("./js_canvas_nodeJs-students");

function listStudents(students) {
  students.students.forEach((student, i) => {
    console.log(`ID: ${i} | Name: ${student.name} | Class: ${student.class}`);
  });
}

listStudents(students);
