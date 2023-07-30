import { React, useState } from 'react';
import './App.css'


function App() {
  const [AnswState, setAnswState] = useState(false)
  const Answers = [
    {
      Answer: "He lost his simecolons and couldn't find them anywhere.",
      State: false
    },
    {
      Answer: "He lost his semicolons and couldn't find them anywhere.",
      State: true
    },
    {
      Answer: "He got tired of all the bugs in his code.",
      State: false
    },
  ]
  console.log(AnswState);
  return (
    <div >
      <h4> Why did the JavaScript developer quite his job ?</h4>
      {Answers.map(
        (Answer) => {
          return (
            // < AnswerCom  Answer={Answer} Check={Answer.State}/>
            <div onClick={() => setAnswState(Answer.State)} >
              {Answer.Answer}

              <div style={{
                backgroundColor: 'red'
              }}>
                {
                  AnswState && AnswState === Answer.State ? "correct" : ""
                }
              </div>
            </div>
          )
        }
      )}
      <div />

    </div>
  );
}

   

export default App;