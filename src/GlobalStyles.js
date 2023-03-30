import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset};
    :root{

    }
    
    body {
        background-color: #f2f2f2;
        font-family: 'Noto Sans KR', sans-serif;
    };
`;