
import { useState,useEffect } from 'react';
import './App.css';
//import Carrinho from './components/Carrinho';
import Header from './components/Header';
import ListaProdutos from './components/ListaProdutos';
import Pesquisar from './components/Pesquisar';
import Carrinho from './components/Carrinho';



function App() {

  const[produtos,setProdutos] = useState([]);


  useEffect(() => {

  fetch('produtos.json')
   .then(resp => resp.json())

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
      <div className="principal">
        <ListaProdutos produtos = {produtos} />
         <div>
         <Pesquisar produtos = {produtos} />
        
         </div>
         
    </div>
      
    </div>
  );
}

export default App;
