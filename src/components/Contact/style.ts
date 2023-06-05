import styled from "styled-components";

export const ContactStyle = styled.section`
    &> div{
        
        justify-content: center;
        column-gap: 6rem;
        padding-bottom: 3rem;

        > div > h3{
            text-align: center;
            font-size: var(--h3-font-size);
            font-weight: var(--font-medium);
            margin-bottom: var(--mb-1-5);
        }
    }

    

    .contact__card{
        background-color: var(--container-color);
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 1rem;
        border-radius: 0.75rem;
        text-align: center;


        & > i{
            font-size: 2rem;
            color: var(--title-color);
            margin-bottom: var(--mb-0-25);
        }

        h3,span{
            font-size: var(--small-font-size);
        }

        h3{
            font-weight: var(--font-medium);
        }

        span{
            display: block;
            margin-bottom: var(--mb-0-75);
        }

        a {

            color: var(--text-color);
            font-size: var(--small-font-size);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            column-gap: 0.25rem;

            i{
                font-size: 1rem;
                transition: 0.3s;
            }

            :hover{
                i{
                    transform: translate(0.25rem);
                }
            }

        }


    }

    form{
        width: 360px;

        div{
            position: relative;
            margin-bottom: var(--mb-2);
            height: 4rem;
        }

        label{
            position: absolute;
            top: -0.75rem;
            left: 1.25rem;
            font-size: var(--small-font-size);
            padding: 0.25rem;
            background-color: var(--body-color);
            z-index: 2;
        }

        input, textarea{
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;
            border: 2px solid rgba(0, 0, 0, 0.3);
            background: none;
            color: var(--text-color);
            outline: none;
            border-radius: 0.75rem;
            padding: 1.5rem;
            z-index: 1;
        }

        .contact__form-area{
            height: 11rem;

            textarea{
                resize: none;
            }
        }
    }

    @media screen and (max-width: 992px) {
        & > div{
            column-gap: 3rem;
        }
    }

    @media screen and (max-width: 768px) {
        & > div{
            grid-template-columns: 1fr;
            row-gap: 3rem;
        }

        .contact__info{
            justify-content: center;
        }

        form{
            margin: 0 auto;
        }
    }

    @media screen and (max-width: 576px) {
    
        .contact__info{
            grid-template-columns: 1fr;
        }

        form{
            width: 100%;
        }
    }
`