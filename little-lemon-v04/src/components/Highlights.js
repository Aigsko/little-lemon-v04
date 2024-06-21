import { Link } from 'react-router-dom';
import '../css/high.css';
import greekSalad from '../assets/greek_salad.jpg';
import bruchetta from '../assets/bruchetta.jpg';
import lemonDesert from '../assets/lemon_dessert.jpg';
import { ReactComponent as ScooterSVG } from "../assets/scooter.svg";

const Highlights = () => {
    return (
        <section className="specials">
      <div className="heading">
        <h1>This Week Specials!</h1>
        <div>
        <Link to="/menu" className="menu-button">Online Menu</Link>
        </div>
      </div>
      <div className="menu">
        <div className="left">
          <img src={greekSalad} alt="Greek salad" />
          <div className='top-text'>
            <h1 className="title">Greek slad</h1>
            <h1 className="price">$ 12.99</h1>
          </div>
          <div>      
            <p className="descr">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  veritatis vitae dignissimos totam voluptate tenetur illo sed
                  itaque, quos magnam voluptatibus, optio sequi dicta sapiente?
                  Quos, voluptatum sunt. Expedita, quaerat?
            </p>
            <h4 className="bottom-text">
                  Order a Delivery
              <i>
                  <ScooterSVG />
              </i>
            </h4>
          </div>
        </div>
        <div className="mid">
          <img src={bruchetta} alt="Bruchetta" />
          <div className='top-text'>
            <h1 className="title">Bruchetta</h1>
            <h1 className="price">$ 5.99</h1>
          </div>
          <div>      
            <p className="descr">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  veritatis vitae dignissimos totam voluptate tenetur illo sed
                  itaque, quos magnam voluptatibus, optio sequi dicta sapiente?
                  Quos, voluptatum sunt. Expedita, quaerat?
            </p>
            <h4 className="bottom-text">
                  Order a Delivery
              <i>
                  <ScooterSVG />
              </i>
            </h4>
          </div>      
        </div>
        <div className="right">
          <img src={lemonDesert} alt="Lemon desert" />
          <div className='top-text'>
            <h1 className="title">Lemon Desert</h1>
            <h1 className="price">$ 5.00</h1>
          </div>
          <div>      
            <p className="descr">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  veritatis vitae dignissimos totam voluptate tenetur illo sed
                  itaque, quos magnam voluptatibus, optio sequi dicta sapiente?
                  Quos, voluptatum sunt. Expedita, quaerat?
            </p>
            <h4 className="bottom-text">
                  Order a Delivery
              <i>
                  <ScooterSVG />
              </i>
            </h4>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Highlights;