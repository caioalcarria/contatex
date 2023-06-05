import styled from "styled-components";

export const QualiStyle = styled.section`


    & > div{
        max-width: 768px;
        min-height: 400px;

        margin-left: auto;
        margin-right: auto;

    }

    .qualification__tabs{
        display: flex;
        justify-content: center;
        margin-bottom: var(--mb-2);

        & > div{
            font-size: var(--h3-font-size);
            font-weight: var(--font-medium);
            color: var(--title-color);
            margin: 0 var(--mb-1);
            cursor: pointer;

            :hover{
                color: var(--title-color-dark);
            }
        }

        i{
            font-size: 1.8rem;
            margin-right: var(--mb-0-25);
        }

        .qualification__active{
            color: var(--title-color-dark);
            font-weight: var(--font-semi-bold);
        }
    }

    .qualification__section{
        display: grid;
        grid-template-columns: 0.5fr;
        justify-content: center;

        & > div{
            display: none;
        }

        .qualification__content-active{
            display: block;
        }

        .qualification__data{
            display: grid;
            grid-template-columns: 1fr max-content 1fr;
            column-gap: 1.5rem;

            

            h3{
                font-size: var(--normal-font-size);
                font-weight: var(--font-medium);
            }

            p{
                display: inline-block;
                font-size: var(--small-font-size);
                margin: var(--mb-1);
            }

            & > div > div{
                font-size: var(--small-font-size);
            }

            .qualification__rounder{
                display: inline-block;
                
                width: 13px;
                height: 13px;
                background-color: var(--text-color);
                border-radius: 50%;
            }

            .qualification__line{
                display: block;

                width: 1px;
                height: 100%;
                background-color: var(--text-color);
                transform: translate(6px, -7px);
            }

        }
    }

    @media screen and (max-width: 768px) {
        & > div{
            margin-left: var(--mb-1-5);
            margin-right: var(--mb-1-5);
        }
    }

    @media screen and (max-width: 576px) {
        .qualification__section{
            grid-template-columns: initial;
        }

        .qualification__tabs > div{
            margin: 0 var(--mb-0-75);
        }
    }

    @media screen and (max-width: 350px) {
        .qualification__data{
            gap: 0.5rem;

        }
    }
`