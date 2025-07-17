import './ProgressCard.css';

function ProgressCard({ label, number }) {
    return <div className="stat-item">
        <div className="stat-number">{number}</div>
        <div className="stat-label">{label}</div>
    </div>
}

export default ProgressCard
