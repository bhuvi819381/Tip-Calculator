import React, { useState } from "react";
import InputForm from "./components/InputForm";
import Result from "./components/Result";

const App: React.FC = () => {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(15);
  const [people, setPeople] = useState<number>(1);

  const calculateTipAmount = () => (bill * (tip / 100)) / people || 0;
  const calculateTotal = () => bill / people + calculateTipAmount() || 0;

  return (
    <>
      <header className="mt-[4.5rem] md:mt-[12.5rem]">
        <h1 className="ml-3 text-center text-2xl leading-[2.2rem] font-bold tracking-[0.6rem] text-Very-dark-cyan">
          SPLI
          <br />
          TTER
        </h1>
      </header>
      <main className="bg-White mx-auto my-19 flex flex-col md:flex-row max-w-[57.3rem] rounded-[24px] p-[1rem] md:p-[2rem]">
        <section className="flex-1  p-[0.7rem]">
          <form action="" className=" md:pr-[2rem]">
            <label htmlFor="bill" className="text-Dark-grayish-cyan block">
              Bill
            </label>
            <div className="bg-Very-light-grayish-cyan active:outline-Strong-cyan mt-1 flex w-full cursor-pointer items-center justify-center rounded-md active:outline-2">
              <span className="text-Grayish-cyan pl-4 text-2xl">$</span>
              <input
                type="number"
                id="bill"
                placeholder="0"
                className="text-Very-dark-cyan placeholder:text-Grayish-cyan w-full appearance-none border-0 px-3.5 py-2 text-right text-2xl outline-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>
            <label htmlFor="tip" className="text-Dark-grayish-cyan mt-11 block">
              Select Tip %
            </label>
            <div className="text-White mt-[0.9rem] grid grid-cols-2 md:grid-cols-3 place-items-center gap-4">
              <button className="bg-Very-dark-cyan grid h-[3rem] w-full place-items-center rounded-md text-2xl">
                5%
              </button>
              <button className="bg-Very-dark-cyan grid h-[3rem] w-full place-items-center rounded-md text-2xl">
                10%
              </button>
              <button className="bg-Very-dark-cyan grid h-[3rem] w-full place-items-center rounded-md text-2xl">
                15%
              </button>
              <button className="bg-Very-dark-cyan grid h-[3rem] w-full place-items-center rounded-md text-2xl">
                25%
              </button>
              <button className="bg-Very-dark-cyan grid h-[3rem] w-full place-items-center rounded-md text-2xl">
                50%
              </button>
              <button className="bg-Very-light-grayish-cyan text-Dark-grayish-cyan grid h-[3rem] w-full place-items-center rounded-md text-2xl">
                Custom
              </button>
            </div>
            <label
              htmlFor="people"
              className="text-Dark-grayish-cyan mt-10 block"
            >
              Number of People
            </label>
            <div className="bg-Very-light-grayish-cyan active:outline-Strong-cyan mt-1 flex w-full cursor-pointer items-center justify-center rounded-md active:outline-2">
              <span className="text-Grayish-cyan pl-4 text-2xl">
                <img src="/images/icon-person.svg" alt="" />
              </span>
              <input
                type="number"
                id="bill"
                placeholder="0"
                className="text-Very-dark-cyan placeholder:text-Grayish-cyan w-full appearance-none border-0 px-3.5 py-2 text-right text-2xl outline-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>
          </form>
        </section>
        <section className="bg-Very-dark-cyan border-greem-300 md:h-[417px] md:w-[413px] rounded-[15px] border-2 p-[0.5rem] sm:p-[2rem]">
          <div className="flex flex-col md:flex-row justify-between mt-6 ml-2">
            <div>
              <p className="text-White">Tip Amount</p>
              <span className="text-Grayish-cyan text-sm">/ Person</span>
            </div>
            <p className="text-Strong-cyan sm:text-3xl md:text-5xl text-2xl">$0.00</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-12">
            <div>
              <p className="text-White">Total</p>
              <span className="text-Grayish-cyan text-sm">/ Person</span>
            </div>
            <p className="text-Strong-cyan sm:text-3xl md:text-5xl text-2xl">$0.00</p>
          </div>
          <button type="reset" className="uppercase text-Grayish-cyan text-center w-full h-12 bg-Dark-grayish-cyan rounded-md mt-32">Reset</button>
        </section>
      </main>
    </>
  );
};

export default App;
