import { useEffect, useState } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async url => {
      try {
        const res = await fetch(url);
        if (res.status >= 400) throw new Error('server error');
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData(url);
  }, [url]);
  return { data, error, loading };
};

export default useFetch;
