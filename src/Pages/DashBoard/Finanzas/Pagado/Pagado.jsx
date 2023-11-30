import React, { useEffect, useState } from "react";
import PagadoTD from "./PagadoTD";
import Select from "react-select";
const options = [
  { value: "Todos los eventos", label: "Mostrar compras de" },
  { value: "Todos los eventos", label: "Mostrar compras de" },
  { value: "Todos los eventos", label: "Mostrar compras de" },
];
const options2 = [
  { value: "Más recientes", label: "Ordenar por" },
  { value: "Más recientes", label: "Ordenar por" },
  { value: "Más recientes", label: "Ordenar por" },
];

const Pagado = () => {
  const [pagados, setPagados] = useState([]);
  useEffect(() => {
    fetch("/pagado.json")
      .then((response) => response.json())
      .then((data) => setPagados(data));
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;
  const totalPages = Math.ceil(pagados.length / eventsPerPage);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = pagados.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      height: "44px",
      width: "208px",
      padding: "0px 20px 10px 20px",
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
  const defaultOption2 = options2[0];
  const handleSelectChange = (selectedOption) => {
    console.log("Selected value:", selectedOption.value);
  };
  return (
    <div className='pagado main-container'>
      <div className='pagado-header'>
        <h4>pagado</h4>
        <p>
          Solicita el pago de tu evento tres días después ha finalizado o
          comprueba su estado
        </p>
      </div>
      <div className='pagoda-container'>
        <h4>Detalles de pagos</h4>
        <div className='compras-container-header'>
          <div className='flex'>
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
            <div className='d-flex gap-20'>
              {" "}
              <div>
                <Select
                  className='select-wrap'
                  options={options2.map((option) => ({
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
                        <span className='label-text'>
                          {defaultOption.label}
                        </span>
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
              <div>
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
                        <span className='label-text'>
                          {defaultOption2.label}
                        </span>
                        <span className='d-block value-text'>
                          {defaultOption2.value}
                        </span>
                      </div>
                    ),
                    value: defaultOption2.value,
                  }}
                  onChange={handleSelectChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='pagado-table table-responsive'>
          <table>
            <thead>
              <tr>
                <th>Evento</th>
                <th>Fecha</th>
                <th>Ingresos brutos</th>
                <th>Pago neto</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {currentEvents.map((pagado) => (
                <PagadoTD key={pagado.id} pagado={pagado}></PagadoTD>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className='pagination'>
          <p>
            Mostrando de <span>{indexOfFirstEvent + 1}</span> a{" "}
            <span>{Math.min(indexOfLastEvent, pagados.length)}</span> artículos
          </p>
          <div className='pagination-button-group'>
            <button
              className='page-btn'
              onClick={goToPrevPage}
              disabled={currentPage === 1}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='7'
                height='12'
                viewBox='0 0 7 12'
                fill='none'
              >
                <path
                  d='M6 1L1 6L6 11'
                  stroke='#949CA9'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </button>
            {Array.from(
              { length: Math.ceil(pagados.length / eventsPerPage) },
              (_, i) => (
                <button
                  className={currentPage === i + 1 ? "active-page" : "page-btn"}
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </button>
              )
            )}
            <button
              className='page-btn'
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='7'
                height='12'
                viewBox='0 0 7 12'
                fill='none'
              >
                <path
                  d='M1 11L6 6L1 1'
                  stroke='#949CA9'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagado;
