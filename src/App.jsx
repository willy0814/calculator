import React, {useState, useEffect} from 'react'
import './appStyle.css'

export default function App() {
    const [nambas, setNambas] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);
    const sydneyTime = new Date().toLocaleString("en-US", {
      timeZone: "Australia/Sydney",
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    });
    const [todayTime, setTodayTime] = useState(sydneyTime);
    useEffect(()=>{
        const intervalId = setInterval(() => {
          const updatedTime = new Date().toLocaleString("en-US", {
            timeZone: "Australia/Sydney",
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
          });
          setTodayTime(updatedTime);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);


  return (
    <>
      <section>
        {nambas.map(namba => (
            <span key={namba}
            className={`numba ${namba}`}
                style={{
                  transform: `rotate(calc(${namba} * 30deg)) translate(-50%, -50%)`
                }}
            >{namba}</span>
        ))}
          <div className="seconds"
            style={{
              transform:`rotate(calc(${todayTime.slice(6,8)} * 6deg)) translate(-50%, -50%)`
            }}
          ></div>
          <div className="minutes"
            style={{
              transform:`rotate(calc(${todayTime.slice(3,5)} * 6deg)) translate(-50%, -50%)`
            }}
          ></div>
          <div className="hours"
            style={{
            transform:`rotate(calc(${todayTime.slice(0,2)} * 30deg + ${todayTime.slice(3,5)} * 0.5deg)) translate(-50%, -50%)`
          }}
          ></div>
      </section>
    </>
  )
}
