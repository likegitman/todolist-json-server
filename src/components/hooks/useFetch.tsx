import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function useFetch(URL:string, done?:boolean) {

  const [data, setData] = useState([]);

  
  useEffect(()=>{
      const fetchData = async () => {
        await axios.get(done ? URL+`?isDone=${done}` : URL)
        .then((res)=>setData(res.data));
      };

    fetchData();
  },[URL, done]);

  return data;
}