import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function useStackedProgressBarStyles(theme: any) {

   


   return (
       styled.div`
           width: 100%;
           height: 10px;
           background: #ebeff2;
           border-radius: 10px;
           display: flex;
           overflow: hidden;
           .ProgressBar__body{
               height: 10px;
               border-radius: 20px;
           }
       `
   )
}
export default useStackedProgressBarStyles