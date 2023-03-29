
export default  function ListaProdutos({produtos}){
   

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
            
          </tr>
        </thead>
        <tbody>
          {
            produtos.map(prod => 
              <tr key={prod.codigo}>
                <td>{prod.descricao}</td>
                <td>{prod.codigo}</td>
                
              </tr>
            )
          }
        </tbody>
      </table>
    </>

         </div>
    )
}