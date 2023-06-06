import { useState, useEffect } from "react"
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';

export const NavBar = () => {
    
    // Estado para el enlace activo y el estado de desplazamiento
    const [activeLink, setActiveLink] = useState('home'); // Estado para el enlace activo
    const [scrolled, setScrolled] = useState(false); // Estado para el desplazamiento

    useEffect(() => {

        // Función de efecto para manejar el desplazamiento
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true); // Actualizar el estado a 'true' si el desplazamiento es mayor a 50
            } else {
                setScrolled(false); // Actualizar el estado a 'false' si el desplazamiento es menor o igual a 50
            }
        }

        // Registrar el evento de desplazamiento en la ventana
        window.addEventListener("scroll", onScroll);

        // Limpiar el evento de desplazamiento al desmontar el componente
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    // Función para actualizar el enlace activo
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
                        <Nav.Link href="#info" className={activeLink === 'info' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('info')}>Información</Nav.Link>
                        <Nav.Link href="#rewards" className={activeLink === 'rewards' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('rewards')}>Premios</Nav.Link>
                        <Nav.Link href="#form" className={activeLink === 'form' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('form')}>Inscripción</Nav.Link>
                        <Nav.Link href="https://www.taxislibres.com.co/wrpqs/" className={activeLink === 'help' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('help')}>Ayuda</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}