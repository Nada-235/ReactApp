import React from 'react';
import '../StudentsList.css';


export default function StudentsList() {
  const students = ['Rusul', 'Sara', 'Yasmin', 'Mais'];

  const ShoutForStudent = (student) => {
    alert(`${student} is here`);
  };

  const StudentList = students.map((student) => (
  <ul>
    <li key={student}>
      <p> {student} </p> <button onClick={() => ShoutForStudent(student)}> Call {student} </button>
    </li>
  </ul>));

  return (
    <div>
      <h1> Students List </h1>
      {StudentList}

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
