import React, {useEffect, useState, useMemo} from 'react';

const QUIZ_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/quiz';

export default function Quiz() {
    // Write your code here.
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        (async function() {
            const response = await fetch(QUIZ_API_BASE_URL);
            const data = await response.json();
            setQuestions(data);
        })()
    }, [])

    const currentQuestion = questions[currentQuestionIdx];

    const renderAnswers = (currentQuestion, currentQuestionIdx = 0) => {
        return currentQuestion?.answers?.map((answer, index) => {
            let classes = "answer";
            if (index === answers[currentQuestionIdx]) {
                classes += currentQuestion?.correctAnswer == answers[currentQuestionIdx] ? " correct" : " incorrect";
            }
            return (
                <h2
                    className={classes}
                    key={`${answer}-${index}`}
                    onClick={(e) => {
                        if (answers[currentQuestionIdx] != null) return;
                        setAnswers( prev => {
                            const newAnswers = [...prev];
                            newAnswers[currentQuestionIdx] = index;
                            return newAnswers;
                        })
                    }}
                >
                    {answer}
                </h2>
            );
        })
    }

    return (
        <>
            <h1>{questions[currentQuestionIdx]?.question}</h1>
            {
                renderAnswers(currentQuestion, currentQuestionIdx)
            }
            <button
                disabled={currentQuestionIdx === 0}
                onClick={() => setCurrentQuestionIdx(idx => idx - 1)}
            >
                Back
            </button>
            <button
                disabled={currentQuestionIdx === questions.length - 1 || answers[currentQuestionIdx] == null}
                onClick={() => setCurrentQuestionIdx(idx => idx + 1)}
            >
                Next
            </button>
        </>
    );
}