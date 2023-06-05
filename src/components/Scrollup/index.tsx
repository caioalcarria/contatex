import { useState } from "react"
import { ScrollStyle} from "./style"

export const  Scrollup = ()=>{
    const [ isScroll, setIsScroll ] = useState(false)

    window.addEventListener("scroll", function(){

        if(this.scrollY >= 560){
            setIsScroll(true)
        }else{
            setIsScroll(false)
        }
    })

    if(isScroll){
        return(
            <ScrollStyle className="scrollup" href="#">
                    <i className="uil uil-arrow-up" />
            </ScrollStyle>
        )
    }

    return <></>

}