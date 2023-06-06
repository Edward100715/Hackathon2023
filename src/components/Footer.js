import React, { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { Col, Container, Row } from "react-bootstrap"
import { FaArrowUp } from "react-icons/fa";
import logo from "../assets/img/footer.png"

export const Footer = () => {

    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

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