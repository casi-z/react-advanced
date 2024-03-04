import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function usePersonsPageStyles(theme: any) {

   


   return (
       styled.div`
           .table-row{
               border-left: 4px solid transparent;
               cursor: pointer;
               &:hover{
                   background-color: #dbf1fe;
                   border-left-color: #49b7f9;
               }
           }
       `
   )
}
export default usePersonsPageStyles