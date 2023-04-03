import "./styles.css"
import { useRef, useState} from "react"
import Carrinho from "../Carrinho";
import Cupom from "../Cupom";

export default function Pesquisar({produtos}){

// quebrar o array produtos e selecionar pelo codigo 
// comparar codigo com numero vindo do imput
  
    
    const codDigitadoRef = useRef();
    const [lista,setLista] = useState([]);
   
    
    const quantRef= useRef();

    function calculaTotalDoCupom() {
      let totalCupom = 0;
      lista.forEach(element => {
        totalCupom += element.preco * element.quantidade
      });
      return totalCupom;
    }
    

    function handleSubmit(e){
        e.preventDefault();
        const codDigitado = codDigitadoRef.current.value;
        const quantid = quantRef.current.value;   
            //quantid = parseInt(quantid);
           
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
          imagem: produto.imagem,
          total:produto.total
        }
          setLista([...lista, listaAdicional]);
      };
    
    incluirLista(codDigitado,quantid)  
           
    }

  //  let tot = 0;
    //function total(tot,item){

      //  return tot +(item.unitario * item.quant)
      //}
        
      
    
        
   
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

        {
                lista.map(l => <Carrinho key={l.codigo} 
                    codigo={l.codigo}
          descricao= {l.descricao}
          marca={l.marca}
          preco= {l.preco}
          quantidade= {l.quantidade}
          imagem= {l.imagem}
          unitario={l.quantidade*l.preco}
       
          />)
            }
            {
                lista.map(l => <Cupom key={l.codigo} 
                    codigo={l.codigo}
          descricao= {l.descricao}
          marca={l.marca}
          preco= {l.preco}
          quantidade= {l.quantidade}
          imagem= {l.imagem}
          unitario={l.quantidade*l.preco}
          totalCupom = {calculaTotalDoCupom()}
          
          
          
          
          />)
        
            }
            
            
    </div>
    )
}
