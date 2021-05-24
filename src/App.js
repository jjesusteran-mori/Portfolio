import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Particles from "react-particles-js";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";

function App() {
    return (
        <>
            <Particles
                className="particles-canvas"
                params={{
                    particles: {
                        number: {
                            value: 60,
                            density: {
                                enable: true,
                                value: 900,
                            },
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
            <Experience />
        </>
    );
}

export default App;
