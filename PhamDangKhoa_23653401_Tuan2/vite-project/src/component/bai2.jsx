import React from 'react'
import { useState, useEffect } from 'react';

function bai2() {

    var [hour, setHour] = useState();
    var [minute, setMinute] = useState();
    var [second, setSecond] = useState();
    var [day , setDay] = useState();
    var [month , setMonth] = useState();
    var [year , setYear] = useState();

    useEffect(() => {
        setInterval(() => {
            let date = new Date();
            setHour(date.getHours());
            setMinute(date.getMinutes());
            setSecond(date.getSeconds());
            setDay(date.getDate());
            setMonth(date.getMonth() + 1);
            setYear(date.getFullYear());
        }, 1000);
    }, []);
  return (
    <div>
      <p>Digital Clock</p>
        <p>Date:</p>
        <p>{day}/{month}/{year}</p>
        <p>Time:</p>
        <p>{hour}:{minute}:{second}</p>

    </div>
  )
}

export default bai2;
