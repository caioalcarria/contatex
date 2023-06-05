import { useState } from "react"
import { HeaderStyle } from "./style"

export const Header = ()=>{
    const [isMenu, setIsMenu] = useState(false)

    const [ section, setSection ] = useState("#home")

 

    return(
        <HeaderStyle>
            <nav className="container">
                <div className="nav__logo">
                    <div className="logo__img"></div>
                    <a href="#" >Contatex</a>
                </div>

                <div className={isMenu ? "nav__menu show-menu":"nav__menu"}>
                    <ul className="grid">
                        <li className="nav__item">
                            <a href="#home" className="home">
                                <i className="uil uil-estate nav__icon" />  Sair
                            </a>
                        </li>

                        
                    </ul>

                    <i className="uil uil-times nav__close" onClick={()=>{setIsMenu(false)}}/>
                </div>

                <div className="nav__toggle" onClick={()=>{setIsMenu(true)}}>
                    <i className="uil uil-apps" />
                </div>
            </nav>
        </HeaderStyle>
    )
}