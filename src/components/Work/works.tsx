import { useEffect, useState } from "react"
import { projectsData, projectsNav } from "./data"
import { WorksStyle } from "./style"
import { WorkItem } from "./workItem"

interface IProject{
    id: number;
    image: string,
    email:string,
    phone: string,
    name: string,
    createdAt: string,
}




export const Works = ()=>{
    const [products, setProducts] = useState([]);
  
    useEffect(()=>{
      fetch('https://tense-earmuffs-lamb.cyclic.app/clients')
      .then((res)=>res.json())
      .then((res)=>setProducts(res))
      .catch((err)=>console.log(err))
    },[])



 



    return(
        <WorksStyle>
            
            <div className="container grid">
                {
                    products.length ?(
                        products.map((item)=>{
                            return <WorkItem key={item.id}  item={item} />
                        })
                    ):(
                        <p>Desculpe 😢 , ainda  estou estudando essa categoria.</p>
                    )
                }
            </div>
        </WorksStyle>
    )
}