import React from 'react';

interface InputFormProps {
  bill: number;
  setBill: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  people: number;
  setPeople: React.Dispatch<React.SetStateAction<number>>;
}

const InputForm: React.FC<InputFormProps> = ({
  bill,
  setBill,
  tip,
  setTip,
  people,
  setPeople,
}) => {
  const tips = [5, 10, 15, 25, 50];

  return (
    <form
      aria-labelledby="input-form-title"
      className="space-y-6"
    >
      <h2 id="input-form-title" className="sr-only">
        Input Form
      </h2>

      {/* Bill Input */}
      <div>
        <label htmlFor="bill" className="block text-Grayish-cyan mb-2">
          Bill
        </label>
        <input
          id="bill"
          name="bill"
          type="number"
          value={bill}
          onChange={(e) => setBill(parseFloat(e.target.value) || 0)}
          className="w-full p-3 text-2xl text-right bg-Very-light-grayish-cyan rounded-lg outline-none focus:ring-2 focus:ring-primary"
          placeholder="0.00"
          aria-label="Enter bill amount"
        />
      </div>

      {/* Tip Percentage Selection */}
      <fieldset className="space-y-3">
        <legend className="block text-Grayish-cyan mb-2">Select Tip %</legend>
        <div className="grid grid-cols-3 gap-3">
          {tips.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTip(t)}
              className={`p-3 text-2xl rounded-lg focus:outline-none ${
                tip === t
                  ? 'bg-Strong-cyan text-white'
                  : 'bg-Very-dark-cyan text-white hover:bg-Strong-cyan hover:text-white'
              }`}
              aria-pressed={tip === t}
            >
              {t}%
            </button>
          ))}
          <input
            type="number"
            onChange={(e) => setTip(parseFloat(e.target.value) || 0)}
            className="p-3 text-2xl text-right bg-Light-grayish-cyan rounded-lg outline-none focus:ring-2 focus:ring-primary"
            placeholder="Custom"
            aria-label="Enter custom tip percentage"
          />
        </div>
      </fieldset>

      {/* Number of People Input */}
      <div>
        <label htmlFor="people" className="block text-Grayish-cyan mb-2">
          Number of People
        </label>
        <input
          id="people"
          name="people"
          type="number"
          value={people}
          onChange={(e) => setPeople(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-full p-3 text-2xl text-right bg-Very-light-grayish-cyan rounded-lg outline-none focus:ring-2 focus:ring-primary"
          placeholder="1"
          aria-label="Enter number of people"
        />
      </div>
    </form>
  );
};

export default InputForm;
