import { useState } from "react";
import Result from "./Result";

const Main = () => {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [customTip, setCustomTip] = useState<number | null>(null);
  const [people, setPeople] = useState<number | string>("");
  const [error, setError] = useState<boolean>(false);

  const validPeople = Number(people) > 0;
  const calculateTipAmount = () => (validPeople ? (bill * (tip / 100)) / Number(people) : 0);
  const calculateTotal = () => (validPeople ? bill / Number(people) + calculateTipAmount() : 0);

  const resetForm = () => {
    setBill(0);
    setTip(0);
    setCustomTip(null);
    setPeople("");
  };

  const errorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    const numericValue = value === "" ? "" : Number(value);

    setPeople(numericValue);
    setError(numericValue === 0 && value !== ""); // Only show error when input is not empty
  };

  return (
    <main className="bg-White mx-auto my-[4.75rem] flex max-w-[57.3rem] flex-col rounded-[24px] p-[1rem] md:flex-row md:p-[2.2rem]">
      <section className="flex-1 p-[0.7rem]">
        <form className="md:pr-[2rem]">
          {/* Bill Input */}
          <label htmlFor="bill" className="text-Dark-grayish-cyan block">
            Bill
          </label>
          <div  className="bg-Very-light-grayish-cyan mt-1 flex w-full items-center rounded-md focus:outline-2 focus:outline-Strong-cyan">
            <span className="text-Grayish-cyan pl-4 text-2xl">$</span>
            <input
              type="number"
              id="bill"
              placeholder="0"
              value={bill || ""}
              min="0"
              className="text-Very-dark-cyan placeholder:text-Grayish-cyan w-full border-0 outline-0 px-3.5 py-2 text-right text-2xl"
              onChange={(e) => setBill(Math.max(0, Number(e.target.value)))}
            />
          </div>

          {/* Tip Selection */}
          <label htmlFor="tip" className="text-Dark-grayish-cyan mt-11 block">
            Select Tip %
          </label>
          <div className="text-White mt-[0.9rem] grid grid-cols-2 gap-4 md:grid-cols-3">
            {[5, 10, 15, 25, 50].map((value) => (
              <button
                key={value}
                type="button"
                className={`grid h-[3rem] w-full place-items-center rounded-md text-2xl cursor-pointer ${
                  tip === value && customTip === null ? "bg-Strong-cyan text-Very-dark-cyan" : "bg-Very-dark-cyan"
                }`}
                onClick={() => {
                  setTip(value);
                  setCustomTip(null); // Reset custom input
                }}
              >
                {value}%
              </button>
            ))}
            <input
              type="number"
              min="0"
              placeholder="Custom"
              value={customTip !== null ? customTip : ""}
              className="bg-Very-light-grayish-cyan text-Very-dark-cyan focus:outline-2 border-0 focus:outline-Strong-cyan h-[3rem] w-full rounded-md text-center text-2xl"
              onChange={(e) => {
                const customValue = Number(e.target.value);
                setCustomTip(customValue);
                setTip(customValue); // Update tip only when user types in Custom
              }}
            />
          </div>

          {/* Number of People */}
          <label htmlFor="people" className="text-Dark-grayish-cyan mt-10 block">
            Number of People
          </label>
          {error && <span className="text-right block text-red-600">Can't be zero</span>}
          <div className={`bg-Very-light-grayish-cyan mt-1 flex w-full items-center rounded-md ${error ? "border-2 border-red-600" : ""}`}>
            <span className="text-Grayish-cyan pl-4 text-2xl">
              <img src="/images/icon-person.svg" alt="" />
            </span>
            <input
              type="number"
              id="people"
              placeholder="0"
              value={people === "" ? "" : people}
              min="0"
              className={`text-Very-dark-cyan w-full border-0 px-3.5 py-2 text-right text-2xl outline-0 ${error ? "border-red-600 outline-red-600" : ""}`}
              onChange={errorHandler}
            />
          </div>
        </form>
      </section>

      {/* Results Component */}
      <Result tip={calculateTipAmount} total={calculateTotal} resetForm={resetForm} />
    </main>
  );
};

export default Main;
