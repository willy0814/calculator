import './appStyle.css';
import React from 'react';
import {useState, useEffect} from 'react';
import RandomQ from './multipleQ-final';



export default function Home(){
    const weatherdata = JSON.parse(
        `
        {
            "0":{
                "day":{
                    "description":"Sunny",
                    "image":"http://openweathermap.org/img/wn/01d@2x.png"
                },
                "night":{
                    "description":"Clear",
                    "image":"http://openweathermap.org/img/wn/01n@2x.png"
                }
            },
            "1":{
                "day":{
                    "description":"Mainly Sunny",
                    "image":"http://openweathermap.org/img/wn/01d@2x.png"
                },
                "night":{
                    "description":"Mainly Clear",
                    "image":"http://openweathermap.org/img/wn/01n@2x.png"
                }
            },
            "2":{
                "day":{
                    "description":"Partly Cloudy",
                    "image":"http://openweathermap.org/img/wn/02d@2x.png"
                },
                "night":{
                    "description":"Partly Cloudy",
                    "image":"http://openweathermap.org/img/wn/02n@2x.png"
                }
            },
            "3":{
                "day":{
                    "description":"Cloudy",
                    "image":"http://openweathermap.org/img/wn/03d@2x.png"
                },
                "night":{
                    "description":"Cloudy",
                    "image":"http://openweathermap.org/img/wn/03n@2x.png"
                }
            },
            "45":{
                "day":{
                    "description":"Foggy",
                    "image":"http://openweathermap.org/img/wn/50d@2x.png"
                },
                "night":{
                    "description":"Foggy",
                    "image":"http://openweathermap.org/img/wn/50n@2x.png"
                }
            },
            "48":{
                "day":{
                    "description":"Rime Fog",
                    "image":"http://openweathermap.org/img/wn/50d@2x.png"
                },
                "night":{
                    "description":"Rime Fog",
                    "image":"http://openweathermap.org/img/wn/50n@2x.png"
                }
            },
            "51":{
                "day":{
                    "description":"Light Drizzle",
                    "image":"http://openweathermap.org/img/wn/09d@2x.png"
                },
                "night":{
                    "description":"Light Drizzle",
                    "image":"http://openweathermap.org/img/wn/09n@2x.png"
                }
            },
            "53":{
                "day":{
                    "description":"Drizzle",
                    "image":"http://openweathermap.org/img/wn/09d@2x.png"
                },
                "night":{
                    "description":"Drizzle",
                    "image":"http://openweathermap.org/img/wn/09n@2x.png"
                }
            },
            "55":{
                "day":{
                    "description":"Heavy Drizzle",
                    "image":"http://openweathermap.org/img/wn/09d@2x.png"
                },
                "night":{
                    "description":"Heavy Drizzle",
                    "image":"http://openweathermap.org/img/wn/09n@2x.png"
                }
            },
            "56":{
                "day":{
                    "description":"Light Freezing Drizzle",
                    "image":"http://openweathermap.org/img/wn/09d@2x.png"
                },
                "night":{
                    "description":"Light Freezing Drizzle",
                    "image":"http://openweathermap.org/img/wn/09n@2x.png"
                }
            },
            "57":{
                "day":{
                    "description":"Freezing Drizzle",
                    "image":"http://openweathermap.org/img/wn/09d@2x.png"
                },
                "night":{
                    "description":"Freezing Drizzle",
                    "image":"http://openweathermap.org/img/wn/09n@2x.png"
                }
            },
            "61":{
                "day":{
                    "description":"Light Rain",
                    "image":"http://openweathermap.org/img/wn/10d@2x.png"
                },
                "night":{
                    "description":"Light Rain",
                    "image":"http://openweathermap.org/img/wn/10n@2x.png"
                }
            },
            "63":{
                "day":{
                    "description":"Rain",
                    "image":"http://openweathermap.org/img/wn/10d@2x.png"
                },
                "night":{
                    "description":"Rain",
                    "image":"http://openweathermap.org/img/wn/10n@2x.png"
                }
            },
            "65":{
                "day":{
                    "description":"Heavy Rain",
                    "image":"http://openweathermap.org/img/wn/10d@2x.png"
                },
                "night":{
                    "description":"Heavy Rain",
                    "image":"http://openweathermap.org/img/wn/10n@2x.png"
                }
            },
            "66":{
                "day":{
                    "description":"Light Freezing Rain",
                    "image":"http://openweathermap.org/img/wn/10d@2x.png"
                },
                "night":{
                    "description":"Light Freezing Rain",
                    "image":"http://openweathermap.org/img/wn/10n@2x.png"
                }
            },
            "67":{
                "day":{
                    "description":"Freezing Rain",
                    "image":"http://openweathermap.org/img/wn/10d@2x.png"
                },
                "night":{
                    "description":"Freezing Rain",
                    "image":"http://openweathermap.org/img/wn/10n@2x.png"
                }
            },
            "71":{
                "day":{
                    "description":"Light Snow",
                    "image":"http://openweathermap.org/img/wn/13d@2x.png"
                },
                "night":{
                    "description":"Light Snow",
                    "image":"http://openweathermap.org/img/wn/13n@2x.png"
                }
            },
            "73":{
                "day":{
                    "description":"Snow",
                    "image":"http://openweathermap.org/img/wn/13d@2x.png"
                },
                "night":{
                    "description":"Snow",
                    "image":"http://openweathermap.org/img/wn/13n@2x.png"
                }
            },
            "75":{
                "day":{
                    "description":"Heavy Snow",
                    "image":"http://openweathermap.org/img/wn/13d@2x.png"
                },
                "night":{
                    "description":"Heavy Snow",
                    "image":"http://openweathermap.org/img/wn/13n@2x.png"
                }
            },
            "77":{
                "day":{
                    "description":"Snow Grains",
                    "image":"http://openweathermap.org/img/wn/13d@2x.png"
                },
                "night":{
                    "description":"Snow Grains",
                    "image":"http://openweathermap.org/img/wn/13n@2x.png"
                }
            },
            "80":{
                "day":{
                    "description":"Light Showers",
                    "image":"http://openweathermap.org/img/wn/09d@2x.png"
                },
                "night":{
                    "description":"Light Showers",
                    "image":"http://openweathermap.org/img/wn/09n@2x.png"
                }
            },
            "81":{
                "day":{
                    "description":"Showers",
                    "image":"http://openweathermap.org/img/wn/09d@2x.png"
                },
                "night":{
                    "description":"Showers",
                    "image":"http://openweathermap.org/img/wn/09n@2x.png"
                }
            },
            "82":{
                "day":{
                    "description":"Heavy Showers",
                    "image":"http://openweathermap.org/img/wn/09d@2x.png"
                },
                "night":{
                    "description":"Heavy Showers",
                    "image":"http://openweathermap.org/img/wn/09n@2x.png"
                }
            },
            "85":{
                "day":{
                    "description":"Light Snow Showers",
                    "image":"http://openweathermap.org/img/wn/13d@2x.png"
                },
                "night":{
                    "description":"Light Snow Showers",
                    "image":"http://openweathermap.org/img/wn/13n@2x.png"
                }
            },
            "86":{
                "day":{
                    "description":"Snow Showers",
                    "image":"http://openweathermap.org/img/wn/13d@2x.png"
                },
                "night":{
                    "description":"Snow Showers",
                    "image":"http://openweathermap.org/img/wn/13n@2x.png"
                }
            },
            "95":{
                "day":{
                    "description":"Thunderstorm",
                    "image":"http://openweathermap.org/img/wn/11d@2x.png"
                },
                "night":{
                    "description":"Thunderstorm",
                    "image":"http://openweathermap.org/img/wn/11n@2x.png"
                }
            },
            "96":{
                "day":{
                    "description":"Light Thunderstorms With Hail",
                    "image":"http://openweathermap.org/img/wn/11d@2x.png"
                },
                "night":{
                    "description":"Light Thunderstorms With Hail",
                    "image":"http://openweathermap.org/img/wn/11n@2x.png"
                }
            },
            "99":{
                "day":{
                    "description":"Thunderstorm With Hail",
                    "image":"http://openweathermap.org/img/wn/11d@2x.png"
                },
                "night":{
                    "description":"Thunderstorm With Hail",
                    "image":"http://openweathermap.org/img/wn/11n@2x.png"
                }
            }
        }
        `
    )
    fetch("https://api.open-meteo.com/v1/bom?latitude=-33.8678&longitude=151.2073&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,showers_sum,snowfall_sum&timezone=Australia%2FSydney&forecast_days=3")
        .then(res => res.text())
        .then(text => {
            let weatherTotal = JSON.parse(text);
            let place = document.getElementById("place");
            place.innerHTML = weatherTotal.timezone;
            let weatherToday = document.getElementById("todayWeather");
            let todayWeatherCode = weatherTotal.daily.weather_code[0];
            let todayWeatherInfo = weatherdata[todayWeatherCode];
            let sunset = weatherTotal.daily.sunset[0];
            let todayTime = new Date();
            if (todayWeatherInfo && Date.parse(sunset) < todayTime){
                weatherToday.innerHTML = todayWeatherInfo.day.description;
            }else if(todayWeatherInfo && Date.parse(sunset) > todayTime){
                weatherToday.innerHTML = todayWeatherInfo.night.description;
            }else {
                weatherToday.innerHTML = "Weather information not available."
            }
            let dayTemp = document.getElementById("dayTemp");
            let nightTemp = document.getElementById("nightTemp");
            dayTemp.innerHTML = weatherTotal.daily.temperature_2m_max[0] + weatherTotal.daily_units.temperature_2m_max;
            nightTemp.innerHTML = weatherTotal.daily.temperature_2m_min[0] + weatherTotal.daily_units.temperature_2m_max;
        })
        .catch(err =>{
            console.error(err);
        }
        );


    const sydneyTime = new Date().toLocaleString("en-US", {
        timeZone: "Australia/Sydney",
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    });
    const [navOpen, setNavOpen] = useState(false);
    const [todayTime, setTodayTime] = useState(sydneyTime);
    useEffect(() => {
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

    function navOnclick(){
        if(navOpen === false){
            setNavOpen(true);
        }else{
            setNavOpen(false);
        }
    }

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlide = 5;
    function leftCarousel(){
        if(currentSlide === 0){
            setCurrentSlide(totalSlide - 1);
        }else if(currentSlide < totalSlide){
            setCurrentSlide(currentSlide - 1);
        }
    }
    function rightCarousel(){
        if(currentSlide < 4){
            setCurrentSlide(currentSlide + 1);
        }else if(currentSlide >= 4){
            setCurrentSlide(0);
        }
    }
    const [openWorkWindow, setOpenWorkWindow] = useState(false);
    const [changeWorkWindow, setChangeWorkWindow] = useState('');
    let WW;

    function openWW() {
        setOpenWorkWindow(true);
    }


    function getCurrentWorkWindow(){
        if(changeWorkWindow === 'one'){
            return <RandomQ />
        }
    }

    return(
        <>
        <div className='work__window' style={{display:openWorkWindow ? 'flex' : 'none'}}>
            <div className="work__window--item" id="work__window--item">
                {getCurrentWorkWindow()}
            </div>
        </div> 
        <nav>
            <div className="logo">
                
            </div>
            <div>
                <button onClick={navOnclick}>MENU <span className='nav__arrow'>{navOpen ? "<" : ">"}</span></button>
                <ul className={navOpen ? "nav__listing nav__listing--open" : "nav__listing"}>
                    <li><a href="">Me</a></li>
                    <li><a href="">Work</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </nav>
        <div className="greetings"></div>
        <section className="interactive">
            <div className="interactive__photo content">
            </div>
            <div className="interactive__skills content">
                <h2>Front-end Developer</h2>
                <ul>
                    <li className="capsule1">CSS</li>
                    <li className="capsule2">HTML</li>
                    <li className="capsule3">JAVASCRIPT</li>
                    <li className="capsule4">REACT</li>
                </ul>
            </div>
            <div className="interactive__weather content">
                <h2>I'm at ... <span id="place"></span></h2>
                <p>Current time in Sydney is <span id="currentTime">{todayTime}</span></p>
                <p>Today is <span id="todayWeather"></span></p>
                <p>And temperature will be <span id="dayTemp"></span> to <span id="nightTemp"></span></p>
            </div>
        </section>
        <section className="work">
            <div id="work__sliderwrapper">
                <button onClick={rightCarousel} className="rightBtn btn">
                    &gt;
                </button>
                <button onClick={leftCarousel} className="leftBtn btn">
                    &lt;
                </button>
            <ul id="work__slider" style={{transform:`translateX(${-100 * currentSlide}%)`}}>
                <li className="work__slider--item exampleItems" onClick={() => setChangeWorkWindow('one')}>
                    <div className="work__preview">

                    </div>
                    <div className="work__description">

                    </div>
                </li>
                <li className="work__slider--item exampleItems">
                    <div className="work__preview">

                    </div>
                    <div className="work__description">
                        
                    </div>
                </li>
                <li className="work__slider--item exampleItems">
                    <div className="work__preview">

                    </div>
                    <div className="work__description">
                        
                    </div>
                </li>
                <li className="work__slider--item exampleItems">
                    <div className="work__preview">

                    </div>
                    <div className="work__description">
                        
                    </div>
                </li>
                <li className="work__slider--item exampleItems">
                    <div className="work__preview">

                    </div>
                    <div className="work__description">
                        
                    </div>        
                </li>
            </ul>
            </div>
        </section>
        <section className="contact">

        </section>
        <footer>

        </footer>
        </>
    )
}
