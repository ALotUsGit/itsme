import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MediaQuery from "./MediaQuery";

const GlobalStyles = createGlobalStyle`
    ${reset}

    * { box-sizing: border-box; }

    html {
        font-size: 10px;

        ${MediaQuery.maxWidth("lg")`
            font-size: 8px;
        `}

        body {
            color: #1F2937;
            font-family: "Poppins", "SUIT", sans-serif;
            font-size: 1.6rem;
    
            h1 {
                font-size: 2.4rem;
                font-weight: 700;
            }
    
            h2 {
                font-size: 2rem;
                font-weight: 600;
            }
    
            h3 {
                font-size: 1.8rem;
                font-weight: 600;
            }
    
            a {
                color: #1F2937;
                text-decoration: none;
            }

            .img_wrap {
                width: 100%;

                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }

`;

export default GlobalStyles;
