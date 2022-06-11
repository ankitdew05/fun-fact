import React from "react";
import { useState } from "react";
import Fact from "./Fact";
const Data = () => {
  const [data, setData] = useState([" "]);
  var [city, setCity] = useState("");

  const getData = async () => {
    let result = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, {
      method: "GET",
    headers: {
      "X-RapidAPI-Key": "9f3132a18cmshd33b69dca887320p1c1609jsna96c75892495",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    }
    })
    result = await result.json();
    setData(parseInt(result.current.temp_c));
    console.log(data)
  };

  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-3xl font-semibold p-10">Get Fun Fact With Your City Temperature</h1>
      <input
      className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-1/6 mx-auto py-2 px-4 rounded-lg focus:border-gray-700 "
        type="text"
        placeholder="Enter City Name"
        onChange={(e) => {
          setCity(e.target.value);
        }}
        value={city}
      />
      <Fact number={data}/>
      <button className="bg-slate-300   px-4 py-2 mx-auto cursor-pointer hover:bg-slate-500 hover:font-bold hover:scale-105 ease-in-out duration-300 border-gray-500 rounded-lg" onClick={getData}>Get Fact</button>
    </div>
  );
};

export default Data;
