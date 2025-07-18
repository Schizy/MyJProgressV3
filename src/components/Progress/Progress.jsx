import { useEffect, useState } from 'react';
import ProgressCard from '../ProgressCard/ProgressCard';
import './Progress.css';

const Progress = () => {

    const [progressCards, setProgressCards] = useState([
        // { label: 'Kanji appris', number: '1 247' },
        // { label: 'Niveau N3', number: '85%' },
        // { label: 'Jours consécutifs', number: '42' },
        // { label: 'Points XP', number: '156' },
    ])

    useEffect(() => {
        fetch('http://localhost:3000/api/progress_cards')
            .then(response => response.json())
            .then(data => setProgressCards(data))
            .catch(error => console.error('Error fetching progress cards:', error));
    }, []);

    return (
        <section className="progress-section">
            <h2 className="progress-title">Suivez vos progrès</h2>
            <div className="progress-stats">
                {progressCards.map(progressCard => <ProgressCard key={progressCard.label} {...progressCard} />)}
            </div>
        </section>
    )
}

export default Progress;
