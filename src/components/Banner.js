import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo2 from "../assets/img/logo2.png";

export const Banner = () => {
    // Estado para controlar el número de iteraciones del ciclo
    const [loopNum, setLoopNum] = useState(0);
    // Estado para controlar si se está eliminando texto
    const [isDeleting, setIsDeleting] = useState(false);
    // Estado para almacenar el texto actual
    const [text, setText] = useState('');
    // Estado para controlar el tiempo de espera entre caracteres
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // Estado para controlar el índice actual del arreglo "toRotate"
    const [index, setIndex] = useState(1);
    // Arreglo de frases para mostrar
    const toRotate = ["Programadores", "Diseñadores", "Comunicadores", "Analistas De Datos", "Y Más Perfiles."];
    // Período de tiempo entre cambios de frase
    const period = 2000;

    useEffect(() => {
        // Configuración de un temporizador para llamar a la función tick()
        let ticker = setInterval(() => {
            tick();
        }, delta);

        // Limpieza del temporizador al desmontar el componente
        return () => { clearInterval(ticker) };
    }, [text])

    // Función para manejar el cambio de texto
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(300);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">¡¡ BIENVENIDOS AL HACKATHON 2023 !!</span>
                        <p>Dirigido a:</p>
                        <h1>{``}<span className="wrap">{text}</span></h1>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={logo2} alt="Hackathon" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}