import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import { useEffect, useState } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Icon from "./Icon";
import IconButton from "./IconButton";
import MenuItem from "./MenuItem";
import Image from "./Image";
import './componentscss.css';

const LiveTime = () => {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });


    const [update, setUpdate] = useState(date.getSeconds());
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <>
            <div className="w-full p-3 h-20 hidden sm:block sm:h-20 xl:h-24">
                <div
                    className="rounded-xl w-full h-full px-3 sm:px-0 xl:px-3 overflow-hidden"
                    style={{
                        backgroundImage: "url('https://assets.codepen.io/3685267/res-react-dash-usage-card.svg')",
                    }}
                >
                    <div className="block sm:hidden xl:block pt-3">
                        <div className="font-bold text-gray-300 text-sm">Currently</div>
                        <div className="text-gray-500 text-xs">
                            {date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: "numeric", hour12: true })}
                            {/* {date.getHours()}{':'}{date.getMinutes()}{":"}{date.getSeconds()}{" hours"} */}
                            <div>
                                {/* {monthNames[date.getMonth()]}{" "}{date.getDate()}{","}{date.getFullYear()} */}
                                {date.toLocaleDateString('en-US', { month: 'long', year: "numeric", day: "numeric", weekday: 'long' })}
                            </div>
                            {/* 09:12 am November 08,2020 */}
                        </div>
                        {/* <animated.div className="text-right text-gray-400 text-xs">
                            {precentage.interpolate((i) => `${Math.round(i)}% `)}
                        </animated.div> */}
                        {/* <div className="w-full text-gray-300">
                            <svg
                                viewBox="0 0 100 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    x1="5"
                                    y1="5.25"
                                    x2="95"
                                    y2="5.25"
                                    stroke="#3C3C3C"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                />
                                <animated.line
                                    x1="5"
                                    y1="5.25"
                                    x2={indicatorWidth}
                                    y2="5.25"
                                    stroke="currentColor"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div> */}

                    </div>

                    <div className="hidden sm:block xl:hidden align-items-center justify-content-center">
                        {/* <svg
                            width="56"
                            height="56"
                            viewBox="0 0 56 56"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="56" height="56" fill="#2C2C2D" />
                            <path
                                d="M 28 28 m 0, -18 a 18 18 0 0 1 0 36 a 18 18 0 0 1 0 -36"
                                stroke="#3C3C3C"
                                strokeWidth="6"
                            />
                            <animated.path
                                d="M 28 28 m 0, -18 a 18 18 0 0 1 0 36 a 18 18 0 0 1 0 -36"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeDasharray="113.113"
                                strokeDashoffset={dashOffset}
                                strokeWidth="6"
                            />
                        </svg> */}
                        <div className="text-gray-500 align-items-center justify-content-center text-xs">
                            {/* {date.getHours()}{':'}{date.getMinutes()}{":"}{date.getSeconds()}{" hours"} */}
                            {date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LiveTime;