import { useEffect, useState } from 'react';

export const useCryptoPrices = () => {
  const [prices, setPrices] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,tether,tron&vs_currencies=usd'
        );
        const data = await res.json();
        setPrices({
          bitcoin: data.bitcoin?.usd || 0,
          ethereum: data.ethereum?.usd || 0,
          binancecoin: data.binancecoin?.usd || 0,
          tether: data.tether?.usd || 1,
          tron: data.tron?.usd || 0
        });
        setError(null);
      } catch (err) {
        console.error('Error fetching prices:', err);
        setError('Failed to fetch prices');
        setPrices({});
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  return { prices, loading, error };
};