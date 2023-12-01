import React from "react";
import img1 from "../../../../public/images/img-1.png";

const PaymentDetails = () => {
  return (
    <div className='payment-details main-container'>
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
      <div className='paymemt-details-header'>
        <h4>Detalles del pago</h4>
        <hr className='line' />
        <div className='paymemt-details-content'>
          <p className='estado'>
            Estado: <span>Paid</span>
          </p>
          <p className='pago'>
            Pago Para: <span>Taquilla Central de Ocio S.L</span>
          </p>
          <p className='iban'>
            IBAN: <span>ES52 8843 8834 2237 2723</span>
          </p>
        </div>
      </div>
      <div className='administration-container'>
        <h4>Gastos de gestión</h4>
        <div className='administration-table table-responsive'>
          <table>
            <thead>
              <tr>
                <th>Entrada</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='table-img'>
                  <img
                    style={{ width: "52px", height: "52px" }}
                    src={img1}
                    alt=''
                  />
                  <p>Evento de prueba</p>
                </td>
                <td>15.00€</td>
                <td>234</td>
                <td>3810.50€</td>
              </tr>
              <tr className='secound-row'>
                <td>G.d. Gestión</td>
                <td>0.95€</td>
                <td>234</td>
                <td>241.30€</td>
              </tr>

              <tr className='third-row'>
                <td>G.d SMS</td>
                <td>0.50€</td>
                <td>32</td>
                <td>16.00€</td>
              </tr>
              <svg
                className='row-line'
                xmlns='http://www.w3.org/2000/svg'
                width='2'
                height='120'
                viewBox='0 0 2 139'
                fill='none'
              >
                <path d='M1 0L1.00001 139' stroke='#EEEEEE' />
              </svg>
              <span className='column-line-1'></span>
              <span className='column-line-2'></span>
              <tr className='fourth-row'>
                <td>
                  <div className='table-img'>
                    <img
                      style={{ width: "52px", height: "52px" }}
                      src={img1}
                      alt=''
                    />
                    <p>Evento de prueba</p>
                  </div>
                </td>
                <td>15.00€</td>
                <td>234</td>
                <td>3810.50€</td>
              </tr>
              <tr className='fifth-row'>
                <td>G.d. Gestión</td>
                <td>0.95€</td>
                <td>234</td>
                <td>241.30€</td>
              </tr>

              <tr className='sixth-row'>
                <td>G.d SMS</td>
                <td>0.50€</td>
                <td>32</td>
                <td>16.00€</td>
              </tr>
              <svg
                className='row-line-2'
                xmlns='http://www.w3.org/2000/svg'
                width='2'
                height='120'
                viewBox='0 0 2 149'
                fill='none'
              >
                <path d='M1 0L1.00001 149' stroke='white' />
              </svg>
              <span className='column-line-3'></span>
              <span className='column-line-4'></span>
            </tbody>
          </table>
        </div>
      </div>
      <div className='payment-summary'>
        <h4>Resumen de pago</h4>
        <div className='payment-row'>
          <p>Ingresos brutos:</p>
          <p className='amount'>€24243.34</p>
        </div>
        <div className='payment-row'>
          <p>Gastos de Gestión:</p>
          <p className='amount'>€432.22</p>
        </div>
        <div className='payment-row'>
          <p>Servicio de envío de SMS:</p>
          <p className='amount'>€22.60</p>
        </div>
        <div className='payment-row-total'>
          <p>Pago neto total: </p>
          <p className='amount'>€23788.22</p>
        </div>
        <div className='text-center'>
          <button className='thm-btn'>Solicitar pago</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
