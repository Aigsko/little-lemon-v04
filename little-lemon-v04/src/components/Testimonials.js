import '../css/testimonials.css';
import { ReactComponent as Star } from "../assets/star.svg";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image3.jpg";
import Image3 from "../assets/image2.jpg";
import Image4 from "../assets/image4.jpg";

const Testimonials = () => {
    return (
       <div className="testimonials-container">
        <div className='title-text'><h2>What people say about us!</h2></div>
        <div className='card-container'>
            <div className='card'>
                <img src={Image1} alt="Customer" />
                <h2 className='customer-name'>Ethan</h2>
                <div className='stars'>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
                <p className='card-text'>"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Assumenda aliquid expedita non fugit qui laudantium facere iure
                    culpa alias esse."</p>
            </div>
            <div className='card'>
                <img src={Image3} alt="Customer" />
                <h2 className='customer-name'>Ava</h2>
                <div className='stars'>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
                <p className='card-text'>"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Assumenda aliquid expedita non fugit qui laudantium facere iure
                    culpa alias esse."</p>
            </div>
            <div className='card'>
                <img src={Image4} alt="Customer" />
                <h2 className='customer-name'>Emily</h2>
                <div className='stars'>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
                <p className='card-text'>"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Assumenda aliquid expedita non fugit qui laudantium facere iure
                    culpa alias esse."</p>
            </div>
            <div className='card'>
                <img src={Image2} alt="Customer" />
                <h2 className='customer-name'>Liam</h2>
                <div className='stars'>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
                <p className='card-text'>"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Assumenda aliquid expedita non fugit qui laudantium facere iure
                    culpa alias esse."</p>
            </div>
        </div>
       </div>
    );
};

export default Testimonials;