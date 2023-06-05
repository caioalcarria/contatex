import styled from "styled-components"
import ImageLogo from "../../assets/icon.png"


export const HeaderStyle = styled.header`

    width: 100%;
    background-color: var(--body-color);
    box-shadow: 0 -1px 4px rgba(0,0,0,0.15);

    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--z-fixed);

    nav{
        height: calc(var(--header-height) + 1.5rem);

        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 1rem;

        ul{
            display: flex;
            column-gap: 2rem;

            a{
                display: flex;
                flex-direction: column;
                align-items: center;

                padding: 7px 10px;
                border-radius: 8px;
                font-size: var(--small-font-size);
                color: var(--title-color);
                font-weight: var(--font-medium);

                transition: .3s;

                &:hover{
                    color: var(--title-color-dark);
                }
            }

        }

    }

    .nav__logo a, .nav__toggle{
        color: var(--title-color);
        font-weight: var(--font-medium);
    }

    .nav__logo{
        font-weight: var(--font-semi-bold);
        font-size: var(--h3-font-size);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 8px;

        .logo__img{
            background: url(${ImageLogo});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            width: 30px;
            height: 30px;

        }
    }

    i, .nav__toggle {
        display: none;
    }

    .active-link{
        color: #AD9C9C;
    }

    /* For medium devices */
    @media screen and (max-width: 768px) {
        top: initial;
        bottom: 0;

        nav{
            height: var(--header-height);
        }

        .nav__menu{
            position: fixed;
            bottom: -100%;
            left: 0;

            width: 100%;
            background-color: var(--body-color);
            padding: 2rem 1.5rem 4rem;

            box-shadow: 0 -1px 4px rgba(0,0,0,0.15);
            border-radius: 1.5rem 1.5rem 0 0;
            transition: .3s;

            ul{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 2rem;



                i{
                    font-size: 1.2rem;
                }
            }

            .nav__close{
                position: absolute;
                right: 1.3rem;
                bottom: .5rem;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--title-color);

                &:hover{
                    color: var(--title-color-dark);
                }
            }
        }

        /*Show Menu*/
        .show-menu{
            bottom: 0;
        }

        .nav__toggle{
            font-size: 1.1rem;
            cursor: pointer;
        }

        i, .nav__toggle{
            display: block;
        }
    }

    /* For small devices */
    @media screen and (max-width: 350px){
        .nav__menu{
            padding: 2rem 0.25rem 4rem;

            ul{
                column-gap: 0;
            }
        }
    }

`