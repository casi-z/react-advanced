import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function useErrorPageStyles(theme: any) {

   


    return (
        styled.section`
           width: 100%;
           height: 100vh;
           display: flex;
            justify-content:center;
            align-items: center;
            background: linear-gradient(215deg, #0D0939 31.67%, #080435 45.37%, #130F3D 81.82%, #0D0939 142.23%) !important;
            .error__data{
                display: flex;
                justify-content:center;
                align-items: center;
                flex-direction: column;
                h1{
                    margin: 0;
                    font-family: 'Pretoria Deco';
                    font-size: 20vw;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    display: flex;
                    text-transform: none;
                    color: #BD0000;
                }
                .error__text{
                    color: white
                }

            }
            
       `
    )
}
export default useErrorPageStyles