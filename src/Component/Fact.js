import React from "react";
import { useState, useEffect } from "react";

const Fact = (props) => {
  const [data, setData] = useState([" "]);

  useEffect(()=>{
    getData()

    return(()=>{
        setData('')
    })
  } ,[props.number])

  const getData = async () => {
    let result = await fetch(
      `https://numbersapi.p.rapidapi.com/${props.number}/trivia?fragment=true&notfound=floor&json=true`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "9f3132a18cmshd33b69dca887320p1c1609jsna96c75892495",
          "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
        },
      }
    );
    result = await result.json();
    console.log(result);
    setData(result.text);
    
  };

  return (
    <div className="flex ">
      <h1 className="text-2xl  p-10 w-1/2 text-center mx-auto" >{data}</h1>
    </div>
  );
};

export default Fact;
