import React, { useState } from 'react';
import './App.css';

function App() {
  const Answers = [
    {
      Answer: "He lost his simecolons and couldn't find them anywhere.",
      State: false,
    },
    {
      Answer: "He lost his semicolons and couldn't find them anywhere.",
      State: true,
    },
    {
      Answer: "He got tired of all the bugs in his code.",
      State: false,
    },
  ];

  const [selectedAnswer, setSelectedAnswer] = useState('');

  return (
    <div>
      <h4>Why did the JavaScript developer quit his job?</h4>
      {Answers.map((Answer, index) => (
        <div
          key={index}
          onClick={() => setSelectedAnswer(index)}
          style={{
            backgroundColor: selectedAnswer === index ? 'lightgray' : 'white',
          }}
        >
          {Answer.Answer}
          <div style={{ backgroundColor: 'green' }}>
            {selectedAnswer === index && Answer.State ? 'correct' : ''}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
