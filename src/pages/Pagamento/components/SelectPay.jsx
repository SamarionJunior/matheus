import React, { useState } from 'react';

const SelectPay = () => {

  function onChangeRadio(e, tipo){
    const value = e.target.value
    console.log(value, tipo)
    if(tipo === "Pagamento"){
      if(value === "Dinheiro"){
        setFormaDePagamento(true)
      }else{
        setFormaDePagamento(false)
      }
    }
    if(tipo === "Recebimento"){
      if(value === "Entregar"){
        setFormaDeRecebimento(true)
      }
      if(value === "Retirada"){
        setFormaDeRecebimento(false)
      }
    }
  }

  const [formaDePagamento, setFormaDePagamento] = useState(true)
  const [formaDeRecebimento, setFormaDeRecebimento] = useState(true)

  return (

    <div className='SelectPay'>
      <div className="SelectPayContent">

        <div className="Radio">

          <p>Selecione a Foma de Pagamento:</p>
          <div className="RadioColection" onChange={e => onChangeRadio(e, "Pagamento")}>
            <input className='SelectPayButton' id='Dinheiro' type='radio' name='metodoDePagamento' value='Dinheiro' defaultChecked/>
            <label htmlFor="Dinheiro">Dinheiro</label>
            <input className='SelectPayButton' id='Pix' type='radio' name='metodoDePagamento' value='Pix'/>
            <label htmlFor="Pix">Pix</label>
            <input className='SelectPayButton' id='Cartão' type='radio' name='metodoDePagamento' value='Cartão'/>
            <label htmlFor="Cartão">Cartão</label>
          </div>

          {formaDePagamento ? 
          <div className="SelecForm">
            <p>Precisa de Troco?</p>
            <input className='SelecFormInput' type="text" name="" id="" placeholder='Troco para quanto?'/>
          </div>
          :
          null
          }

          <p>Selecione Como Deseja Receber o Pedido:</p>
          <div className="RadioColection" onChange={e => onChangeRadio(e, "Recebimento")}>
            <input className='SelectPayButton' id='Entregar' type='radio' name='metodoDeRecebimento' value='Entregar' defaultChecked/>
            <label htmlFor="Entregar">Entregar</label>
            <input className='SelectPayButton' id='Retirada' type='radio' name='metodoDeRecebimento' value='Retirada'/>
            <label htmlFor="Retirada">Retirada</label>
          </div>

        </div>

        {formaDeRecebimento ? 
          <div className="SelecForm">
            <p>Informe seu endereço para entrega:</p>
            <input className='SelecFormInput' type="text" name="" id="" placeholder='Bairro'/>
            <input className='SelecFormInput' type="text" name="" id="" placeholder='Rua'/>
            <input className='SelecFormInput' type="text" name="" id="" placeholder='Tipo'/>
            <input className='SelecFormInput' type="text" name="" id="" placeholder='Numero'/>
            <input className='SelecFormInput' type="text" name="" id="" placeholder='Complemento'/>
          </div>
        :
          <div className="WarningPagamento">
            <p>Recebar seu pedido nesse endereço:</p>
            <p>Recebar seu pedido nesse endereço:</p>
          </div>
        }

      </div>
    </div>

  );
}

export default SelectPay
