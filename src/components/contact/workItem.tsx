import { WorkItemStyle } from "./style"

export interface IProps{
    item: {
        id: number;
        photo: string,
        email:string,
        phone: string,
        name: string,
        createdAt: string,
        linkedin:string
    }
}

export const WorkItem = ({item}:IProps)=>{
    return(
        <WorkItemStyle>
            <img src={item.photo} alt="" />
            <div>
                <h3>{item.name}</h3>
                <h2>{item.email}</h2>
                <h2>{item.linkedin}</h2>
                <a href={item.phone} target="_blank">Phone <i className="bx bx-right-arrow-alt" /></a>
            </div>
            
        </WorkItemStyle>
    )
}