import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CreateEvent = () => {
    return (
        <div className="main-container create-event">
            <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                <path d="M16.5732 21.3918L8.68145 13.5L16.5732 5.60818" stroke="black" stroke-width="2.10448" stroke-linecap="round" stroke-linejoin="round" />
            </svg>Atrás</p>

            <div className="create-event-container">

                <h4>crear evento</h4>
                <form action="">

                    <Row>
                        <Col xl={6}>
                            <div className="from-group">
                                <label htmlFor="">Titulo<span>*</span></label>
                                <input className="" type="text" placeholder='Evento de prueba' />
                            </div>
                            <div className="from-group">
                                <label htmlFor="">Ciudad<span>*</span></label>
                                <select className="custom-select" name="" id="">
                                    <option value="">Dhaka</option>
                                </select>
                            </div>
                            <div className="from-group">
                                <label htmlFor="">Vestimenta<span>*</span></label>
                                <select className="custom-select" name="" id="">
                                    <option value="">Dhaka</option>
                                </select>
                            </div>
                            <div className="from-group">
                                <label htmlFor="">Titulo<span>*</span></label>
                                <input className="form-control" type="text" placeholder='Evento de prueba' />
                            </div>
                            <div className="from-group">
                                <label htmlFor="">Titulo<span>*</span></label>
                                <input className="form-control" type="text" placeholder='Evento de prueba' />
                            </div>
                        </Col>
                        <Col xl={6}>
                            <div className="from-group">
                                <label htmlFor="">Titulo<span>*</span></label>
                                <input className="form-control" type="text" />
                            </div>
                        </Col>
                    </Row>

                </form>

            </div>


        </div>
    );
};

export default CreateEvent;