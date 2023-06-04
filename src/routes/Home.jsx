import { TypeAnimation } from "react-type-animation";
import "./Home.scss"
import wave1 from "../assets/img/wave1.svg";
import wave2 from "../assets/img/wave2.svg";
import wave3 from "../assets/img/wave3.svg";
import avatar from "../assets/img/profile-pic.jpg";
import page1 from "../assets/img/proyecto2-screenshot.png";
import page2 from "../assets/img/lab9-screenshot.png";
import page3 from "../assets/img/lab8-screenshot.png";
import page4 from "../assets/img/proyecto1-screenshot.png";

export function Home() {

    const sliders = document.querySelectorAll(".slide-in");

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                // console.log(entry.target, entry.target.classList);
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, {root: null, threshold: 0, rootMargin: "0px 0px 0px 0px"});

    const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
        const { top, left, bottom, right } = el.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;
        return partiallyVisible
            ? (
                (top > 0 && top < innerHeight) ||
                (bottom > 0 && bottom < innerHeight)
            ) && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
            : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
    };

    sliders.forEach(slider => {
        // appearOnScroll.observe(slider);
        if (elementIsVisibleInViewport(slider, true) && slider.classList.contains("appear")) {
            console.log("is in viewport", slider);
            slider.classList.add("appear");
        }
    });

    return (
        <>
            <div className="home-banner">
                <img src="https://wallpaperset.com/w/full/c/1/4/427159.jpg" />
                <img src={wave1} className="wave offset-1" />
                <img src={wave2} className="wave offset-2" />
                <img src={wave3} className="wave offset-3" />
                <div className="banner-content">
                    <h1>Web Portfolio</h1>
                    <p>Mi nombre es Alejandro y soy{" "}
                        <TypeAnimation 
                            sequence={[
                                "estudiante.", 4000,
                                "desarrollador.", 4000,
                                "desarrollador (?).", 1000
                            ]}
                            wrapper="span"
                            repeat={Infinity}
                            style={{color: "#007acc"}}
                        />
                    </p>
                </div>
            </div>
            
            <section className="section bg-1">
                <div className="content-1">
                    <img className="avatar" src={avatar} />
                    <div>
                        <h1>¿Quién soy?</h1>
                        <p>
                            Soy un estudiante de tercer año de la carrera de Ciencias de la Computación en la Universidad del 
                            Valle de Guatemala, tengo 24 años y desde niño he cultivado una fascinación con la tecnología y las 
                            computadoras. <br />
                            <br />
                            Como estudiante he tenido la oportunidad de aprender varios lenguajes como HTML, CSS, Javascript/Typescript
                            y de trabajar con ellos dentro de Frameworks como React y Angular en desarrollo web.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="content-2">
                    <h1>Mi trabajo</h1>
                    <div className="page-showcase">
                        <img src={page1} className="page-img" />
                        <div className="page-description">
                            <h3>Proyecto 2 - Web</h3>
                            <p>
                                Una página de búsqueda de juegos construida en Angular con Typescript. La información de los juegos,
                                incluyendo las imágenes de fondo, se obtienen mediante llamadas al API <a className="basic-link" href="https://rawg.io/apidocs">RAWG</a>.
                            </p>
                            <div className="page-link">
                                <a href="https://proyecto2web-36eec.web.app/home">Ver en navegador</a>
                            </div>
                        </div>
                    </div>

                    <div className="page-showcase reversed">
                        <img src={page2} className="page-img" />
                        <div className="page-description">
                            <h3>Laboratorio 9 - Calculadora</h3>
                            <p>
                                Una calculadora sencilla construida en el framework de React con Webpack y Babel.
                                El laboratorio fue realizado como parte del curso de Sistemas y Tecnologías Web.
                            </p>
                            <div className="page-link">
                                <a href="https://lab9-web-fedfb.web.app/">Ver en navegador</a>
                            </div>
                        </div>
                    </div>

                    <div className="page-showcase">
                        <img src={page3} className="page-img" />
                        <div className="page-description">
                            <h3>Laboratorio 8 - Juego de Memoria</h3>
                            <p>
                               Un juego de memoria construido en React como parte del laboratorio 8 de Sistemas y Tecnologías Web.
                            </p>
                            <div className="page-link">
                                <a href="https://webserver-63bcf.web.app/">Ver en navegador</a>
                            </div>
                        </div>
                    </div>

                    <div className="page-showcase reversed">
                        <img src={page4} className="page-img" />
                        <div className="page-description">
                            <h3>Proyecto 1 - Web</h3>
                            <p>
                                Este proyecto consistió en recrear una página web existente desde cero utilizando un framework 
                                de desarrollo web, en este caso NextJS. Este proyecto es una recreación de la página de inicio de <a className="basic-link" href="https://www.yelp.com/">Yelp</a>.
                            </p>
                            <div className="page-link">
                                <a href="https://proyecto1-web-be75e.web.app/">Ver en navegador</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}