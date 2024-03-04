import {
    Box,
    Button,
    useTheme
} from "@mui/material"
import styled from "styled-components";

import {sitePadding} from "../../theme/GlobalStyle"


function useFooterStyles(theme: any) {

   

    return styled.footer`

      height: 37vh;
      padding-left: -100px;
      color: ${theme.palette.text.secondary};
      background: linear-gradient(220deg, #F49137 24.35%, #F18B32 39.52%, #E57625 79.88%);
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      overflow: hidden;


      .footer__circle {
        width: 190vw;
        height: 40vw;
        top: -34vw;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 100%;
        background: ${theme.palette.secondary.main};
        position: absolute;
      }


      .footer__body {
        display: flex;
        justify-content: center;
        gap: 2vw;
      }

      .footer__socials-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .footer__bottom {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: ${theme.palette.text.primary};
        color: ${theme.palette.text.secondary};
        text-align: center;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 42px; /* 262.5% */;
        margin: 0;
        li{
            list-style: none;
        }

        ${theme.breakpoints.down('sm')} {
          flex-direction: column;
        }

        .footer__link {
            color: white;
        }
      }
    `

}

export default useFooterStyles