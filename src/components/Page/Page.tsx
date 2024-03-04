import usePageStyles from './Page.style'
import {ReactChild, ReactNode, FC, useEffect} from 'react'
import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer'
import Wrapper from "../Wrapper/Wrapper";
import Cursor from "../Cursor/Cursor";
import {Box, Grid, useTheme} from '@mui/material';
import LeftPanel from "@/layouts/LeftPanel/LeftPanel";


const {log} = console

interface PageProps {

    children: ReactChild | ReactNode,
    title?: string

}

const Page: FC<PageProps> = ({children, title}) => {

    useEffect(() => {

        if (title) {
            document.title = title
        }

    }, [])

    const theme = useTheme()
    const Styles = usePageStyles(theme)


    return (
        <Box component={Styles} className="Page page">

            <Header/>

            <Grid container justifyContent={'flex-end'}>
                <LeftPanel/>

                <Grid maxHeight={'none'} overflow={'hidden'} className={'Page__wrapper'} item xs={10}>
                    {children}
                </Grid>

            </Grid>


            <Footer/>

        </Box>
    )
}
export default Page