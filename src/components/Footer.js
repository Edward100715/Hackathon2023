import React, { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { Col, Container, Row } from "react-bootstrap"
import { FaArrowUp } from "react-icons/fa";
import logo from "../assets/img/footer.png"

export const Footer = () => {

    // Estado para controlar la visibilidad del botón de desplazamiento hacia arriba
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        // Función para manejar el desplazamiento
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        // Agregar el evento de desplazamiento al montar el componente
        window.addEventListener("scroll", handleScroll);

        // Eliminar el evento de desplazamiento al desmontar el componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6}>
                        <div className="text-center text-sm-end">
                            <p>
                                CopyRight. Todos los derechos reservados.
                            </p>
                            <a href="https://www.taxislibres.com.co/doc-taxislibres/aviso-legal-taxis-libres.pdf" className="transparent-button">Aviso legal</a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ScrollToTop
                smooth
                top="500"
                component={
                    <FaArrowUp
                        className={`scroll-to-top-icon ${showScrollToTop ? "visible" : ""}`}
                    />
                }
            />
        </footer>
    );
};