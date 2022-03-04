import './Itens.css';
import {useSelector} from 'react-redux';


export default function Itens(){
  const data = useSelector((state) =>  {
    return state
  });

  console.log(data);

  return (
    <div  className="bg-itens">
      <h1>Itens</h1>
      <h3>Customer</h3>
      <input type="text"value={data.shop.customer.name}></input>
      <h5>Itens</h5>
      <ul>
        {data.shop.itens.map((item)=>{
          return <li>{item}</li>
        })
        }
      </ul>
    </div>
  )
}