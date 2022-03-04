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
      <input type="text"value={data.shop.customer.name}></input>
    </div>
  )
}