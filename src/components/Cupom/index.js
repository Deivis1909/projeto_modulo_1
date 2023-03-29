import "./styles.css"
export default function Cupom({codigo,descricao,quantidade,preco,precototal}){

return(
    <div>
    <>
<div className='fiscal'>
<table >
<thead>
    <h3>Copum fiscal</h3>
 <tr>
   <th>produto</th>
   <th>codigo</th>
   <th>quantidade</th>
   <th>preco unitar.</th>
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
       <th>{precototal.toFixed(2)}</th>
       
     </tr>
   
 }
</tbody>
</table>
</div>
</>

</div>
)

}