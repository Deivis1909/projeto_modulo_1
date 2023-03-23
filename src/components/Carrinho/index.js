export default function Carrinho({produtos}){

    return(
        <div>
            <h1>Carrinho de compras</h1>
            <table>
                <thead>
                    <th>produto</th>
                    <th>descricao</th>

                </thead>
                <tbody>
                    {
                        produtos.map( prod => <Linha key={prod.codigo} descricao={prod.descricao} />)
                    }

                </tbody>


            </table>

        </div>
    )
}
function Linha( {prod} ) {
    return (
      <tr>
        
        <td>{prod.descricao}</td>
        <td>salada</td>
        
      </tr>
    );
  }
  