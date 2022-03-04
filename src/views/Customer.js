
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

import './Customer.css';

export default function Customer() {

  const data = useSelector((state) =>  {
    return state
  });
  console.log(data.shop.itens)
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState({
    name: "Mauricio Viadi",
    age:24
  });
  
  const checkout =event=>{
    
    dispatch({type:'SET_CUSTOMER',customer});
    console.log(customer);
    event.preventDefault();
    
  }

  const addItens =event=>{
    console.log('adding item...')
    let itens = [];

    data.shop.itens.forEach(element => {
      itens.push(element);
    });
    console.log(itens);
    itens.push(document.getElementById("itemName").value);
    dispatch({type:'SET_ITENS',itens});
    
    
  }

  return (
    <div className="bg-customer">
      <h1>Customer data</h1>
      <div >
        <input type="text" 
               id="name" 
               placeholder='name'
               onChange={
                 (e)=>{
                    setCustomer({...customer, name:e.target.value});
                 }
               }/>
        <button onClick={checkout}>gravar</button>
      </div>
      <h3>Itens</h3>
      <div>
        <input type="text" placeholder="item name" id="itemName"></input>
        <button onClick={addItens}>adicionar</button>

        {data.shop.itens.map((item)=>{
            return <>
                    <span>{item}</span>
                    <hr/>
                  </>
          })
        }

      </div>
    </div>
  )
}