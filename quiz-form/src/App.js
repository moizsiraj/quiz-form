import './App.css';
import Header from './components/Header';
import Question from './components/Question';
import { React, useState } from 'react';
import InfoCard from './components/InfoCard';

function App() {
  var count = 0;
  const [noOfQuestions, setQuestion] = useState([count]);

  const increaseQuestion = () => {
    let current = noOfQuestions.length - 1;
    console.log('chaling');
    count = noOfQuestions[current];
    count++;
    setQuestion(noOfQuestions.concat([count]));
  };

  const deleteQuestion = (questionNumber) => {
    setQuestion(
      noOfQuestions.filter((question) => question !== questionNumber)
    );
    console.log('okayyyy');
  };

  return (
    <div className='d-flex flex-column'>
      <div>
        <Header />
      </div>
      <div className='info'>
        <InfoCard />
      </div>
      <div className='flex-fill'>
        {noOfQuestions.map((question) => (
          <Question
            key={question}
            questionNumber={question}
            increaseQuestion={increaseQuestion}
            deleteQuestion={deleteQuestion}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
