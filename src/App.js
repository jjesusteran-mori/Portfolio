import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Particles from "react-particles-js";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services-/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Particles
                className="particles-canvas"
                params={{
                    particles: {
                        number: {
                            value: 30,
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 6,
                                color: "#f9ab00",
                            },
                        },
                    },
                }}
            />
            <Navbar />
            <Header />
            <AboutMe />
            <Services />
            <Experience />
            <Portfolio />
            <Contacts />
            <Footer />
        </>
    );
}

export default App;
