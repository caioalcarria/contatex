import styled from "styled-components";

export const WorkStyle = styled.section`
width: 100vw;

`

export const WorksStyle = styled.div`
   display: flex;
   justify-content: center;

    .containerx {
        
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: center;
  width: 90vw;
  
}

.containerx::-webkit-scrollbar {
  display: none; /* Torna a barra de rolagem invisível no Chrome e Safari */
}

.containerx::-webkit-scrollbar-track {
  background-color: transparent; 
}

.containerx::-webkit-scrollbar-thumb {
  background-color: transparent; 
}
    span{
        cursor: pointer;
        color: var(--title-color);
        padding: 0.25rem 0.75rem;
        font-weight: var(--font-medium);
        border-radius: 0.5rem;
        text-transform: capitalize;

        :hover{
            background-color: var(--title-color);
            color: var(--container-color);
        }
    }

    .active-work{
        background-color: var(--title-color);
        color: var(--container-color);
    }

    @media screen and (max-width: 992px) {
        .containerx{
            gap: 3rem;
        }
    }

    @media screen and (max-width: 768px) {
        .containerx{
            grid-template-columns: max-content;
        }
    }

    @media screen and (max-width: 576px) {
        .containerx{
            grid-template-columns: 1fr;
        }
    }

    @media screen and (max-width: 350px){
        .work__filters{
            column-gap: 0.25rem;
        }

        span{
            font-size: var(--small-font-size);
        }
    }


`

export const WorkItemStyle = styled.div`
    background-color: var(--conatainer-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1.25rem;
    border-radius: 1rem;
    width: 250px;

    transition: transform 0.8s;

    :hover{
        transform: scale(1.03);
    }

    img{
        width: 250px;
        object-fit: cover;
        border-radius: 1rem;
        margin-bottom: var(--mb-1);
    }

    h3{
        font-size: var(--normal-font-size);
        font-weight: var(--font-medium);
        margin-bottom: var(--mb-0-5);
    }
    h2{
        color: var(--text-color);
        font-size: var(--small-font-size);
        display: flex;
        align-items: center;
        column-gap: 0.25rem;
        

        i{
            font-size: 1rem;
            transition: 0.4s;
        }

        :hover{
            i{
                transform: translateX(0.25rem);
            }
        }

    }

    a{
        color: var(--text-color);
        font-size: var(--small-font-size);
        display: flex;
        align-items: center;
        column-gap: 0.25rem;
        

        i{
            font-size: 1rem;
            transition: 0.4s;
        }

        :hover{
            i{
                transform: translateX(0.25rem);
            }
        }
    }

    @media screen and (max-width: 992px) {
        padding: 1rem;

        img{
            margin-bottom: 0.75rem;
        }

        h3{
            margin-bottom: 0.25rem;
        }
    }
    
    @media screen and (max-width: 576px) {
        img{
            width: 100%;
        }
    }
    
`