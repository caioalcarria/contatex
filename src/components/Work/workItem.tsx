import { WorkItemStyle } from "./style"

export interface IProps{
    item: {
        id: number;
        image: string,
        email:string,
        phone: string,
        name: string,
        createdAt: string,
    }
}

export const WorkItem = ({item}:IProps)=>{
    return(
        <WorkItemStyle>
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <h2>{item.email}</h2>
            <a href={item.phone} target="_blank">Phone <i className="bx bx-right-arrow-alt" /></a>
        </WorkItemStyle>
    )
}