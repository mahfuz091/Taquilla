import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditarEvento = () => {
    const [selectedDateTime, setSelectedDateTime] = useState(null);

    const handleDateTimeChange = (date) => {
        setSelectedDateTime(date);
    };
    return (
        <div className='main-container create-event'>
            <p>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='26'
                    height='27'
                    viewBox='0 0 26 27'
                    fill='none'
                >
                    <path
                        d='M16.5732 21.3918L8.68145 13.5L16.5732 5.60818'
                        stroke='black'
                        stroke-width='2.10448'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                    />
                </svg>
                Atrás
            </p>

            <div className='create-event-container'>
                <h4>Editar evento</h4>
                <form action=''>
                    <Row>
                        <Col xl={6}>
                            <div className='form-group'>
                                <label htmlFor=''>
                                    Titulo<span className='span'>*</span>
                                </label>
                                <input
                                    className='text-input'
                                    type='text'
                                    placeholder='Evento de prueba'
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>
                                    Ciudad<span className='span'>*</span>
                                </label>
                                <select className='custom-select' name='' id=''>
                                    <option value=''>Dhaka</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>
                                    Vestimenta<span className='span'>*</span>
                                </label>
                                <select className='custom-select' name='' id=''>
                                    <option value=''>Dhaka</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>
                                    Apertura de puertas<span className='span'>*</span>
                                </label>
                                <DatePicker
                                    className='date-picker'
                                    selected={selectedDateTime}
                                    onChange={handleDateTimeChange}
                                    showTimeSelect
                                    timeFormat='HH:mm'
                                    timeIntervals={15}
                                    dateFormat='d MMM yyyy, h: mm aa'
                                    timeCaption='Time'
                                    placeholderText='19 Oct 2023, 10: 00 AM '
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>
                                    Apertura de venta<span className='span'>*</span>
                                </label>
                                <DatePicker
                                    className='date-picker'
                                    selected={selectedDateTime}
                                    onChange={handleDateTimeChange}
                                    showTimeSelect
                                    timeFormat='HH:mm'
                                    timeIntervals={15}
                                    dateFormat='d MMM yyyy, h: mm aa'
                                    timeCaption='Time'
                                    placeholderText='19 Oct 2023, 10: 00 AM '
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor=''>
                                    ¿Deseas destacar tu evento por solo un 3% más de G.d.g?
                                </label>
                                <div class='radio-btn-group'>
                                    <input type='radio' name='yes-no' id='yes' value='yes' />
                                    <label for='yes'>Yes</label>
                                    <input type='radio' name='yes-no' id='no' value='no' />
                                    <label for='no'>No</label>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>
                                    Descripción<span className='span'>*</span>
                                </label>
                                <textarea
                                    className='text-input'
                                    type='text'
                                    placeholder='Mensaje aquí...'
                                />
                            </div>
                        </Col>
                        <Col xl={6}>
                            <div className='form-group'>
                                <label htmlFor=''>
                                    Lugar<span className='span'>*</span>
                                </label>
                                <input
                                    className='text-input'
                                    type='text'
                                    placeholder='Shukrabad'
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>
                                    Edad mínima<span className='span'>*</span>
                                </label>
                                <DatePicker
                                    className='date-picker-O'
                                    selected={selectedDateTime}
                                    onChange={handleDateTimeChange}
                                    timeFormat='HH:mm'
                                    timeIntervals={15}
                                    dateFormat='d MMM yyyy'
                                    placeholderText='-- -- --'
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>
                                    Fecha<span className='span'>*</span>
                                </label>
                                <DatePicker
                                    className='date-picker'
                                    selected={selectedDateTime}
                                    onChange={handleDateTimeChange}
                                    showTimeSelect
                                    timeFormat='HH:mm'
                                    timeIntervals={15}
                                    dateFormat='d MMM yyyy, h: mm aa'
                                    timeCaption='Time'
                                    placeholderText='19 Oct 2023, 10: 00 AM '
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>
                                    Cierre de puertas<span className='span'>*</span>
                                </label>
                                <DatePicker
                                    className='date-picker'
                                    selected={selectedDateTime}
                                    onChange={handleDateTimeChange}
                                    showTimeSelect
                                    timeFormat='HH:mm'
                                    timeIntervals={15}
                                    dateFormat='d MMM yyyy, h: mm aa'
                                    timeCaption='Time'
                                    placeholderText='19 Oct 2023, 10: 00 AM '
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>
                                    Cierre de venta<span className='span'>*</span>
                                </label>
                                <DatePicker
                                    className='date-picker'
                                    selected={selectedDateTime}
                                    onChange={handleDateTimeChange}
                                    showTimeSelect
                                    timeFormat='HH:mm'
                                    timeIntervals={15}
                                    dateFormat='d MMM yyyy, h: mm aa'
                                    timeCaption='Time'
                                    placeholderText='19 Oct 2023, 10: 00 AM '
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>
                                    Grupo de evento<span className='span'>*</span>
                                </label>
                                <select className='custom-select' name='' id=''>
                                    <option value=''>Evento de prueba</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>
                                    Subir Imagen<span className='span'>*</span>
                                </label>
                                <div className='upload-photo'>
                                    <div>
                                        <h5>Puedes subir foto</h5>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit </p>
                                        <label for='fileInput' className='custom-file-upload'>
                                            <input type='file' id='fileInput' />
                                            <span>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='9'
                                                    height='9'
                                                    viewBox='0 0 9 9'
                                                    fill='none'
                                                >
                                                    <g clip-path='url(#clip0_1_1509)'>
                                                        <path
                                                            d='M8.73196 1.91558V5.61643C8.73155 5.97815 8.58767 6.32495 8.33189 6.58073C8.07611 6.83651 7.72932 6.98038 7.36759 6.9808H5.89237C5.82 6.9808 5.75059 6.95205 5.69942 6.90087C5.64824 6.8497 5.61949 6.78029 5.61949 6.70792C5.61949 6.63555 5.64824 6.56614 5.69942 6.51497C5.75059 6.4638 5.82 6.43505 5.89237 6.43505H7.36759C7.58463 6.4348 7.79271 6.34848 7.94617 6.19501C8.09964 6.04154 8.18597 5.83346 8.18621 5.61643V1.91558C8.18597 1.69854 8.09964 1.49046 7.94617 1.33699C7.79271 1.18353 7.58463 1.0972 7.36759 1.09696H1.36437C1.14733 1.0972 0.939254 1.18353 0.785785 1.33699C0.632317 1.49046 0.545991 1.69854 0.545747 1.91558V5.61643C0.545991 5.83346 0.632317 6.04154 0.785785 6.19501C0.939254 6.34848 1.14733 6.4348 1.36437 6.43505H2.9427C3.01508 6.43505 3.08448 6.4638 3.13566 6.51497C3.18683 6.56614 3.21558 6.63555 3.21558 6.70792C3.21558 6.78029 3.18683 6.8497 3.13566 6.90087C3.08448 6.95205 3.01508 6.9808 2.9427 6.9808H1.36437C1.00264 6.98038 0.655848 6.83651 0.400068 6.58073C0.144288 6.32495 0.000410764 5.97815 0 5.61643V1.91558C0.000406259 1.55385 0.144282 1.20705 0.400063 0.951272C0.655844 0.695491 1.00264 0.551615 1.36437 0.551208H7.36759C7.72932 0.551615 8.07612 0.695491 8.3319 0.951272C8.58768 1.20705 8.73155 1.55385 8.73196 1.91558ZM5.88225 4.9842C5.93686 4.9367 5.97035 4.86946 5.97538 4.79727C5.98041 4.72508 5.95655 4.65384 5.90906 4.59924L4.57186 3.0619C4.54625 3.03246 4.51462 3.00885 4.4791 2.99267C4.44358 2.97649 4.40501 2.96812 4.36598 2.96812C4.32695 2.96812 4.28838 2.97649 4.25286 2.99267C4.21734 3.00885 4.18571 3.03246 4.1601 3.0619L2.8229 4.59927C2.77577 4.65393 2.75222 4.72503 2.75739 4.79701C2.76256 4.86899 2.79603 4.93599 2.85048 4.98335C2.90494 5.03071 2.97593 5.05457 3.04794 5.04971C3.11994 5.04485 3.18709 5.01167 3.23468 4.95742L4.09311 3.97052V8.17561C4.09311 8.24798 4.12186 8.31738 4.17303 8.36856C4.2242 8.41973 4.29361 8.44848 4.36598 8.44848C4.43835 8.44848 4.50776 8.41973 4.55893 8.36856C4.6101 8.31738 4.63885 8.24798 4.63885 8.17561V3.97052L5.49728 4.95742C5.5208 4.98446 5.54941 5.0066 5.58148 5.02258C5.61356 5.03856 5.64847 5.04807 5.68421 5.05056C5.71996 5.05305 5.75585 5.04847 5.78983 5.03709C5.82381 5.02571 5.85522 5.00775 5.88225 4.98423V4.9842Z'
                                                            fill='white'
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id='clip0_1_1509'>
                                                            <rect
                                                                width='8.73196'
                                                                height='8.73196'
                                                                fill='white'
                                                                transform='translate(0 0.134033)'
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                Upload Photo
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </form>
                <hr className='line-1' />
                <div className='create-event-container-btn-group'>
                    <button>Cancelar</button>
                    <button>Guardar</button>
                </div>
            </div>
        </div>
    );
};

export default EditarEvento;