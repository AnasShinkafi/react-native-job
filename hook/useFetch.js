import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const axios = require("axios");

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": '074e9006afmsh12257c8af904cb1p1bec20jsn8c9a7957bd2b',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
        const res = await axios.request(options);

        setData(res.data.data);
        setIsLoading(false);
    } catch (error) {
        setError(error);
        alert('There is an error');
    } finally {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return { data, isLoading, error, refetch };
};

export default useFetch;