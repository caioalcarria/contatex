import { useState } from "react"
import { QualiStyle } from "./style"

export const Qualification = ()=>{
    const [ toggleState, setToggleState ] = useState(1)

    return(
        <QualiStyle className="section" id="qualification">
            <h2 className="section__title">Qualificações</h2>
            <span className="section__subtitle">Minha jornada pessoal</span>

            <div className="container">
                <div className="qualification__tabs">
                    <div onClick={()=> setToggleState(1)} className={toggleState == 1 ? "qualification__active button--flex" : "button--flex"}>
                        <i className='uil uil-graduation-cap ' /> Education
                    </div>

                    <div onClick={()=> setToggleState(2)} className={toggleState == 2 ? "qualification__active button--flex" : "button--flex"}>
                        <i className='uil uil-briefcase-alt ' /> Experience
                    </div>
                </div>

                <div className="qualification__section">
                    <div className={toggleState == 1 ? "qualification__content-active" : ""}>
                        <div className="qualification__data">
                            <div>
                                <h3>FullStack Developer</h3>
                                <p>Kenzie Academy</p>

                                <div>
                                    <i className='uil uil-calendar-alt ' /> 06/22 - Presente
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3>Web Developer</h3>
                                <p>Kenzie Academy</p>

                                <div>
                                    <i className='uil uil-calendar-alt ' /> 06/22 - 11/22
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3>Bacharelado em Sistemas de Informação</h3>
                                <p>UFBA</p>

                                <div>
                                    <i className='uil uil-calendar-alt ' /> 01/22 - 01/27
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        
                    </div>

                    <div className={toggleState == 2 ? "qualification__content-active" : ""}>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3>Professor de manutenção de computadores</h3>
                                <p>Sociedade Holon</p>

                                <div>
                                    <i className='uil uil-calendar-alt ' /> 04/23 - Presente
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3>Monitor</h3>
                                <p>Kenzie Academy</p>

                                <div>
                                    <i className='uil uil-calendar-alt ' /> 07/22 - 10/22
                                </div>
                            </div>

                            
                            
                            

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </QualiStyle>
    )
}