import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <h1>Hero element</h1>
            <Link to="/bookingform"><button className="booking-button">Book a table</button></Link>
        </div>
    );
};

export default Hero;