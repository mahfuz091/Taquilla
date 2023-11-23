import React from 'react';
import mask from '../../../assets/images/Mask group.png'

const Pedidos = () => {
    return (
        <div className="main-container pedidos">

            <div className='pedidos-header'>

                <h4>Compras</h4>
                <p>
                    Solicita el pago de tu evento tres días después
                    ha finalizado o comprueba su estado
                </p>
            </div>
            <div className="compras-container">
                <h4>Compras</h4>
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
                        <div>
                            <select id='mySelect' className='myselect'>
                                <option value='default'>
                                    <span>Ordenar por</span> <span>Más recientes</span>

                                </option>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className='pedidos-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Localizador</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>DNI</th>
                                <th>Tipo</th>
                                <th>Importe</th>
                                <th>Fecha de compra</th>
                                <th></th>
                            </tr>
                        </thead>
                        {/* {currentEvents.map((evento) => (
                            <SingleEventoTD key={evento.id} evento={evento}></SingleEventoTD>
                        ))} */}
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Pedidos;