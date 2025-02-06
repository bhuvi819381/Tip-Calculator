import { useState } from "react";
import Result from "./Result";

const Main = () => {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [people, setPeople] = useState<number | string>("");
  const [error, setError] = useState<boolean>(false);

  const calculateTipAmount = () => Number(people) > 0 ? (bill * ((tip ?? 0) / 100)) / Number(people) : 0;
  const calculateTotal = () => Number(people) > 0 ? bill / Number(people) + calculateTipAmount() : 0;
  const resetForm = () => {
    setBill(Number(0));
    setTip(0);
    setPeople("");
  };

  const errorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    const numericValue = value === "" ? "" : Number(value);
    setPeople(numericValue);
    setError(numericValue === 0 && value !== "");
  };

  return (
    <main className="bg-White mx-auto my-[4.75rem] flex max-w-[57.3rem] flex-col rounded-[24px] p-[1rem] md:flex-row md:p-[2.2rem]">
      <section className="flex-1 p-[0.7rem]">
        <form action="" className="md:pr-[2rem]">
          <label htmlFor="bill" className="text-Dark-grayish-cyan block">
            Bill
          </label>
          <div className="bg-Very-light-grayish-cyan active:outline-Strong-cyan mt-1 flex w-full cursor-pointer items-center justify-center rounded-md active:outline-2">
            <span className="text-Grayish-cyan pl-4 text-2xl">$</span>
            <input
              type="number"
              id="bill"
              placeholder="0"
              value={bill === 0 ? "" : bill}
              className="text-Very-dark-cyan placeholder:text-Grayish-cyan w-full appearance-none border-0 px-3.5 py-2 text-right text-2xl outline-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              onChange={(e) => setBill(Number(e.target.value))}
            />
          </div>
          <label htmlFor="tip" className="text-Dark-grayish-cyan mt-11 block">
            Select Tip %
          </label>
          <div className="text-White mt-[0.9rem] grid grid-cols-2 place-items-center gap-4 md:grid-cols-3">
            {[5, 10, 15, 25, 50].map((value) => (
              <button
                key={value}
                type="button"
                className={`grid h-[3rem] w-full cursor-pointer appearance-none place-items-center rounded-md text-2xl [&::-webkit-outer-spin-button]:appearance-none [::-webkit-inner-spin-button]:appearance-none ${
                  tip === value
                    ? "bg-Strong-cyan text-Very-dark-cyan"
                    : "bg-Very-dark-cyan"
                }`}
                onClick={() => setTip(value)}
              >
                {value}%
              </button>
            ))}

            <input
              type="number"
              min="0"
              placeholder="Custom"
              value={tip === undefined ? "" : tip}
              className="bg-Very-light-grayish-cyan text-Dark-grayish-cyan h-[3rem] w-full rounded-md text-center text-2xl"
              onChange={(e) => setTip(Number(e.target.value))}
            />
          </div>
          <label
            htmlFor="people"
            className="text-Dark-grayish-cyan mt-10 inline-block"
          >
            Number of People
          </label>
          {error && (
            <span className="float-end mt-10 inline-block text-red-600">
              Can't be zero
            </span>
          )}
          <div
            className={`bg-Very-light-grayish-cyan active:outline-Strong-cyan mt-1 flex w-full cursor-pointer items-center justify-center rounded-md active:outline-2 ${error ? "border-2 border-red-600" : "border-transparent"}`}
          >
            <span className="text-Grayish-cyan pl-4 text-2xl">
              <img src="/images/icon-person.svg" alt="" />
            </span>
            <input
              type="number"
              id="people"
              placeholder="0"
              value={people === "" ? "" : people} // Show placeholder when empty
              className={`text-Very-dark-cyan placeholder:text-Grayish-cyan w-full appearance-none border-0 px-3.5 py-2 text-right text-2xl outline-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${error ? "border-red-600 outline-red-600" : ""}`}
              onChange={errorHandler}
            />
          </div>
        </form>
      </section>
      <Result
        tip={calculateTipAmount}
        total={calculateTotal}
        resetForm={resetForm}
      />
    </main>
  );
};
export default Main;
