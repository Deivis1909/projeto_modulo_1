import "./styles.css"
export default function Cupom({lista}){

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
   lista.map(prod => 
     <tr key={prod.codigo}>
       <td>{prod.descricao}</td>
       <td>{prod.codigo}</td>
       <td>{prod.quantidade}</td>
       <th>{prod.preco}</th>
       
     </tr>
   )
 }
</tbody>
</table>
</div>
</>

</div>
)

}