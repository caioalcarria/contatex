import styled from "styled-components";

export const ScrollStyle = styled.a`
    position: fixed;
    right: 2.5rem;
    z-index: var(--z-tooltip);
    transition: .4s;
    bottom: 3rem;
    
    background-color: var(--title-color);
    opacity: 0.8;
    padding: 0.3rem 0.5rem;
    border-radius: 0.4rem;

    i{
        font-size: 1.5rem;
        color: var(--container-color);

    }

    :hover{
        background-color: var(--title-color-dark);
    }

    @media screen and (max-width: 992px) {
        right: 1.5rem;
        padding: 0.25rem 0.4rem;
        bottom: 3rem;

        i{
            font-size: 1.25rem;
        }
    }

    @media screen and (max-width: 768px){
        bottom: 4rem;
    }

    @media screen and (max-width: 350px) {
        right: 1rem;
    }
`