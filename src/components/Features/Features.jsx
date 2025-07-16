import './Features.css';

const Features = () => {
    return (
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
    )
}

export default Features;
