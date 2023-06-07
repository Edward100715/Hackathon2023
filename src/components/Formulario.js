import React, { useState } from "react";
import db from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import logo2 from "../assets/img/logo2.png";
import patrocinador1 from "../assets/img/patrocinador1.png";
import patrocinador2 from "../assets/img/patrocinador2.png";
import patrocinador3 from "../assets/img/patrocinador3.png";
import patrocinador4 from "../assets/img/patrocinador4.png";
import patrocinador5 from "../assets/img/patrocinador5.png";
import patrocinador6 from "../assets/img/patrocinador6.png";

export const Formulario = () => {
    // Estado del formulario
    const [nroid, setNroid] = useState("");
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "usuarios"), {
                nroid: nroid,
                nombre: nombre,
                edad: edad,
                correo: correo,
                telefono: telefono,
                mensaje: mensaje,
            });

            alert("Te postulaste exitosamente!");
            // Restablecer los campos del formulario
            setNroid("");
            setNombre("");
            setEdad("");
            setCorreo("");
            setTelefono("");
            setMensaje("");
        } catch (error) {
            alert("Hubo un error al postularse:", error);
        }
    };

    // Verifica si todos los campos están llenos
    const isFormValid = nroid && nombre && edad && correo && telefono && mensaje;

    return (
        <section className="form" id="form">
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={logo} alt="logo" />
                        <img src={logo2} alt="Hackathon 2023" />
                    </Col>
                    <Col md={6}>
                        <h2>Formulario de inscripción</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col xs={12} sm={12} className="px-1">
                                    <input
                                        type="number"
                                        placeholder="Nro de identificacion"
                                        value={nroid}
                                        onChange={(e) => setNroid(e.target.value)}
                                    />
                                </Col>
                                <Col xs={12} sm={12} className="px-1">
                                    <input
                                        type="text"
                                        placeholder="Nombre Completo"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </Col>
                                <Col xs={12} sm={12} className="px-1">
                                    <input
                                        type="tel"
                                        placeholder="Telefono celular"
                                        value={telefono}
                                        onChange={(e) => setTelefono(e.target.value)}
                                    />
                                </Col>
                                <Col xs={12} sm={4} className="px-1">
                                    <input
                                        type="number"
                                        placeholder="Edad"
                                        value={edad}
                                        onChange={(e) => setEdad(e.target.value)}
                                    />
                                </Col>
                                <Col xs={12} sm={8} className="px-1">
                                    <input
                                        type="email"
                                        placeholder="Correo electrónico"
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)}
                                    />
                                </Col>
                                <Col xs={12} className="px-1">
                                    <input
                                        type="text"
                                        placeholder="¡Por qué quieres participar!"
                                        value={mensaje}
                                        onChange={(e) => setMensaje(e.target.value)}
                                    />
                                    <button type="submit" disabled={!isFormValid}>
                                        <span>Enviar</span>
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
            <div className="form-div">
                <h1 className="h1-text-2"> Patrocinadores Oficiales</h1>
                <div className="carousel-container">
                    <Carousel className="carousel" interval={3000} pause={false} fade>
                        <Carousel.Item>
                            <img className="d-block w-100" src={patrocinador1} alt="Patrocinador 1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={patrocinador2} alt="Patrocinador 2" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={patrocinador3} alt="Patrocinador 3" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={patrocinador4} alt="Patrocinador 4" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={patrocinador5} alt="Patrocinador 5" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={patrocinador6} alt="Patrocinador 6" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Formulario;
