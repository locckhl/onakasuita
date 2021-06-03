import { useState, useEffect, useCallback } from "react";
import { getReviews } from "../api/reviews";

function useQuery(query) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleError = (error) => {
    setError(error);
    setLoading(false);
  };

  // this function is calling useCallback to stop an infinite loop since it is in the dependency array of useEffect
  const runQuery = useCallback(() => {
    const handleSuccess = (res) => {
      setData(res);
      setLoading(false);
    };

    setLoading(true);
    query.then(handleSuccess).catch(handleError);
  }, [query]);

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  return { data, loading, error, refetch: runQuery };
}

export default useQuery;

// const [data, loading, error] = useQuery(getReviews);
// console.log(data, loading, error)
