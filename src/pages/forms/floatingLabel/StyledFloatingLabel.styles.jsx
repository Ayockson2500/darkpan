import styled from "styled-components";

export const StyledFloatingLabel = styled.div`
       * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
       }
        background: ${props => props.theme.color.primaryDarkBg};
        padding: 20px;
        border-radius: 5px;
        width: 100%;
        
        textarea {
            width: 100%;
            /* background: ${props => props.theme.color.secondaryDarkbg}; */
            border: none;
            color: ${props => props.theme.color.mainNavyColor};
            padding: 2px 10px;
            border-radius: 5px;
            height: 400px;
        }
        textarea:focus {
            outline: 1.6px solid ${props => props.theme.color.mainRedColor};
            border: .5px solid #F58B8B;
            border-radius: 2px;
        }
`