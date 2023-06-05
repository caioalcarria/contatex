import { Content } from "./style"

export const Backend = ()=>{
    return(
        <Content>
            <h3>Back-end</h3>

            <div className="skils__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check' />

                        <div>
                            <h3>Node</h3>
                            <span>Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check' />

                        <div>
                            <h3>Express.js</h3>
                            <span>Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check' />

                        <div>
                            <h3>Django</h3>
                            <span>Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check' />

                        <div>
                            <h3>Postgresql </h3>
                            <span>Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check' />

                        <div>
                            <h3>MongoDB</h3>
                            <span>Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check' />

                        <div>
                            <h3>Python</h3>
                            <span>Intermediate</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Content>
    )
}