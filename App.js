import './App.css'
import { useState } from 'react';

function App() {
  // const [aa, setAA] = useState()

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [radioValue, setRadioValue] = useState();

  const quiz = [
    {
      "question": "What is the capital of France?",
      "answers": ["London", "Berlin", "Paris", "Tokyo"],
      "correctAnswer": "Paris"
    },
    {
      "question": "What is the largest ocean on Earth?",
      "answers": ["Atlantic", "Pacific", "Indian", "Arctic"],
      "correctAnswer": "Pacific"
    },
    {
      "question": "Who is the author of the Harry Potter series?",
      "answers": ["J.K. Rowling", "C.S. Lewis", "Stephen King", "George R.R. Martin"],
      "correctAnswer": "J.K. Rowling"
    },
    {
      "question": "What is the chemical formula for water?",
      "answers": ["CO₂", "N₂", "O₂", "H₂O"],
      "correctAnswer": "H₂O"
    },
    {
      "question": "What is the tallest mountain in the world?",
      "answers": ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      "correctAnswer": "Mount Everest"
    }];


  function next() {
    let temp = score;
    if (quiz[index].correctAnswer === radioValue) {
      temp = temp + 10;
    }
    setScore(temp);
    setIndex(index + 1);
  }
  function finish() {
  
      alert(`Your score is ${score}`);  
  }  

  return (

    <div className="App">
      <header className="App-header">


        <h3>{quiz[index].question}</h3>

        <div>
          <input type='radio' name='radioValue' value={quiz[index].answers[0]} onChange={e => setRadioValue(e.target.value)} />
          {quiz[index].answers[0]}
        </div>

        <div>
          <input type='radio' name='radioValue' value={quiz[index].answers[1]} onChange={e => setRadioValue(e.target.value)} />
          {quiz[index].answers[1]}
        </div>

        <div>
          <input type='radio' name='radioValue' value={quiz[index].answers[2]} onChange={e => setRadioValue(e.target.value)} />
          {quiz[index].answers[2]}
        </div>

        <div>
          <input type='radio' name='radioValue' value={quiz[index].answers[3]} onChange={e => setRadioValue(e.target.value)} />
          {quiz[index].answers[3]}
        </div>

        <br></br>

        {index < quiz.length-1
          ?
          <button onClick={next}>Next Question</button>
          :
          <button onClick={finish}>Finish</button>

        }

        <h3>Your Score is {score}</h3>


        {radioValue}

        {/* <input value='male' name='aa' type='radio' onChange={e=>setAA(e.target.value)}/>
<h3>male</h3>
<input value='female' name='aa' type='radio' onChange={e=>setAA(e.target.value)}/>
<h3>female</h3>
{aa} */}


      </header>
    </div >
  )
}
export default App;