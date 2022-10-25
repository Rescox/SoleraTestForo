import './App.css';
import MainForm from './components/MainForm'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useState, useMemo} from 'react';
import { QuestionContext } from './components/context/QuestionContext';



function App() {
  const [id, setId] = ("");
  const [answers, setAnswers] = ([]);
  const providerValue = useMemo(() => ({id, setId, answers, setAnswers}));


  return (
    <Router>
        <QuestionContext.Provider value = {providerValue} >

      <div className="App">
        <Routes>

        <Route exact path='/'  element={<MainForm/>}></Route>
        <Route exact path='/:id'  element={<MainForm/>}></Route>

        </Routes>
      </div>
      </QuestionContext.Provider>

      </Router>
  );
}

export default App;
