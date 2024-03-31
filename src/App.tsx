import { useReducer } from "react";

import './App.css';
import Header from './components/Header';
import Score from './components/Score';
import QuizQuests from "./components/QuizQuests";


import { quizQuestion } from "./assets/quizData";
import { useTheme } from "./main";
import { quizReducer } from "./reducer/QuizReducer";

import { State } from "./reducer/QuizReducer";//type import

export interface HandleChange {
  (e: React.FormEvent<HTMLInputElement>, index: number): void
}

export interface HandleSubmit {
  (e: React.SyntheticEvent): void
}

export const initialState: State = {
  quiz: quizQuestion,
  selectedOptionsArray: Array(quizQuestion.length).fill(""),
  score: 0,
  formSubmit: false,
}

const App: React.FC = () => {

const [state, dispatch] = useReducer(quizReducer, initialState);
const { theme } = useTheme();

const handleChange: HandleChange = (e, index) => {
  dispatch({
    type: "ATTEMPTED",
    optionIndex: index,
    optionValue: e.currentTarget.value,
  })
}

const handleSubmit: HandleSubmit = (e) => {
  e.preventDefault();
  dispatch({
    type: "SUBMITTED",
  })
}

return (
  <div className={ `${theme === "light" ? "light-mode" : "dark-mode"} quiz` }>

    <Header title = { "Quiz App using TypeScript" } />

    <QuizQuests 
      quiz = { state.quiz }
      handleChange={ handleChange }
      handleSubmit={ handleSubmit }
      state = { state }
    />

    {state.formSubmit ?

    <Score
      currentScore={state.score}
      totalScore={state.quiz.length}
    />

    : null}
    
  </div>
  )
}

export default App;
