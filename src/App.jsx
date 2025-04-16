import React, { useState } from 'react';
import useCurrency from './hook/mycurrency';
import InputBox from './Component/InputBox';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [convertAmount, setConvertAmount] = useState(0);

  const currencyInfo = useCurrency(from);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertAmount(amount);
    setAmount(convertAmount);
  };

  const convert = () => {
    setConvertAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/4046753/pexels-photo-4046753.jpeg?auto=compress&cs=tinysrgb&w=600")',
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-x-gray-60 rounded-lg p-5 bg-white/30 backdrop-blur-sm">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={currencyOptions}
                  onCurrencyChange={(value) => setAmount(value)}
                  selectCurrency={from}
                />
              </div>

              <div className="w-full mb-1">
                <InputBox
                  label="To"
                  amount={convertAmount}
                  currencyOptions={currencyOptions}
                  onCurrencyChange={(value) => setConvertAmount(value)}
                  selectCurrency={to}
                />
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
                  onClick={swap}
                >
                  Swap
                </button>

                <div className="text-xl font-semibold ml-4">
                  <p>Converted Amount: {convertAmount}</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
