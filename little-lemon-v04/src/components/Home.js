import HERO from "./Hero";
import HIGHLIGHTS from "./Highlights";
import TESTIMONIALS from "./Testimonials";
import ABOUT from "./About";

const Home = () => {
    return (
        <main>
            <h1>Home Page</h1>
            <HERO />
            <HIGHLIGHTS />
            <TESTIMONIALS />
            <ABOUT />
        </main>
    );
};

export default Home;