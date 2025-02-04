import React from 'react';

interface ResultProps {
  tipAmount: number;
  total: number;
  reset: () => void;
}

const Result: React.FC<ResultProps> = ({ tipAmount, total, reset }) => {
  return (
    <section
      aria-labelledby="result-title"
      className="bg-Very-dark-cyan text-white p-6 rounded-lg flex flex-col justify-between"
    >
      <h2 id="result-title" className="sr-only">
        Calculation Results
      </h2>

      {/* Tip Amount */}
      <div className="space-y-4">
        <div className="flex justify-between text-xl">
          <p>Tip Amount <span className="text-sm">/ person</span></p>
          <p className="text-2xl">${tipAmount.toFixed(2)}</p>
        </div>

        {/* Total */}
        <div className="flex justify-between text-xl">
          <p>Total <span className="text-sm">/ person</span></p>
          <p className="text-2xl">${total.toFixed(2)}</p>
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={reset}
        className="mt-6 bg-primary text-veryDarkCyan text-xl p-3 rounded-lg hover:bg-lightGrayishCyan focus:outline-none focus:ring-2 focus:ring-lightGrayishCyan"
        aria-label="Reset all values"
      >
        RESET
      </button>
    </section>
  );
};

export default Result;
