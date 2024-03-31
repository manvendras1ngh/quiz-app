import { quizQuestion } from "../assets/quizData";

interface CheckAnswer {
    (userAnswerArray: string[]): number;
}

export const checkAnswer: CheckAnswer = function(userAnswerArray) {
    let currentScore = 0;
    for (let i = 0; i < quizQuestion.length; i++){
        if(userAnswerArray[i].toLowerCase() === quizQuestion[i].correctOption.toLowerCase()){
          currentScore ++;
        }
    }
    return currentScore;
}