interface ScoreProps {
    currentScore: number;
    totalScore: number;
}

const Score: React.FC<ScoreProps> = ({ currentScore, totalScore }) => {
    return(
        <div className="score-card">
            <p className="score-card__score">You Scored : { currentScore } / { totalScore }</p>
        </div>
    )
}

export default Score;