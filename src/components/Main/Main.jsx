import Features from '../Features/Features';
import Hero from '../Hero/Hero';
import Progress from '../Progress/Progress';

import './Main.css';

function Main() {
    return (
        <main>
            <div className="container">
                <Hero />
                <Features />
                <Progress />
            </div>
        </main>
    )
}

export default Main;
