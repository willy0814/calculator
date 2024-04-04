import React, {useState} from 'react';

export default function RandomQ(){
    const questionList = [
        'question1',
        'question2',
        'question3',
        'question4',
        'question5'
    ];

    const choicesList = [
        {
            choices:['choice11','choice12','choice13','choice14', 'choice15']
        }, {
            choices:['choice21', 'choice22', 'choice23', 'choice24', 'choice25']
        }, {
            choices:['choice31', 'choice32', 'choice33', 'choice34','choice35']
        }, {
            choices:['choice41', 'choice42', 'choice43', 'choice44', 'choice45']
        }, {
            choices:['choice51','choice52','choice53','choice54', 'choice55']
        }
    ]

    const answerList = [3,4,0,1,2];

    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [tempResult, setTempResult] = useState(Array(5).fill(null))
    const [result, setResult] = useState({ 
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });

    function onClickNext(){
        let nowResult = selectedAnswerIndex;
        let tempArray = [
            ...tempResult
        ];
        tempArray[activeQuestion]=nowResult;
        setTempResult(tempArray);
        setSelectedAnswerIndex(null);
        if(activeQuestion !== questionList.length - 1){
            setActiveQuestion((prev) => prev + 1);
        } else {
            setActiveQuestion(0);
        }
    }
    console.log(tempResult);
    
    function onClickPrev(){
        if(activeQuestion !== 0){
            setActiveQuestion((prev) => prev - 1);
        }
        setSelectedAnswerIndex(tempResult[activeQuestion]);
    }
    
    function onClickFinish(){
        let tempArray = [
            ...tempResult
        ];
        function firstTask(){
            let nowResult = selectedAnswerIndex;
            tempArray[activeQuestion]=nowResult;
            setTempResult(tempArray);
            setSelectedAnswerIndex(null);
        }
        function secondTask(){
            console.log(tempArray);
            for(let i=0; i<questionList.length; i++){
                if(tempArray[i] === answerList[i]){
                    setResult((prev) =>({
                        ...prev,
                        score: prev.score + 5,
                        correctAnswers: prev.correctAnswers + 1
                    }));
                } else {
                    setResult((prev) =>({
                        ...prev,
                        wrongAnswers: prev.wrongAnswers + 1
                    }))
                }
            }
                setShowResult(true);
        }
        firstTask();
        secondTask();
    }

    function onAnswerSelected(index){
        setSelectedAnswerIndex(index)
        if(index === answerList[activeQuestion]){
            setSelectedAnswer(true);
        } else {
            setSelectedAnswer(false);
        }
    }

    return(
        <div className="quiz-container">
        {!showResult ? (
        <>
        <h2>{questionList[activeQuestion]}</h2>
        <ul>
                {choicesList[activeQuestion].choices.map((answer, index) => (
            <li
                onClick={() => onAnswerSelected(index)}
                key={answer}
                className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                {answer}
            </li>
            ))}
        </ul>
        <div className="flex-right">
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null || activeQuestion === questionList.length - 1}>
                    Next
            </button>
            <button onClick={onClickPrev} disabled={activeQuestion === 0}>
                Previous
            </button>
            <button onClick={onClickFinish} disabled={activeQuestion !== questionList.length - 1}>
                Finish
            </button>
        </div>
        </>   
        ) : (
            <div className="result">
            <h3>Result</h3>
            <p>
              Total Question: <span>{questionList.length}</span>
            </p>
            <p>
              Total Score:<span> {result.score}</span>
            </p>
            <p>
              Correct Answers:<span> {result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers:<span> {result.wrongAnswers}</span>
            </p>
          </div>
        )}
    </div>

    )
}