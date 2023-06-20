import React, { useState } from 'react';
import Frutas from '../img/frutas.jpg';
import '../styles/styles.css';

const Buscador = () => {
  const list = ['banana', 'manzana', 'pera', 'mandarina', 'naranja', 'melon'];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (e) => {
    if (e.target.value === '') {
      setFilterList(list);
    }
    const filteredValues = list.filter(
      (item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };

  return (
    <>
      <div className="app">
        <div>
          <img src={Frutas} alt="frutas" />
        </div>
        <div>
          search:{' '}
          <input
            placeholder="ingrese fruta"
            name="query"
            type="text"
            onChange={handleSearch}
          />
        </div>
        {filterList &&
          filterList.map((item, index) => <div key={index}>{item}</div>)}
      </div>
    </>
  );
};

export default Buscador;
