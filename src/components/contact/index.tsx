import { WorkStyle } from "./style"
import { Works } from "./works"

export const Contact = ()=>{
    return(
        <WorkStyle className="section" id="portfolio">
            <h2 className="section__title">Contatos</h2>
            <span className="section__subtitle"></span>

            <Works />
        </WorkStyle>
    )
}