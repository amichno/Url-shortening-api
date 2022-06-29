import styled from "styled-components";

export const UrlWrapper = styled.div`
                width:80%;
                height: 7rem;
                max-height: 7rem;
                background-color: hsl(255, 11%, 22%);
                background-image: url("../../images/bg-boost-desktop.svg");
                background-repeat: no-repeat;
                background-size: cover;
                background-position: bottom;
                flex-wrap: wrap;
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 5;

                &.Show::after{
                    content: "Please add a link";
                    font-style:italic;
                    color: hsl(0, 87%, 67%);
                    font-size: 0.6rem;
                    width: 30%;
                    height: 1rem;
                    z-index: 25;
                    position: relative;
                    left: -29%;
                    top: -10%;
                    display: block;
                }
                &.Hide::after{
                    content: "Please add a link";
                    font-style:italic;
                    color: hsl(0, 87%, 67%);
                    font-size: 0.6rem;
                    width: 30%;
                    height: 1rem;
                    z-index: 25;
                    position: relative;
                    left: -29%;
                    top: -10%;
                    display: none;
                }
    
    
`;

export const Input = styled.input`
    height: 3rem;
    width: 60%;
    padding-left: 0.5rem;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    font-weight: 700;
    color: hsl(257, 7%, 63%);
    margin: 0.25rem auto;
    border: 2px solid transparent;
    &:focus{
        outline: none;
    }
    &.Show:focus{
        outline: none;
        border: 2px solid hsl(0, 87%, 67%);
    }
    
`;

export const AddLink = styled.p`
    font-size: 0.5rem;
    color:red;
`;

export const ButtonShorten = styled.button`
    width: ${props => props.isHalf?"5rem":"10rem"};
    height: ${props => props.isHalf?"2rem":"3rem"};
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background-color: hsl(180, 66%, 49%);
    color:white;
    border: none;
    margin: 0.25rem auto;
    font-weight: 700;
    cursor: pointer;
`;

