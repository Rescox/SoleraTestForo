import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import "./MainForm.css";
import Select from "react-select";
import { QuestionContext } from './context/QuestionContext';



import { Link, useParams } from "react-router-dom";

function MainForm() {
  const {idUser, setIdUser, answerListDef, setAnswerListDef} = useContext(QuestionContext);
  const [answerUser, setAnswerUser] = useState([]);
  const [idQuestion, setIdQuestion] = useState(0);
  const [fullQuestion, setFullQuestion] = useState([]);
  const [postUrl, setPostUrl] = useState("")
  const [questionOptions, setQuestionOptions] = useState([])
  const [url, setUrl] = useState("");
  const [submitBool, setSubmitBool] = useState(false)


 const [answerList, setAnswerList] = useState([])



  const params = useParams();



  const optionNumber = [
    {value: 1, label: 1},
    {value: 2, label: 2},
    {value: 3, label: 3},
    {value: 4, label: 4},
    {value: 5, label: 5},
    {value: 6, label: 6},
    {value: 7, label: 7},
    {value: 8, label: 8},
    {value: 9, label: 9},
    {value: 10, label: 10},
  ]



  const optionsAge = [
    { value: "0", label: "< 2" },
    { value: "1", label: "2-9" },
    { value: "2", label: "> 9" },
  ];


  const setAnswer = (e) => {
    e.preventDefault()
    let answerWithId = {
      id: idQuestion,
      answer: answerUser
    }
    setIdQuestion(Number(idQuestion)+1);
    answerList.push(answerWithId);
    console.log(answerList)
    setAnswerList(answerList);
  } 

  const getQuestions = async (id) => {
    let questionValues = [];
    //const { data } = await axios.get(
    //  "http://localhost:8080/api/flights/" + id
    //);
    let question = {
      text: "¿Cómo de satisfecho estás con el bootcamp?",
      type: "number",
      options: [1,2,3,4,5,6,7,8,9],
    }
    setFullQuestion(question);
    if(question.options != []) { 
      questionValues = question.options.map((option, i) =>  
      <option key={i}  value={option}>{option}</option>);  
    }
    setQuestionOptions(questionValues);
  };


  
  
  useEffect(() => {        
    setIdQuestion(Number(params.id));
    setPostUrl(idQuestion + 1)
    setUrl("/" + postUrl);
    getQuestions(Number(params.id))
  }, []);
  
  return (
  
    <div className="CreatePost">
      <h1 className="CreatePostText">Questionary</h1>
      <form action = {Number(idQuestion)+1} onSubmit ={ (e) => {setAnswer(e); getQuestions(idQuestion); setSubmitBool(false)}}>
     
            <h2  className="CreatePostText">Question number {idQuestion}</h2>
            <label className="labelQuestion">{fullQuestion.text}</label>
            { fullQuestion.type != 'select' ? 
            <input 
              type={fullQuestion.type}
              className="formQuestion"
              onChange={(e) => {setAnswerUser(e.target.value); setSubmitBool(true)}}>
            </input>
        : 
        
            <select className="formQuestion" id="formQuestion"  onChange={(e) => {setAnswerUser(e.target.value); setSubmitBool(true)}}>
              {questionOptions}
              
            </select>
          }
          { submitBool ?
        <input className="Submitform" id="submit" type="submit" value="Submit"></input>
        :
        <input disabled className="Submitform" id="submit" type="submit" value="Submit"></input>

          }

        <input className="Submitform" id="submit" type="submit" value="Finalizar"></input>

          
      </form>
      <div className="containerGrid">
        <div><a className="numberQuestion" href="/1">1</a></div>
        <div><a className="numberQuestion" href="/2">2</a></div>
        <div><a className="numberQuestion" href="/3">3</a></div>
        <div><a className="numberQuestion" href="/4">4</a></div>
        <div><a className="numberQuestion" href="/5">5</a></div>
        <div><a className="numberQuestion" href="/6">6</a></div>
        <div><a className="numberQuestion" href="/7">7</a></div>
        <div><a className="numberQuestion" href="/8">8</a></div>
        <div><a className="numberQuestion" href="/9">9</a></div>
        <div><a className="numberQuestion" href="/10">10</a></div>
        <div><a className="numberQuestion" href="/11">11</a></div>
        <div><a className="numberQuestion" href="/12">12</a></div>
        <div><a className="numberQuestion" href="/13">13</a></div>
        <div><a className="numberQuestion" href="/14">14</a></div>
      </div>
    </div>
  );
}
export default MainForm;
