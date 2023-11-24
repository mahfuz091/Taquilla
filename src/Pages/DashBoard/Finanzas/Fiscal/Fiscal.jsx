import React from "react";
import { Col, Row } from "react-bootstrap";

const Fiscal = () => {
  return (
    <div className='main-container fiscal'>
      <div className='fiscal-header'>
        <h4>Información Fisca</h4>
        <p>
          Añade tus datos fiscales o los de la empresa a la que se dirigirán las
          facturas
        </p>
      </div>
      <div className='fiscal-container'>
        <h4>Información del titular de la cuenta</h4>
        <div className='fiscal-form'>
          <form action=''>
            <div className='form-group'>
              <div class='radio-btn-group'>
                <input type='radio' name='yes-no' id='yes' value='yes' />
                <label for='yes'>Idividual</label>
                <input type='radio' name='yes-no' id='no' value='no' />
                <label for='no'>Empresa</label>
              </div>
            </div>
            <Row>
              <Col xl={6}>
                {" "}
                <div className='form-group'>
                  <label htmlFor=''>
                    Numbre<span className='span'>*</span>
                  </label>
                  <input
                    className='text-input'
                    type='text'
                    placeholder='Numbre'
                  />
                </div>
              </Col>
              <Col xl={6}>
                {" "}
                <div className='form-group'>
                  <label htmlFor=''>
                    Apellido(s)<span className='span'>*</span>
                  </label>
                  <input
                    className='text-input'
                    type='text'
                    placeholder='Apellido(s)'
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl={6}>
                {" "}
                <div className='form-group'>
                  <label htmlFor=''>
                    Direccion 1<span className='span'>*</span>
                  </label>
                  <input
                    className='text-input'
                    type='text'
                    placeholder='Direccion de la calle, numero'
                  />
                </div>
              </Col>
              <Col xl={6}>
                {" "}
                <div className='form-group'>
                  <label htmlFor=''>
                    Direccion 2<span className='span'>*</span>
                  </label>
                  <input
                    className='text-input'
                    type='text'
                    placeholder='Apt, Suite, Edif'
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl={6}>
                {" "}
                <div className='form-group'>
                  <label htmlFor=''>
                    NIF / CIF<span className='span'>*</span>
                  </label>
                  <input
                    className='text-input'
                    type='text'
                    placeholder='NIF / CIF'
                  />
                </div>
              </Col>
              <Col xl={6}>
                {" "}
                <div className='form-group'>
                  <label htmlFor=''>
                    Country<span className='span'>*</span>
                  </label>
                  <input
                    className='text-input'
                    type='text'
                    placeholder='Espana'
                  />
                </div>
              </Col>
            </Row>
          </form>
        </div>
        <div className='create-event-container-btn-group'>
          <button>Cancelar</button>
          <button>Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default Fiscal;
