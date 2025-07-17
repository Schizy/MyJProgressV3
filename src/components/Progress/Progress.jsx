import ProgressCard from '../ProgressCard/ProgressCard';
import './Progress.css';

const Progress = () => {

    const progress = [
        { label: 'Kanji appris', number: '1 247' },
        { label: 'Niveau N3', number: '85%' },
        { label: 'Jours consécutifs', number: '42' },
        { label: 'Points XP', number: '156' },
    ]

    return (
        <section className="progress-section">
            <h2 className="progress-title">Suivez vos progrès</h2>
            <div className="progress-stats">
                {progress.map(progressCard => <ProgressCard key={progressCard.label} {...progressCard} />)}
            </div>
        </section>
    )
}

export default Progress;
