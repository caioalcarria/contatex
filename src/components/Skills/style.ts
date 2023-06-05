import styled from "styled-components";

export const SkillStyle = styled.section`
    & > div{
        grid-template-columns: repeat(3, 350px);
        column-gap: 3rem;
        justify-content: center;
    }

    @media screen and (max-width: 1170px){
        & > div{
            grid-template-columns: max-content;
            row-gap: 2rem;
        }
    }

    @media screen and (max-width: 576px){
        & > div{
            grid-template-columns: 1fr;
        }
    }
`

export const Content = styled.div`
    background-color: var(--container-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 1.25rem;
    padding: 2rem 4rem;

    transition: transform 0.7s;

    :hover{
        transform: scale(1.03);
    }

    & > h3{
        font-size: var(--normal-font-size);
        font-weight: var(--font-medium);
        text-align: center;
        margin-bottom: var(--mb-1-5);
    }

    & > div{
        display: flex;
        justify-content: center;
        column-gap: 2.5rem;
    }

    .skills__group{
        display: grid;
        align-items: flex-start;
        row-gap: 1rem;
    }

    .skills__data{
        display: flex;
        column-gap: 0.5rem;

        i{
            color: var(--title-color);
        }

        h3{
            font-size: var(--normal-font-size);
            font-weight: var(--font-medium);
            line-height: 18px;
        }

        span{
            font-size: var(--tiny-font-size);
        }
    }

    @media screen and (max-width: 576px){
        padding: 1.5rem;
    }

    @media screen and (max-width: 350px){
        & > div{
            column-gap: 1.25rem;
        }

        .skills__data{
            h3{
                font-size: var(--small-font-size);
            }
        }
    }
    
`

