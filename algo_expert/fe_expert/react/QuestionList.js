import React, {useEffect, useState} from 'react';

const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        // can we skip it here? :)
    }
    return Promise.resolve(null)
}

const DEFAULT_STATE = {
    CSS: {
        questions: [],
        completed: 0,
    },
    HTML: {
        questions: [],
        completed: 0,
    },
    "DOM Manipulation": {
        questions: [],
        completed: 0,
    },
    JavaScript: {
        questions: [],
        completed: 0,
    }
};

function getQuestionClasses(status = "") {
    return `status ${status?.toLowerCase()?.replace("_", "-") || "unattempted"}`.trim();
}

const mapDataToState = (questions = [], submissions = []) => {
    let result = JSON.parse(JSON.stringify(DEFAULT_STATE));
    for (let question of questions) {
        let submission = submissions.find( sub => sub.questionId === question.id);
        let category = result[question.category];
        category.questions.push({
            ...question,
            status: submission?.status || null,
        });
        if (submission?.status === "CORRECT") {
            category.completed++;
        }
    };

    return result;
};



export default function QuestionList() {
    // Write your code here.
    const [data, setData] = useState(DEFAULT_STATE);

    useEffect(() => {
        (async function() {
            const data = await Promise.all([
                fetchData(QUESTIONS_API_BASE_URL),
                fetchData(SUBMISSIONS_API_BASE_URL)
            ])
            const questions = data[0];
            const submissions = data[1];
            const mappedData = mapDataToState(questions, submissions);
            setData(mappedData);
        })();
    }, [])

    const renderList = (questions = []) => {
        return questions.map((question, idx) => {
            return (
                <Question
                    key={`${question.name}-${idx}`}
                    status={question.status}
                    name={question.name}
                />
            );
        })
    }

    return (
        <>
            <Category title={`HTML - ${data.HTML.completed} / ${data.HTML.questions.length}`}>
                {renderList(data.HTML.questions)}
            </Category>
            <Category title={`CSS - ${data.CSS.completed} / ${data.CSS.questions.length}`}>
                {renderList(data.CSS.questions)}
            </Category>
            <Category title={`JavaScript - ${data.JavaScript.completed} / ${data.JavaScript.questions.length}`}>
                {renderList(data.JavaScript.questions)}
            </Category>
            <Category title={`DOM Manipulation - ${data["DOM Manipulation"].completed} / ${data["DOM Manipulation"].questions.length}`}>
                {renderList(data["DOM Manipulation"].questions)}
            </Category>
        </>
    );
}

function Category(props) {
    return (
        <div className="category">
            <h2>{props.title}</h2>
            {
                props.children
            }
        </div>
    );
}

function Question({status, name}) {
    return (
        <div className="question">
            <div className={getQuestionClasses(status)}></div>
            <h3>{name}</h3>
        </div>
    );
}