import styled ,{ createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a {
    color: inherit;
    text-decoration: none;
}
ul,
ol,
li {
    list-style: none;
}

button {
    cursor: pointer;
    border: none;
    background-color: transparent;
}
.wrapper {
    width: 100%;
    min-height: 100vh;
    position: relative;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    line-height: 100%;
    font-size: 14px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    
    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(87, 87, 87, 0.4);
    visibility: ${(props) => props.open ? 'visible' : 'hidden'};
    z-index: 10;

}
}

`

export const  Container = styled.div`
 width: 100%;
 max-width: 1380px;
 margin: 0 auto;
 padding: 0 20px;
`

