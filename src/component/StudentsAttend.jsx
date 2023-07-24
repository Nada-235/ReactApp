import React from 'react';
import '../StudentsList.css';

export default function StudentsAttend() {
  const students = ['Rusul', 'Sara', 'Yasmin', 'Mais'];
  const attenStd = ['Rusul', 'Mais'];

  const shoutForStudentHere = (student) => {
    return <p>{student} is here</p>;
  };

  const shoutForStudentNotHere = (student) => {
    return <p>{student} is not here</p>;
  };

  const studentAttendance = students.map((student) => {
    if (attenStd.includes(student)) {
      return (
        <ul key={student}>
          <li>
            <h2 style={{ color: 'green' }}>{student}</h2>
            {shoutForStudentHere(student)}
          </li>
        </ul>
      );
    } else {
      return (
        <ul key={student}>
          <li>
            <h2 style={{ color: 'red' }}>{student}</h2>
            {shoutForStudentNotHere(student)}
          </li>
        </ul>
      );
    }
  });

  return <div>
    <h1> Student Attendance </h1>
    {studentAttendance}
  </div>;
}