import "./styles.css"
import { useRef, useState} from "react"
import Carrinho from "../Carrinho";

export default function Pesquisar({produtos}){

// quebrar o array produtos e selecionar pelo codigo 
// comparar codigo com numero vindo do imput
  
    
    const codDigitadoRef = useRef();
    const [lista,setLista] = useState([]);
    
    const quantRef= useRef();


    

    function handleSubmit(e){
        e.preventDefault();
        const codDigitado = codDigitadoRef.current.value;
        const quantid = quantRef.current.value;   
            //quantid = parseInt(quantid);
            alert(quantid);
        //verifica se a pessoa nao digitou o submit sem preencher
        if (!codDigitado){
            alert("todos os campos devem ser preenchidos");
            return codDigitado;
        }

       
       const filtrados = produtos.filter(prod => 
         prod.codigo === parseInt(codDigitado))
       
        
     //  return prod.codigo == parseInt(codDigitado)
       
     // concatenando listas 
     setLista([...lista,  ...filtrados]);

     const incluirLista = (codProd, qtdProd) => {
        const produto = produtos.find(p1 => p1.codigo === +codProd);
        const listaAdicional =  {
          codigo: codProd,
          descricao: produto.descricao,
          marca: produto.marca,
          preco: produto.preco,
          quantidade: qtdProd,
          imagem: produto.imagem}
          setLista([...lista, listaAdicional]);
      };
    
    incluirLista(codDigitado,quantid)  
           
    }
       
    
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <h3> Pesquisar produto</h3>
            <div>
            <label htmlFor="cod">codigo:</label> 
            <input ref={codDigitadoRef} type="number" id="cod"></input>
            </div>

            <div>
            <label htmlFor="quant">quantidade:</label> 
            <input ref={quantRef} type="number" id="quant"></input> 
            </div>
            <button type="submit" value={'salada'}>adicionar</button>
        </form> 

          
            <Carrinho lista ={lista}/>
    </div>
    )
}