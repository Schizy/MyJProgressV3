import FeatureCard from '../../FeatureCard/FeatureCard';
import './Features.css';

const Features = () => {

    const features = [
        {icon: '漢', title: 'Kanji Interactifs', description: 'Apprenez les caractères japonais avec des exercices interactifs et des mnémotechniques efficaces.'},
        {icon: '話', title: 'Conversation', description: 'Pratiquez la conversation avec des dialogues réalistes et des simulations de situations quotidiennes.'},
        {icon: '文', title: 'Grammaire', description: 'Maîtrisez la grammaire japonaise avec des leçons structurées et des exercices progressifs.'}
    ]

    return (
        <section className="features">
            {features.map(featureCard => <FeatureCard key={featureCard.icon} {...featureCard} />)}
        </section>
    )
}

export default Features;
