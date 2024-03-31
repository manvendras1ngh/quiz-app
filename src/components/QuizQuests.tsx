import { State } from "../reducer/QuizReducer"//type import
import { HandleChange, HandleSubmit } from "../App"//type import

interface QuizQuestsPropsType {
    quiz: {
        id: string,
        question: string,
        options: string[],
        correctOption: string,
    }[],
    handleChange: HandleChange,
    handleSubmit: HandleSubmit,
    state: State,
}


const QuizQuests: React.FC<QuizQuestsPropsType> = ({quiz, handleSubmit, handleChange, state}) => {
    return(
        <form onSubmit={ (e) => handleSubmit(e) } className="quiz-form">
            {quiz.map( (questionSet, index) => {
                return(
                    <div key = {questionSet.id} className="quiz-card">
                        <p className="quiz-card__question">
                        Q.{ index + 1 }. {questionSet.question}
                        </p>

                        { questionSet.options.map((option, optionIndex) => {
                            const isCorrect = questionSet.correctOption === option && state.formSubmit;
                            const isSelectedAndIncorrect = state.selectedOptionsArray[index] === option && state.formSubmit;
                            const backgroundColorClassName = isCorrect ? "quiz-card__option--green-bg" : (isSelectedAndIncorrect ? "quiz-card__option--red-bg" : "");

                            return(
                                <div key={ optionIndex } className={`quiz-card__option ${backgroundColorClassName}`}>
                                    <label>
                                    <input
                                        type="radio"
                                        value={ option }
                                        onChange={ (e) => handleChange(e,index) }
                                        checked={state.selectedOptionsArray[index] === option}
                                        disabled={state.formSubmit}
                                    />
                                    {option}
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
            <button disabled = {state.formSubmit} >submit</button>
        </form>
    )
}

export default QuizQuests;