import './FeatureCard.css';

function FeatureCard({ icon, title, description }) {
    return <div className="feature-card">
        <div className="feature-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
}

export default FeatureCard
