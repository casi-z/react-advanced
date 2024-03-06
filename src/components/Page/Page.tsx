
import {ReactChild, ReactNode, FC, useEffect} from 'react'
import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer'
import {Box, Grid, useTheme} from '@mui/material';
import LeftPanel from "@/layouts/LeftPanel/LeftPanel";
import PersonModal from "@/layouts/PersonModal/PersonModal";


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



    return (
        <>
            <PersonModal/>
            <Header/>

            <Grid container justifyContent={'flex-end'}>
                <LeftPanel/>

                <Grid maxHeight={'none'} overflow={'hidden'} className={'Page__wrapper'} item md={10} xs={12}>
                    {children}
                </Grid>

            </Grid>


            <Footer/>

        </>
    )
}
export default Page