import React from 'react';

const SelectPay = () => {

  return (

    <div className='SelectPay'>
      <div className="SelectPayContent">
        <button className='SelectPayButton'>Dinheiro</button>
        <button className='SelectPayButton'>Pix</button>
        <button className='SelectPayButton'>Boleto</button>
      </div>
    </div>

  );
}

export default SelectPay
