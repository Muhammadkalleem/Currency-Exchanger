// mycurrency.js (Custom Hook)
import { useState, useEffect } from 'react';

const useCurrency = (currency) => {
  const [currencyData, setCurrencyData] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
        const data = await response.json();
        setCurrencyData(data.rates);  // Assuming the API response has a 'rates' object
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };

    fetchCurrencyData();
  }, [currency]);

  return currencyData;
};

export default useCurrency;
