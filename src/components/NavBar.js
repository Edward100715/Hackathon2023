import { useState, useEffect } from "react"
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <a href="https://www.taxislibres.com.co/">
                        <img src={logo} alt="Logo" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
                        <Nav.Link href="#main" className={activeLink === 'main' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('main')}>Información</Nav.Link>
                        <Nav.Link href="#rewards" className={activeLink === 'rewards' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('rewards')}>Premios</Nav.Link>
                        <Nav.Link href="#form" className={activeLink === 'form' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('form')}>Inscripción</Nav.Link>
                        <Nav.Link href="https://www.taxislibres.com.co/wrpqs/" className={activeLink === 'help' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('help')}>Ayuda</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}