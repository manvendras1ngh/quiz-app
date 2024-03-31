import { checkAnswer } from "../utils/checkAnswer";
import { initialState } from "../App";

export interface State {
  quiz: {
    id: string,
    question: string,
    options: string[],
    correctOption: string,
  }[],
  selectedOptionsArray: string[],
  score: number,
  formSubmit: boolean,
}

type Attempted = {
  type: "ATTEMPTED",
  optionIndex: number,
  optionValue: string,
}

type Submitted = {
  type: "SUBMITTED",
}

type Action = Attempted | Submitted;

interface QuizReducer {
  (state: State, action: Action): State;
}

export const quizReducer: QuizReducer = (state, action) => {
  switch(action.type){
      case "ATTEMPTED":
        const newSelectedOption = [...state.selectedOptionsArray];
        newSelectedOption[action.optionIndex] = action.optionValue;

      return {
          ...state,
          selectedOptionsArray: newSelectedOption,
      }
      
      case "SUBMITTED":
        const newScore = checkAnswer(state.selectedOptionsArray);

      return {
        ...state,
        score: newScore,
        formSubmit: true,
      }

      default: 
        return initialState;
  }
}