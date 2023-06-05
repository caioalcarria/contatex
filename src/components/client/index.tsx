import { WorkStyle } from "./style"
import { Works } from "./works"

export const Client = ()=>{
    return(
        <WorkStyle className="section" id="portfolio">
            <h2 className="section__title">Clientes</h2>
            <span className="section__subtitle"></span>

            <Works />
        </WorkStyle>
    )
}