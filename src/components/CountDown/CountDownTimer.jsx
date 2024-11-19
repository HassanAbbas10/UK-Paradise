import  { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-10-26T12:00:00'); // Set your target date and time
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = {
        days: 1,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-300 w-[30rem] p-4 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Our Next Draw</h2>
      <div className="flex justify-center space-x-1 mb-4">
        <div className="flex flex-col items-center border rounded border-blue-500 bg-white p-2 ">
          <div className="text-xl font-bold">{timeLeft.days}</div>
          <div className="text-xs font-bold text-blue-400">DAYS</div>
        </div>
        <div className="flex flex-col items-center border rounded border-blue-500 bg-white p-2 ">
          <div className="text-xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs font-bold text-blue-400">HRS</div>
        </div>
        <div className="flex flex-col items-center border rounded border-blue-500 bg-white p-2 ">
          <div className="text-xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs font-bold text-blue-400">MINS</div>
        </div>
        <div className="flex flex-col items-center border rounded border-blue-500 bg-white p-2 ">
          <div className="text-xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs font-bold text-blue-400">SECS</div>
        </div>

        <div className="flex items-center border rounded border-blue-500 bg-blue-500">
        <div className=" text-white rounded-md px-2 text-sm">
        Until the live draw
      </div>
        </div>


     
      </div>
      
      <a href="#live-draw" className="text-blue-600 mt-4 block">
        Click Here to Watch Our Draws Live
      </a>
    </div>
  );
};

export default CountdownTimer;
