import './Main.css';

function Main() {
    return <main>
        <div className="container">
            <section className="hero">
                <h1>MyJProgress</h1>
                <p>Votre voyage vers la maîtrise du japonais commence ici</p>
                <button className="cta-button">Commencer maintenant</button>
            </section>

            <section className="features">
                <div className="feature-card">
                    <div className="feature-icon">漢</div>
                    <h3>Kanji Interactifs</h3>
                    <p>Apprenez les caractères japonais avec des exercices interactifs et des mnémotechniques efficaces.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">話</div>
                    <h3>Conversation</h3>
                    <p>Pratiquez la conversation avec des dialogues réalistes et des simulations de situations
                        quotidiennes.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">文</div>
                    <h3>Grammaire</h3>
                    <p>Maîtrisez la grammaire japonaise avec des leçons structurées et des exercices progressifs.</p>
                </div>
            </section>

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
        </div>
    </main>
}

export default Main;