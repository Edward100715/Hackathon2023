import p1 from "../assets/img/p1.png";
import p2 from "../assets/img/p2.png";
import p3 from "../assets/img/p3.png";
import p4 from "../assets/img/p4.png";
import p5 from "../assets/img/p5.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Rewards = () => {
    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="rewards" id="rewards">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="rewards-bx wow zoomIn">
                            <h2>¡ Premios !</h2>
                            <p>Al participar en este evento tendras la gran posibilidad de recibir uno de los siguientes premios</p>
                            <Carousel responsive={responsive} infinite={true} autoPlay infiniteLoop className="owl-carousel owl-theme rewards-slider">
                                <div className="item">
                                    <img src={p1} alt="p1" />
                                    <h5>¡ El primer lugar ganara 4 viajes a cualquier cuidad de colombia !</h5>
                                </div>
                                <div className="item">
                                    <img src={p2} alt="p2" />
                                    <h5>¡ El segundo lugar ganara un total de 1.8 millones de pesos !</h5>
                                </div>
                                <div className="item">
                                    <img src={p3} alt="p3" />
                                    <h5>¡ El tercer lugar ganara un TV XIAOMI 32" Pulgadas HD LED !</h5>
                                </div>
                                <div className="item">
                                    <img src={p4} alt="p4" />
                                    <h5>¡ El cuarto y quinto lugar ganaran para cada uno un Combo KALLEY Alámbrico Teclado + Mouse + Audífonos + PadMouse Gaming Negro !</h5>
                                </div>
                                <div className="item">
                                    <img src={p5} alt="p5" />
                                    <h5>¡ los demas concursantes por participar ganaran unos audifonos y un reloj g-shock - Sears!</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
