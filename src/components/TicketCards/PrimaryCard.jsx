import '../../Styles/Badge.css'
import '../../Styles/PrimaryCard.css';
import PrimaryTimer from './PrimaryTimer';
import Badge from './Badge';


const PrimaryCard = ({ total, purchased, drawDate, price, offPrice, title }) => {
    const percentage = Math.round((purchased / total) * 100);

    return (
        <div className="card-container">
            <div>
                <img src="/images/prize.png" alt="Prize" className="card-img" />
                <div className="draw-date-wrapper">
                    <span className="draw-date">{drawDate}</span>
                </div>
            </div>

            <PrimaryTimer targetDate="2024-10-31T23:59:59" />

            <div className="progress-wrapper">
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${percentage}%` }}></div>
                    <span className="absolute-value">{purchased} / {total}</span>
                </div>
                <div className="badge-wrapper" style={{ left: `${percentage - 8}%` }}>
                    <Badge badgeData={`${percentage}%`} />
                </div>
            </div>

            <div className="price-wrapper">
                {price && <span className="price">£ {price}</span>}
                <span className="off-price">£ {offPrice}</span>
                <span className="desc">Per Entry</span>
            </div>

            <span className="title">{title}</span>
            <button className=''>
                Enter now
            </button>
        </div>
    );
};

export default PrimaryCard;
