import React, {useState, useEffect} from 'react'

export default function App() {
    const [numbs, setNumbs] = useState('');
    const [equation, setEquation] = useState([]);
    const [renew, setRenew] = useState(false);

    function handleClickNumbers(value){
            setNumbs((currentNumbs) => {
                return currentNumbs + String(value)
            })
            if(renew === true){
                setEquation([]);
                setRenew(false);
            }
    }

    function numbBackSpace(){
        setNumbs((currentNumbs) =>{
            return currentNumbs.slice(0, currentNumbs.length-1)
        })
    }

    function equationBackSpace(){
        setEquation((currentEquation) =>{
            return [
                ...currentEquation.slice(0, currentEquation.length-2)
            ]
        })
    }

    function handleClickOperator(value){
        if(numbs.length === 0){
            return
        } else{
            const tempNumbs = numbs;
            setEquation((currentEquation) =>{
                setNumbs('')
                return [
                    ...currentEquation,
                    tempNumbs, value
                ]
            })
        }
    }

    function handleSubmit(){
        function operation(i){
            const operator = arr[i];
            const number1 = Number(arr[i - 1]);
            const number2 = Number(arr[i + 1]);
            arr.splice(i-1, 2);
            if(operator === '+'){
                arr[i-1] = number1 + number2;
            } else if(operator === '-'){
                arr[i-1] = number1 - number2;
            } else if(operator === '*'){
                arr[i-1] = number1 * number2;
            } else if(operator === '/'){
                arr[i-1] = number1 / number2;
            } 
        }
        const arr = equation
        arr.push(numbs);
        while(true){
            let operated = false;
            for(let i = 0; i < arr.length; i++){
                if (arr[i] === '*' || arr[i] ==='/'){
                    operation(i);
                    operated = true;
                    break;
                }
            }
            if (operated === false){
                break;
            }

        }
        while(true){
            let operated = false;
            for(let i = 0; i < arr.length; i++){
                if (arr[i] === '+' || arr[i] ==='-'){
                    operation(i);
                    operated = true;
                    break;
                }
            }
            if (operated === false){
                break;
            }
        }
        const tempRes = arr[0];
        setNumbs('');
        setEquation([tempRes]);
        setRenew(true);
    }

  return (
    <>
        <section className="screen">
            <div className="screen__equation">
                {equation.join('')+numbs}
            </div>
            <div className="screen__result">
                {numbs}
            </div>
        </section>
        <section className="numbers">
            <div className="row">
                <button onClick={() => handleClickNumbers(7)}>7</button>
                <button onClick={() => handleClickNumbers(8)}>8</button>
                <button onClick={() => handleClickNumbers(9)}>9</button>
            </div>
            <div className="row">
                <button onClick={() => handleClickNumbers(4)}>4</button>
                <button onClick={() => handleClickNumbers(5)}>5</button>
                <button onClick={() => handleClickNumbers(6)}>6</button>
            </div>
            <div className="row">
                <button onClick={() => handleClickNumbers(1)}>1</button>
                <button onClick={() => handleClickNumbers(2)}>2</button>
                <button onClick={() => handleClickNumbers(3)}>3</button>
            </div>
            <div className="row">
                <button onClick={() => handleClickNumbers(0)}>0</button>
                <button onClick={() => numbBackSpace()}>b</button>
                <button onClick={() => equationBackSpace()}>cl</button>
            </div>
            <div className="row">
                <button onClick={() => handleClickOperator('+')}>+</button>
                <button onClick={() => handleClickOperator('-')}>-</button>
                <button onClick={() => handleClickOperator('/')}>/</button>
                <button onClick={() => handleClickOperator('*')}>*</button>
                <button onClick={() => handleSubmit()}>=</button>
            </div>
        </section>
    </>
  )
}
