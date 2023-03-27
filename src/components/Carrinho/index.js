export default function Carrinho({lista}){

    
  return(
      <div>
           <>
    <div className='tabela-titulo'>
    
    </div>
    <table className='tabela'>
      <thead>
        <tr>
          <th>produto</th>
          <th>codigo</th>
          <th>quantidade</th>
          <th>preco unitar.</th>
          
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
  </>
         
      </div>
  )
}