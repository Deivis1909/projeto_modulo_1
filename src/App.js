
import { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
//import ListaProdutos from './components/ListaProdutos';



function App() {

  const[produtos,setProdutos] = useState([]);

  useEffect(() => {

   fetch('produtos.json')
   .then(resp => resp.json())

   // pra aonde vai jogar a response do json

   //pra onde vai jogar dados do json
   //.then(data =>{
  // })

  .then(produtos => { 
    setProdutos(produtos);
    
  } )
  .catch(erro => console.log(erro));
}, []);

  


  return (
    <div className="App">
      <Header />
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
  );
}

export default App;
