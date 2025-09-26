import { useEffect, useState } from 'react';

export const useCryptoPrices = () => {
  const [prices, setPrices] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,tether&vs_currencies=usd'
      );
      const data = await res.json();
      setPrices({
        bitcoin: data.bitcoin.usd,
        ethereum: data.ethereum.usd,
        binancecoin: data.binancecoin.usd,
        tether: data.tether?.usd || 1 // default to 1 if API fails
      });
    };

    fetchPrices();
  }, []);

  return { prices };
};
