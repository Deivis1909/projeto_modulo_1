
import "./styles.css";

export default function Cupom({codigo,descricao,quantidade,preco,unitario,totalCupom}){






      
      

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
     

       
     </tr>
   
 }
</tbody>
<tfoot>

      <th>Valor total : {totalCupom}</th>  
</tfoot>
</table>
</div>
</>

</div>
)

}