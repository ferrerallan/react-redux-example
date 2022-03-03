
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Customer.css';

export default function Customer() {
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
    </div>
  )
}