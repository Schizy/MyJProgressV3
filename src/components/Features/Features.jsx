import { useEffect, useState } from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import './Features.css';
import { getFeatureCards } from '../../utils/api';

const Features = () => {

    const [featureCards, setFeatureCards] = useState([
        // {icon: '漢', title: 'Kanji Interactifs', description: 'Apprenez les caractères japonais avec des exercices interactifs et des mnémotechniques efficaces.'},
        // {icon: '話', title: 'Conversation', description: 'Pratiquez la conversation avec des dialogues réalistes et des simulations de situations quotidiennes.'},
        // {icon: '文', title: 'Grammaire', description: 'Maîtrisez la grammaire japonaise avec des leçons structurées et des exercices progressifs.'}
    ]);

    useEffect(() => {
        getFeatureCards()
            .then(data => setFeatureCards(data))
            .catch(error => console.error('Error fetching feature cards:', error));
    }, []);

    return (
        <section className="features">
            {featureCards.map(featureCard => <FeatureCard key={featureCard.icon} {...featureCard} />)}
        </section>
    )
}

export default Features;
