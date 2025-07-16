import './Progress.css';

const Progress = () => {
    return (
        <section className="progress-section">
            <h2 className="progress-title">Suivez vos progrès</h2>
            <div className="progress-stats">
                <div className="stat-item">
                    <div className="stat-number">1,247</div>
                    <div className="stat-label">Kanji appris</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">85%</div>
                    <div className="stat-label">Niveau N3</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">42</div>
                    <div className="stat-label">Jours consécutifs</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">156</div>
                    <div className="stat-label">Points XP</div>
                </div>
            </div>
        </section>
    )
}

export default Progress;
