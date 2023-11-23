import React from 'react';
import { Col, Row } from 'react-bootstrap';
import add from '../../../assets/images/add-1.svg'

const EditarTicket = () => {
    return (
        <div className="main-container editar-ticket">
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
            <div className="editar-ticket-container">
                <h4>Editar ticket</h4>
                <form action="" className="editar-ticket-form">
                    <Row>
                        <Col xl={6}>
                            <div className='form-group'>
                                <label htmlFor=''>
                                    Nombre<span className='span'>*</span>
                                </label>
                                <input
                                    className='text-input'
                                    type='text'
                                    placeholder='Minhaj Uddin'
                                />
                            </div>

                        </Col>
                        <Col xl={6}>
                            <div className='form-group'>
                                <label htmlFor=''>
                                    Nombre<span className='span'>*</span>
                                </label>
                                <input
                                    className='text-input'
                                    type='text'
                                    placeholder='Minhaj Uddin'
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <div className='form-group form-button'>
                                <label htmlFor=''>
                                    Cantidad disponible en web<span className='span'>*</span>
                                </label>
                                <div className="button-group">
                                    <button><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M0.719976 6.72007H11.28C11.6777 6.72007 12.0001 6.39772 12.0001 5.9999C12.0001 5.60218 11.6778 5.27982 11.28 5.27982H0.719976C0.322354 5.27992 0 5.60228 0 6C0 6.39772 0.322354 6.72007 0.719976 6.72007Z" fill="black" />
                                    </svg></button>
                                    <p>01</p>
                                    <button><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M7 12.0307C6.62238 12.0307 6.31641 11.7247 6.31641 11.3471V2.65289C6.31641 2.27528 6.62238 1.9693 7 1.9693C7.37762 1.9693 7.68359 2.27528 7.68359 2.65289V11.3471C7.68359 11.7247 7.37762 12.0307 7 12.0307Z" fill="black" />
                                        <path d="M11.3471 7.68359H2.65283C2.27521 7.68359 1.96924 7.37762 1.96924 7C1.96924 6.62238 2.27521 6.31641 2.65283 6.31641H11.3471C11.7247 6.31641 12.0306 6.62238 12.0306 7C12.0306 7.37762 11.7247 7.68359 11.3471 7.68359Z" fill="black" />
                                    </svg></button>
                                </div>
                            </div>
                            <div className="form-group form-button">
                                <label>Cantidad Disponible en</label>
                                <select name="" id="" className='editar-select'>
                                    <option value="">
                                        RRPP Group
                                    </option>
                                    <option value="">
                                        RRPP Group
                                    </option>
                                </select>
                                <div className="button-group">
                                    <button><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M0.719976 6.72007H11.28C11.6777 6.72007 12.0001 6.39772 12.0001 5.9999C12.0001 5.60218 11.6778 5.27982 11.28 5.27982H0.719976C0.322354 5.27992 0 5.60228 0 6C0 6.39772 0.322354 6.72007 0.719976 6.72007Z" fill="black" />
                                    </svg></button>
                                    <p>01</p>
                                    <button><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M7 12.0307C6.62238 12.0307 6.31641 11.7247 6.31641 11.3471V2.65289C6.31641 2.27528 6.62238 1.9693 7 1.9693C7.37762 1.9693 7.68359 2.27528 7.68359 2.65289V11.3471C7.68359 11.7247 7.37762 12.0307 7 12.0307Z" fill="black" />
                                        <path d="M11.3471 7.68359H2.65283C2.27521 7.68359 1.96924 7.37762 1.96924 7C1.96924 6.62238 2.27521 6.31641 2.65283 6.31641H11.3471C11.7247 6.31641 12.0306 6.62238 12.0306 7C12.0306 7.37762 11.7247 7.68359 11.3471 7.68359Z" fill="black" />
                                    </svg></button>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for='fileInput' className='editar-file-upload'>
                                    <input type='file' id='fileInput' />
                                    <span>
                                        <img src={add} alt="" />

                                    </span>
                                    Añadir fila
                                </label>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <div className='form-group form-button'>
                                <label htmlFor=''>
                                    Cantidad disponible en web<span className='span'>*</span>
                                </label>
                                <div className="button-group">
                                    <button><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M0.719976 6.72007H11.28C11.6777 6.72007 12.0001 6.39772 12.0001 5.9999C12.0001 5.60218 11.6778 5.27982 11.28 5.27982H0.719976C0.322354 5.27992 0 5.60228 0 6C0 6.39772 0.322354 6.72007 0.719976 6.72007Z" fill="black" />
                                    </svg></button>
                                    <p>01</p>
                                    <button><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M7 12.0307C6.62238 12.0307 6.31641 11.7247 6.31641 11.3471V2.65289C6.31641 2.27528 6.62238 1.9693 7 1.9693C7.37762 1.9693 7.68359 2.27528 7.68359 2.65289V11.3471C7.68359 11.7247 7.37762 12.0307 7 12.0307Z" fill="black" />
                                        <path d="M11.3471 7.68359H2.65283C2.27521 7.68359 1.96924 7.37762 1.96924 7C1.96924 6.62238 2.27521 6.31641 2.65283 6.31641H11.3471C11.7247 6.31641 12.0306 6.62238 12.0306 7C12.0306 7.37762 11.7247 7.68359 11.3471 7.68359Z" fill="black" />
                                    </svg></button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}><div className='form-group'>
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
                        </div></Col>
                        <Col xl={6}><div className='form-group'>
                            <label htmlFor=''>
                                Imagen del logotipo QR<span className='span'>*</span>
                            </label>
                            <div className='upload-photo'>
                                <div>
                                    <h5>Puedes subir el logotipo QR</h5>
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
                        </div></Col>
                    </Row>
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
                </form>
                <div className='create-event-container-btn-group'>
                    <button>Cancelar</button>
                    <button>Guardar</button>
                </div>
            </div>


        </div>
    );
};

export default EditarTicket;