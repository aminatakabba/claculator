import React, { useState } from 'react'
import Number from './Number'
import './Calculator.css'

function Calculator() {
    const [userInput, setUserInput] = useState('0');
    const [memory, setMemory] = useState(null);
    const [operator, setOperator] = useState(null);
 
    const handleButtonPress =  (content) => () => {
        const num = parseFloat(userInput)
        
        if(content === 'AC') {
            setUserInput('0');
            setMemory(null)
            setOperator(null);
            return;
        }

        if(content === '±') {
            setUserInput((num * -1).toString());
            return;
        }

        if(content === '.') {
            if(userInput.includes('.')) return;
            setUserInput(userInput + '.');
            return;
        }        

        if(content === '+') {
            if(operator !== null) {
                if(operator === '+') {
                    setMemory((memory + parseFloat(userInput)));
                } else if (operator === '-') {
                    setMemory((memory - parseFloat(userInput)));
                } else if (operator === '/') {
                    setMemory((memory / parseFloat(userInput)));
                } else if (operator === 'x') {
                    setMemory((memory * parseFloat(userInput)));
                }
            } else {
                setMemory(parseFloat(userInput));
            }
            
            setUserInput('0');
            setOperator('+');
            return;
        }

        if(content === '-') {
            if(operator !== null) {
                if(operator === '+') {
                    setMemory((memory + parseFloat(userInput)));
                } else if (operator === '-') {
                    setMemory((memory - parseFloat(userInput)));
                } else if (operator === '/') {
                    setMemory((memory / parseFloat(userInput)));
                } else if (operator === 'x') {
                    setMemory((memory * parseFloat(userInput)));
                }
            } else {
                setMemory(parseFloat(userInput));
            }
            setUserInput('0');
            setOperator('-');
            return;
        }

        if(content === '/') {
            if(operator !== null) {
                if(operator === '+') {
                    setMemory((memory + parseFloat(userInput)));
                } else if (operator === '-') {
                    setMemory((memory - parseFloat(userInput)));
                } else if (operator === '/') {
                    setMemory((memory / parseFloat(userInput)));
                } else if (operator === 'x') {
                    setMemory((memory * parseFloat(userInput)));
                }
            } else {
                setMemory(parseFloat(userInput));
            }
            setUserInput('0');
            setOperator('/');
            return;
        }

        if(content === 'x') {
            if(operator !== null) {
                if(operator === '+') {
                    setMemory((memory + parseFloat(userInput)));
                } else if (operator === '-') {
                    setMemory((memory - parseFloat(userInput)));
                } else if (operator === '/') {
                    setMemory((memory / parseFloat(userInput)));
                } else if (operator === 'x') {
                    setMemory((memory * parseFloat(userInput)));
                }
            } else {
                setMemory(parseFloat(userInput));
            }
            setUserInput('0');
            setOperator('x');
            return;
        }
        
        if(content === '=') {
            if(!operator) return;
            if(operator === '+') {
                setUserInput((memory + parseFloat(userInput)).toString());
            } else if (operator === '-') {
                setUserInput((memory - parseFloat(userInput)).toString());
            } else if (operator === '/') {
                setUserInput((memory / parseFloat(userInput)).toString());
            } else if (operator === 'x') {
                setUserInput((memory * parseFloat(userInput)).toString());
            }

            setMemory(null);
            setOperator(null);
            return;
        }

        if(userInput[userInput.length -1] === '.') {
            setUserInput(userInput + content);
        } else {
            setUserInput((num + content).toString());
        }

        
    };

    return (
        <div className="calculator">
            <div className="calculator__container">
                <div className="calculator__containerInput" >{userInput}</div>
                
                <div className="calculator__containerNumbers">
                    <Number onButtonClick={handleButtonPress} content='1'/>
                    <Number onButtonClick={handleButtonPress} content='2'/>
                    <Number onButtonClick={handleButtonPress} content='3'/>
                    <Number onButtonClick={handleButtonPress} content='4'/>
                    <Number onButtonClick={handleButtonPress} content='5'/>
                    <Number onButtonClick={handleButtonPress} content='6'/>
                    <Number onButtonClick={handleButtonPress} content='7'/>
                    <Number onButtonClick={handleButtonPress} content='8'/>
                    <Number onButtonClick={handleButtonPress} content='9'/>
                    <Number onButtonClick={handleButtonPress} content='0'/>
                    <Number onButtonClick={handleButtonPress} content='.'/> 
                    <Number onButtonClick={handleButtonPress} content='±'/>
                </div>

                <div><br /></div>

                <div className="calculator__containerOperators">
                    <Number onButtonClick={handleButtonPress} content='+' type="operator"  />
                    <Number onButtonClick={handleButtonPress} content='-' type="operator" />
                    <Number onButtonClick={handleButtonPress} content='/' type="operator" /> 
                    <Number onButtonClick={handleButtonPress} content='x' type="operator" />
                    <Number onButtonClick={handleButtonPress} content='=' type="operator" />
                    <Number onButtonClick={handleButtonPress} content='AC' type="function"/>
                </div>
            </div>
        </div>
    )
}

export default Calculator
