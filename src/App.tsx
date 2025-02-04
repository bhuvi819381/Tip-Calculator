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
      <header className="mt-[9.7rem]">
        <h1 className="ml-3 text-center text-2xl leading-[2.2rem] font-bold tracking-[0.6rem]">
          SPLI
          <br />
          TTER
        </h1>
      </header>
      <main className="max-w-[57.3rem] mx-auto mt-19 bg-White rounded-[24px] p-[2rem] flex ">
        <section className="flex-1 border-2 border-red-300 p-[0.7rem]">
          <form action="" className="border-2 border-blue-300">
            <label htmlFor="bill" className="block">Bill
            </label>
              <input type="num" prefix="$" id="bill" placeholder="0" className="text-right bg-yellow-100 w-full "/>
          </form>
        </section>
        <section className="w-[413px] h-[417px] bg-Very-dark-cyan rounded-[15px] border-2 border-greem-300 p-[2rem]">
          <div>
            <span>
              
            </span>
            <span>

            </span>
          </div>
          <div></div>
        </section>
      </main>
    </>
  );
};

export default App;
