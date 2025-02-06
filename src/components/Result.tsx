interface ResultProps {
  tip: () => number;
  total: () => number;
  resetForm: () => void;
}

const Result: React.FC<ResultProps> = ({tip, total, resetForm}) => {
  return (
    <section className="bg-Very-dark-cyan border-greem-300 rounded-[15px] border-2 p-[0.5rem] sm:p-[2rem] md:w-[413px]">
          <div className="mt-6 ml-2 flex justify-between md:flex-row">
            <div>
              <p className="text-White">Tip Amount</p>
              <span className="text-Grayish-cyan text-sm">/ Person</span>
            </div>
            <p className="text-Strong-cyan text-2xl sm:text-3xl md:text-5xl">
              ${tip().toFixed(2)}
            </p>
          </div>
          <div className="mt-12 flex justify-between md:flex-row">
            <div>
              <p className="text-White">Total</p>
              <span className="text-Grayish-cyan text-sm">/ Person</span>
            </div>
            <p className="text-Strong-cyan text-2xl sm:text-3xl md:text-5xl">
              ${total().toFixed(2)}
            </p>
          </div>
          <button
            type="reset"
            className="text-Grayish-cyan bg-Dark-grayish-cyan mt-32 h-12 w-full rounded-md text-center uppercase"
            onClick={resetForm}
          >
            Reset
          </button>
        </section>
  )
}
export default Result