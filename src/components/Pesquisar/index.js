import "./styles.css"
import { useRef, useState} from "react"
import Carrinho from "../Carrinho";

export default function Pesquisar({produtos}){

// quebrar o array produtos e selecionar pelo codigo 
// comparar codigo com numero vindo do imput
  

    const codDigitadoRef = useRef();
    
    const [lista,setLista] = useState([]);

    

    function handleSubmit(e){
        e.preventDefault();
        const codDigitado = codDigitadoRef.current.value;
            
            //verifica se a pessoa nao digitou o submit sem preencher
        if (!codDigitado){
            alert("todos os campos devem ser preenchidos");
            return codDigitado;
        }

       
       const filtrados = produtos.filter(prod => 
         prod.codigo === parseInt(codDigitado))
       
        
     //  return prod.codigo == parseInt(codDigitado)
       
     
     setLista([...lista,  ...filtrados]);
           
    }
       
    
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <h3> Pesquisar produto</h3>
          <label>
            codigo produto
            </label>
            
            <input ref={codDigitadoRef} type="number"></input>  
            <button type="submit" value="salada">adicionar</button>
        </form> 

          
            <Carrinho lista ={lista}/>
    </div>
    )
}