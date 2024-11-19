import { useState, useEffect } from 'react';
import '../../Styles/PrimaryTimer.css';

const PrimaryTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = new Date(targetDate) - now;

            if (difference <= 0) {
                clearInterval(interval);
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="timer-container">
            <div className="timer-wrapper">
                <span className="timer-numbers">{timeLeft.days}</span>
                <span className="timer-desc">{timeLeft.days <= 1 ? 'DAY' : 'DAYS'}</span>
            </div>
            <div className="timer-wrapper">
                <span className="timer-numbers">{timeLeft.hours}</span>
                <span className="timer-desc">HRS</span>
            </div>
            <div className="timer-wrapper">
                <span className="timer-numbers">{timeLeft.minutes}</span>
                <span className="timer-desc">MINS</span>
            </div>
            <div className="timer-wrapper">
                <span className="timer-numbers">{timeLeft.seconds}</span>
                <span className="timer-desc">SECS</span>
            </div>
        </div>
    );
};

export default PrimaryTimer;
