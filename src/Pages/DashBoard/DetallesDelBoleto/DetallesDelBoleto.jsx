import React from "react";
import { Col, Row } from "react-bootstrap";
import credit from "../../../assets/images/credit-card 1.svg";
import qr from "../../../assets/images/bi_qr-code-scan.svg";
const DetallesDelBoleto = () => {
  return (
    <div className='main-container detallesboleto'>
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
      <div className='detallsboleto-container'>
        <Row>
          <Col xl={8}>
            <div className='detalls-form'>
              <h4>Detalles del boleto</h4>
              <form action=''>
                <div className='form-group'>
                  <label htmlFor=''>
                    Nombre<span className='span'>*</span>
                  </label>
                  <input
                    className='text-input'
                    type='text'
                    placeholder='Introduce tu Nombre'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor=''>
                    Correo<span className='span'>*</span>
                  </label>
                  <input
                    className='text-input'
                    type='text'
                    placeholder='Introduce tu correo '
                  />
                  <button className='forward-btn'>Reenviar</button>
                </div>
                <Row>
                  <Col md={6}>
                    <div className='form-group'>
                      <label htmlFor=''>
                        NDI/Passport/ID<span className='span'>*</span>
                      </label>
                      <input
                        className='text-input'
                        type='text'
                        placeholder='Introduce tu'
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className='form-group'>
                      <label htmlFor=''>
                        Fecha de Nacimiento<span className='span'>*</span>
                      </label>
                      <input
                        className='text-input'
                        type='text'
                        placeholder='Introduce tu'
                      />
                    </div>
                  </Col>
                </Row>
                <div className='form-group'>
                  <label htmlFor=''>
                    Teléfono<span className='span'>*</span>
                  </label>
                  <input
                    className='text-input'
                    type='text'
                    placeholder='introduce tu telefono '
                  />
                  <button className='forward-btn'>Reenviar</button>
                </div>
                <Row>
                  <Col>
                    <div className='form-group'>
                      <label htmlFor=''>
                        Código Postal<span className='span'>*</span>
                      </label>
                      <input
                        className='text-input'
                        type='text'
                        placeholder='Introduce tu'
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className='form-group '>
                      <label htmlFor=''>Género</label>
                      <div class='radio-btn-group radio'>
                        <input
                          type='radio'
                          name='yes-no'
                          id='yes'
                          value='masculina'
                        />
                        <label for='yes'>masculina</label>
                        <input
                          type='radio'
                          name='yes-no'
                          id='no'
                          value='femenina'
                        />
                        <label for='no'>Femenina</label>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className='text-center'>
                  <button className='thm-btn'>Guardar</button>
                </div>
              </form>
              <div className='detalls-venta-acceso-container'>
                <div className='detallas-venta'>
                  <h4>Detalles de venta</h4>
                  <p>
                    hora de venta: <span>234567</span>
                  </p>
                  <p>vendida por: 123</p>
                  <div className='detallas-btn'>
                    <p>SMS:</p>
                    <div>
                      <button className='yes-btn'>Yes</button>
                      <button className='no-btn'>No</button>
                    </div>
                  </div>
                </div>
                <div className='detallas-venta'>
                  <h4>Detalles de Acceso</h4>
                  <div className='detallas-btn'>
                    <p>Leida:</p>
                    <div>
                      <button className='yes-btn'>Yes</button>
                      <button className='no-btn'>No</button>
                    </div>
                  </div>
                  <p>
                    hora de lectura: <span>234567</span>
                  </p>
                  <p>Leida por: 123</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} className='tipodepogo'>
            <div className='tipo-de-pago-container'>
              <h6>tipo de pago</h6>
              <div className='credit-card'>
                <span>
                  <img src={credit} alt='' />
                </span>
                <p>Tarjeta de crédito</p>
              </div>
              <p className='operation'>
                Número de operación: <span>01233456-TXf34</span>
              </p>
              <p className='qty'>
                Cantidad: <span>234</span>
              </p>
              <p className='price'>
                Precio Total: <span>$3000</span>
              </p>
              <hr className='line-1' />
              <h6>Código QR</h6>
              <div className='qr-code'>
                <img src={qr} alt='' />
                <p>
                  Localizador: <span>6GDS3/DS8DJ</span>
                </p>
              </div>
            </div>
            <div className='tipo-de-btn-group'>
              <button>Reembolsar</button>
              <button>Descargar</button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DetallesDelBoleto;
