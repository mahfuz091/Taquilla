import React from "react";
import { Col, Row } from "react-bootstrap";

const Cuenta = () => {
  return (
    <div className='main-container cuenta'>
      <div className='cuenta-header'>
        <h4>cuenta bancaria</h4>
        <p>
          Añade una cuenta bancaria para recibir pagos de tus eventos y poder
          publicarlos
        </p>
      </div>
      <div className='cuenta-container'>
        <h4>Información de la cuenta bancaria</h4>
        <div className='cuenta-form'>
          <form action=''>
            <div className='form-group'>
              <div class='radio-btn-group'>
                <input type='radio' name='yes-no' id='yes' value='yes' />
                <label for='yes'>Idividual</label>
                <input type='radio' name='yes-no' id='no' value='no' />
                <label for='no'>Empresa</label>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor=''>
                Nombre del banco<span className='span'>*</span>
              </label>
              <input
                className='text-input'
                type='text'
                placeholder='Por ejemplo: banco Santander, CaixaBank, BBVA, Etc'
              />
            </div>

            <div className='form-group'>
              <label htmlFor=''>
                Numero IBAN<span className='span'>*</span>
              </label>
              <Row>
                <Col xl={6}>
                  <input
                    className='text-input'
                    type='text'
                    placeholder='ES1120130160344655510913'
                  />
                </Col>
                <Col xl={6}>
                  <input
                    className='text-input'
                    type='text'
                    placeholder='Vuelve a introducir el numero IBAN'
                  />
                </Col>
              </Row>
            </div>

            <div className='form-group'>
              <label htmlFor=''>
                Codigo BIC/SWIFt<span className='span'>*</span>
              </label>
              <Row>
                <Col xl={6}>
                  <input
                    className='text-input'
                    type='text'
                    placeholder='CESCESBBXXX'
                  />
                </Col>
                <Col xl={6}>
                  <input
                    className='text-input'
                    type='text'
                    placeholder='Vuelve a introducir el codigo BIC/SWIFT'
                  />
                </Col>
              </Row>
            </div>
          </form>
        </div>
        <div className='d-flex justify-content-between '>
          <p className='note'>
            <span>*NOTA:</span> El titular de la cuenta debe ser el mismo que el
            introducido en Información Fiscal
          </p>
          <div className='create-event-container-btn-group'>
            <button>Cancelar</button>
            <button>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuenta;
