import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import '../Styles/Badge.css'
import '../Styles/PrimaryCard.css'
import '../Styles/PrimaryTimer.css'
const CashDrawCard = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 8, mins: 14, secs: 39 });
  const [progress, setProgress] = useState({ value: 3376, max: 14280 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="group card w-full max-w-md mx-auto overflow-hidden p-[0.75rem] duration-700 hover:border hover:border-slate-600 my-10">
      <div className="relative h-48 bg-gradient-to-br from-cyan-500 to-blue-700">
        <img
          src="/placeholder.svg?height=192&width=384"
          alt="Stacks of cash"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-4xl font-bold drop-shadow-lg">£7,000</h2>
          <p className="text-xl">TAX FREE CASH</p>
        </div>
        <Button className="absolute -bottom-[1.25rem] left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out bg-emerald-400 hover:bg-emerald-500 text-white font-semibold
        rounded-full 
        ">
          <span className="p-1 bg-white animate-ping duration-1000 rounded-full mx-2">
            
          </span>DRAW TODAY
        </Button>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between mb-2">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-2xl font-bold">{value.toString().padStart(2, "0")}</div>
              <div className="text-xs uppercase">{key}</div>
            </div>
          ))}
        </div>
        <div className="relative mb-12 mt-4">
          <div className="h-[1.25rem] bg-gray-200 rounded-sm border-blue-700 border overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-sm flex items-center justify-end  text-xs text-white font-bold transition-all duration-300 ease-in-out"
              style={{ width: `${(progress.value / progress.max) * 100}%` }}
            >
              {progress.value} / {progress.max}
            </div>
          </div>
          <div
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out flex flex-col items-center"
            style={{ left: `${(progress.value / progress.max) * 100}%` }}
          >
            <div className="relative flex flex-col items-center">
              <div className="bg-green-500 text-white py-1 rounded-t-3xl px-1">
                <span className="text-xs font-bold">
                  {Math.round((progress.value / progress.max) * 100)}%
                </span>
              </div>
             
            </div>
          </div>
        </div>
        <div className="ml-6 py-[1rem] mb-2 tracking-widest font-bold text-sm">
          <span className=" tracking-normal text-2xl font-bold text-blue-600 ">£0.99</span> Per Entry
        </div>
        <h3 className="text-xl font-bold text-center">
          £7,000 Tax Free Cash - Friday Draw
        </h3>
      </CardContent>
      <CardFooter>
        <Button className="w-full justify-between group-hover:bg-blue-500 group-hover:text-white tracking-widest rounded-full border-blue-500 border-2 group-hover:duration-700 group-hover:ease-in-out hover:bg-blue-500 hover:text-white" variant="outline">
          ENTER NOW
          <ArrowRight className="ml-2 h-4 w-4 group-hover:text-white" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CashDrawCard;
