import { useState } from 'react';

const INITIAL_MESSAGE_NUMBER_STATE = 1;
const INITIAL_OPEN_STATE = true;

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

const btnStyle = {
  backgroundColor: 'green',
  color: 'white',
};

const getMessageDescription = (counter, date) => {
  date.setDate(date.getDate() + counter);
  let intro = 'Today is';
  counter > 0 && (intro = `${Math.abs(counter)} days from today is`);
  counter < 0 && (intro = `${Math.abs(counter)} days ago was`);
  return `${intro} ${date.toDateString()}`;
};

export const App = () => {
  return (
    <>
      <Steps />
      <DateCounter />
    </>
  );
};

const Steps = () => {
  const [step, setStep] = useState(INITIAL_MESSAGE_NUMBER_STATE);
  const [isOpen, setIsOpen] = useState(INITIAL_OPEN_STATE);

  const changeStep = (order) => {
    order === 'increment' && setStep((prev) => (prev < 3 ? prev + 1 : prev));
    order === 'decrement' && setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handlePreviusClick = () => changeStep('decrement');

  const handleNextClick = () => changeStep('increment');

  return (
    <div>
      <button className='close' onClick={() => setIsOpen((prev) => !prev)}>
        &times;
      </button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className='message'>
            Step {step}: {messages[step - 1]}
          </p>

          <div className='buttons'>
            <Button
              style={btnStyle}
              onClick={handlePreviusClick}
              disabled={step <= 1}
            >
              👈 prev
            </Button>
            <Button
              style={btnStyle}
              onClick={handleNextClick}
              disabled={step >= 3}
            >
              next 👉
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const Button = (props) => {
  const { children, onClick, disabled, style } = props;
  return (
    <button type='button' style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

const DateCounter = () => {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  return (
    <div className='date-counter'>
      <div>
        <button
          type='button'
          style={btnStyle}
          onClick={() => setStep((prev) => (prev > 1 ? prev - 1 : prev))}
          disabled={step === 1}
        >
          &#8722;
        </button>
        <span>Step: {step}</span>
        <button
          type='button'
          style={btnStyle}
          onClick={() => setStep((prev) => prev + 1)}
        >
          &#43;
        </button>
      </div>
      <div>
        <button
          type='button'
          style={btnStyle}
          onClick={() => setCounter((prev) => prev - step)}
        >
          &#8722;
        </button>
        <span>Counter: {counter}</span>
        <button
          type='button'
          style={btnStyle}
          onClick={() => setCounter((prev) => prev + step)}
        >
          &#43;
        </button>
      </div>
      <div className='message'>
        {getMessageDescription(counter, new Date())}
      </div>
    </div>
  );
};
