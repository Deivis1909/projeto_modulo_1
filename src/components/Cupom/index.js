import { useState } from "react";
import "./styles.css";

export default function Cupom({codigo,descricao,quantidade,preco,unitario}){

let valor = [codigo,descricao,quantidade,preco,unitario];

const [tot,setTot] = useState();

  //let salada = [total] ;

  //if (salada.length > 1){
  //let total = 0
  //salada.forEach(element => {
    //total += element;
    //setValor(total);

  //s})}
  
//const tot = l.reduce((acc,item)=>acc+item.unitario,0);


let total =
    
      valor.reduce((sumTotal, value) => {
        sumTotal += parseFloat(value.quantidade) * parseFloat(value.preco);

        return sumTotal
        
        
      }, 0)

      
      

return(
    <div className="principal">
    <>
<div className='fiscal'>
<table className="fiscal" >
<thead>
    <h3>Copum fiscal</h3>
 <tr>
   <th>produto</th>
   <th>codigo</th>
   <th>quantidade</th>
   <th>preco unitar.</th>
   <th>Valor unit</th>
   <th>Valor total</th>
   
 </tr>
</thead>
<tbody>
 {
   
     <tr key={codigo}>
       <td>{descricao}</td>
       <td>{codigo}</td>
       <td>{quantidade}</td>
       <th>{preco.toFixed(2)}</th>
       <th>{unitario.toFixed(2)}</th>
       <th>{total}</th>

       
     </tr>
   
 }
</tbody>
</table>
</div>
</>

</div>
)

}