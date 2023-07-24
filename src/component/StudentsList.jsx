import React from 'react';
import '../StudentsList.css';


export default function StudentsList() {
  const students = ['Rusul', 'Sara', 'Yasmin', 'Mais'];

  const shoutForStudent = (student) => {
    alert(`${student} is here`);
  };

  const studentList = students.map((student) => (
  <ul>
    <li key={student}>
      <p> {student} </p> <button onClick={() => shoutForStudent(student)}> Call {student} </button>
    </li>
  </ul>));

  return (
    <div>
      <h1> Students List </h1>
      {studentList}

      {/* <ul>
         {students.map((student) => (
          <li>
            {student}
            <button onClick={() => ShoutForStudent(student)}>
              Call {student}
            </button>
          </li>
        ))} 
      </ul> */}

    </div>
  )





};
