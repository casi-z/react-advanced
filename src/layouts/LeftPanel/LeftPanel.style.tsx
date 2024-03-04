import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function useLeftPanelStyles(theme: any) {

   return (
       styled.section`
           height: 100vh;
           
           position: fixed;
           top: 0;
           left: 0;
           z-index: 2;

           .LeftPanel__body {
               height: 100%;
           }

           .list {
               overflow: scroll;
           }

           .list-item {
               &.current-true {
                   background: rgb(244, 250, 255);
                   cursor: default;
                   color: ${theme.palette.text.secondary};

                   svg {
                       fill: ${theme.palette.text.secondary};
                   }
               }

               &__text {
                   text-transform: capitalize;
               }

               
           }

       `
   )
}
export default useLeftPanelStyles