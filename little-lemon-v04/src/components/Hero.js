import { Link } from 'react-router-dom';
import '../css/hero.css';
import restFood from '../assets/restauranfood.jpg';

const Hero = () => {
    return (
        <div className="hero">
            <div className="text-block">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/bookingform" className="button">Reserve a table</Link>
            </div>
            <div className="imgHero">
                <img src={restFood} alt="Litle Lemon food" />
            </div>
        </div>
    );
};

export default Hero;