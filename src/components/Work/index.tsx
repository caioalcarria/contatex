import { WorkStyle } from "./style"
import { Works } from "./works"

export const Work = ()=>{
    return(
        <WorkStyle className="section" id="portfolio">
            <h2 className="section__title">Portfólio</h2>
            <span className="section__subtitle">Trabalhos mais recentes</span>

            <Works />
        </WorkStyle>
    )
}