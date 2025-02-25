import { useState, useEffect } from 'react';

const DATA_URL = 'https://gist.githubusercontent.com/Karthick1242004/a1c66473f113366b32e52c41106f51b0/raw/eff1522b38be0b98b19fd8987a3cd3b23a50d0b5/data.json';


export function usePortfolioData() {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(DATA_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
} 
