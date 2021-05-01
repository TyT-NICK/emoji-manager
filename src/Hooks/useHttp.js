import { useCallback, useState } from 'react';

const useHttp = () => {
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true);

    try {
      const requestBody = body ? JSON.stringify(body) : null;

      const response = await fetch(url, { method, headers, requestBody });
      const data = response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setLoading(false);

      return data;
    } catch (e) {
      setLoading(false);
      throw e;
    }
  });

  return { loading, request };
};

export default useHttp;
