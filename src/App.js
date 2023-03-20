
import { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ListaProdutos from './components/ListaProdutos';
//import ListaProdutos from './components/ListaProdutos';



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
      <ListaProdutos produtos = {produtos} />
      
      
      
    </div>
  );
}

export default App;
