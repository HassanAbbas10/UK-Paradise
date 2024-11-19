
import '../../Styles/Badge.css';

const Badge = ({ badgeData }) => {
    return (
        <div className="badge-container">
            <div className="triangle-top" />
            <div className="rectangle">
                <span className="badge-text">{badgeData}</span>
            </div>
            <div className="triangle-bottom" />
        </div>
    );
};

export default Badge;
