import "./styles.css"
export default function Carrinho({codigo,descricao,quantidade,preco,imagem,precototal}){

    
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
          
          <th>total</th>
          
        </tr>
      </thead>
      <tbody>
        {
          
            <tr key={codigo}>
              <td>{descricao}</td>
              <td>{codigo}</td>
              <td>{quantidade}</td>
              <th>R${preco.toFixed(2)}</th>
              <th>R${precototal.toFixed(2)}</th>
              <th>
              <img src={imagem} alt='foto do produto' className= 'produto-img' />
              </th>
              
            </tr>
          
        }
      </tbody>
    </table>
  </>
         
      </div>
  )
}