import './App.css';
import Header from './components/Header';
import Question from './components/Question';
import { React, useState } from 'react';
import InfoCard from './components/InfoCard';

function App() {
  var count = 1;
  const [noOfQuestions, setQuestion] = useState([count]);
  const increaseQuestion = () => {
    let current = noOfQuestions.length - 1;
    console.log('chaling');
    count = noOfQuestions[current];
    count++;
    setQuestion(noOfQuestions.concat([count]));
  };

  return (
    <div className='d-flex flex-column'>
      <div>
        <Header />
      </div>
      <div
        className='position-absolute'
        style={{ top: '15vh', width: '100%', marginBottom: '2vh' }}
      >
        <InfoCard />
      </div>
      <div className='flex-fill'>
        {noOfQuestions.map((question) => (
          <Question
            key={question}
            questionNumber={question}
            increaseQuestion={increaseQuestion}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
