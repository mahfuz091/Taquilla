import React, { useEffect, useState } from "react";
import FacturasTR from "./FacturasTR";
import Select from "react-select";
const options = [
  { value: "Más recientes", label: "Ordenar por" },
  { value: "Más recientes", label: "Ordenar por" },
  { value: "Más recientes", label: "Ordenar por" },
];

const Facturas = () => {
  const [facturas, setFacturas] = useState([]);
  useEffect(() => {
    fetch("/facturas.json")
      .then((response) => response.json())
      .then((data) => setFacturas(data));
  }, []);
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      height: "44px",
      width: "200px",
      padding: "2px 10px 10px 20px",
      border: "1px solid #DDD",
      borderRadius: "100px",
      boxShadow: state.isFocused ? "0 0 0 2px #ffff" : "none",
      "&:hover": {
        borderColor: state.isFocused ? "#ffff" : "#ccc",
        background: "#FFFF",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      display: "flex",
      flexDirection: "column",
      backgroundColor: state.isSelected
        ? "#fff"
        : state.isFocused
        ? "#E6F0FF"
        : "white",
    }),
  };
  const defaultOption = options[0];
  const handleSelectChange = (selectedOption) => {
    console.log("Selected value:", selectedOption.value);
  };

  return (
    <div className='facturas main-container'>
      <div className='facturas-header'>
        <h4>Facturas</h4>
        <p>
          Consulta las facturas de gastos derivados. de la venta de tus eventos
        </p>
      </div>
      <div className='facturas-container'>
        <h4>Detalles de pagos</h4>
        <div className='compras-container-header'>
          <div className='flex '>
            <div className='search-box'>
              <input
                className='search'
                type='search'
                name=''
                id=''
                placeholder='Buscar número de pedido, correo electrónico o normal'
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                className='search-icon'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z'
                  fill='#666666'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M15.9433 15.9429C16.3338 15.5524 16.967 15.5524 17.3575 15.9429L21.7075 20.2929C22.098 20.6834 22.098 21.3166 21.7075 21.7071C21.317 22.0976 20.6838 22.0976 20.2933 21.7071L15.9433 17.3571C15.5528 16.9666 15.5528 16.3334 15.9433 15.9429Z'
                  fill='#666666'
                />
              </svg>
            </div>
            <div>
              {/* <select id='mySelect' className='myselect'>
                <option value='default'>
                  <span>Ordenar por</span> <span>Más recientes</span>
                </option>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </select> */}
              <Select
                className='select-wrap'
                options={options.map((option) => ({
                  label: (
                    <div>
                      <span className='label-text'>{option.label}</span>
                      <span className='d-block value-text '>
                        {option.value}
                      </span>
                    </div>
                  ),
                  value: option.value,
                }))}
                styles={customStyles}
                defaultValue={{
                  label: (
                    <div>
                      <span className='label-text'>{defaultOption.label}</span>
                      <span className='d-block value-text'>
                        {defaultOption.value}
                      </span>
                    </div>
                  ),
                  value: defaultOption.value,
                }}
                onChange={handleSelectChange}
              />
            </div>
          </div>
        </div>
        <div className='facturas-table table-responsive'>
          <table>
            <thead>
              <tr>
                <th>Sin factura</th>
                <th style={{ minWidth: "125px" }}>Fecha</th>
                <th style={{ minWidth: "170px" }}>Evento</th>
                <th style={{ minWidth: "102px" }}>Cantidad</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {facturas.map((factura) => (
                <FacturasTR key={factura.id} factura={factura}></FacturasTR>
              ))}
            </tbody>
          </table>
          <p className='note'>
            <span>*NOTA:</span> El pago de las facturas se realiza
            automáticamente al deducirse del monto total a transferir
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facturas;
