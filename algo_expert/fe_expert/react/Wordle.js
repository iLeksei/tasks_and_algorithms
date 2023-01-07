import React, {useState, useEffect, useRef} from 'react';

const WORD_LIST_API_URL = 'https://api.frontendexpert.io/api/fe/wordle-words';

const BACKSPACE_KEY_CODE = 8;
const ENTER_KEY_CODE = 13;
const DEFAULT_GEUSSES_AMOUNT = 6;
const DEFAULT_LETTER_AMOUNT = 5;
const ONLY_LETTERS_REG_EXP = /^[a-z]+$/;

let grid = Array(DEFAULT_GEUSSES_AMOUNT).fill().map((line, idx) => (
    Array(DEFAULT_GEUSSES_AMOUNT - 1).fill()
))

const definedClasses = (word = [], closestWord = []) => {
    let result = [...word];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === closestWord[i]) {
            result[i] = "correct";
            continue;
        }

        if (closestWord.indexOf(word[i]) !== -1 && word[i] !== closestWord[i]) {
            result[i] = "close";
            continue;
        }

        result[i] = "incorrect";
    }
    return result;
}


export default function Wordle() {
    // Write your code here.
    const [solution, setSolution] = useState([]);
    const [result, setResult] = useState(grid);
    const [currentWord, setCurrentWord] = useState([]);

    const [classes, setClasses] = useState([]);
    const currentLineIdx = useRef(0);
    const currentLetterIdx = useRef(0);
    const solutionRef = useRef([]);
    const stopGameFlag = useRef(false);

    const onKeyPress = (e) => {
        if (stopGameFlag.current) return;
        const isLetter = ONLY_LETTERS_REG_EXP.test(e.key);
        const isBackspace = BACKSPACE_KEY_CODE === e.keyCode;
        const isEnter = ENTER_KEY_CODE === e.keyCode;

        // on press enter
        if (isEnter) {
            if (result[currentLineIdx.current].join("").length < DEFAULT_LETTER_AMOUNT) return;
            let newClasses = definedClasses(result[currentLineIdx.current], solutionRef.current.split(""));
            setClasses(prev => [...prev, newClasses]);
            currentLineIdx.current += 1;
            currentLetterIdx.current = 0;
            console.log(currentLineIdx.current)
            if (currentLineIdx.current === DEFAULT_GEUSSES_AMOUNT) stopGameFlag.current = true;
            return;
        }

        // on delete chars
        if (isBackspace) {
            if (currentLetterIdx.current < 1) return;
            let newResult = [...result];
            newResult[currentLineIdx.current][currentLetterIdx.current - 1] = undefined;
            currentLetterIdx.current -= 1;
            setResult(newResult);
            return;
        }

        // on write chars
        if (!isLetter) return;
        if (currentLetterIdx.current === DEFAULT_LETTER_AMOUNT) return;
        let newResult = [...result];
        newResult[currentLineIdx.current][currentLetterIdx.current] = e.key.toUpperCase()
        setResult(newResult);
        currentLetterIdx.current+=1;
    }

    useEffect(() => {
        (async function onMount() {
            const response = await fetch(WORD_LIST_API_URL);
            const wordleWords = await response.json();
            const pickedSolution = wordleWords[Math.floor(Math.random() * wordleWords.length)];
            setSolution(pickedSolution);
            solutionRef.current = pickedSolution;
        })()
        document.addEventListener("keydown", onKeyPress);
        () => {
            document.removeEventListener("keydown", onKeyPress);
        }
    }, []);

    const renderGrid = () => {
        return result.map((cell, lineIdx) => {
            return (
                <div className={`line`} key={`guess-${lineIdx}`}>
                    {
                        cell.map((letter, letterIdx) => {
                            const classNames = `tile ${classes[lineIdx] ? classes[lineIdx][letterIdx] : ""}`;
                            return (
                                <div className={classNames.trim()} key={`letter-${letterIdx}`}>
                                    {result[lineIdx][letterIdx] || ""}
                                </div>
                            );
                        })
                    }
                </div>
            )
        })
    }

    return (
        <div className="board">
            {solutionRef.current && renderGrid()}
        </div>
    );
}