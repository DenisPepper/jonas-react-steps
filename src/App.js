import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

const btnStyle = {
  backgroundColor: 'gold',
  color: 'white',
};

export const App = () => {
  const [step, setStep] = useState(1);

  const changeStep = (order) => {
    order === 'increment' && setStep((prev) => prev < 3 ? (prev + 1) : prev);
    order === 'decrement' && setStep((prev) => prev > 1 ? (prev - 1) : prev);
  };

  const handlePreviusClick = () => changeStep('decrement');

  const handleNextClick = () => changeStep('increment');

  return (
    <div className='steps'>
      <div className='numbers'>
        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
      </div>

      <p className='message'>
        Step {step}: {messages[step - 1]}
      </p>

      <div className='buttons'>
        <button type='button' style={btnStyle} onClick={handlePreviusClick}>
          prev
        </button>
        <button type='button' style={btnStyle} onClick={handleNextClick}>
          next
        </button>
      </div>
    </div>
  );
};
