
import {ReactChild, ReactNode, FC, useEffect} from 'react'
import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer'
import {Box, Grid, useTheme} from '@mui/material';
import LeftPanel from "@/layouts/LeftPanel/LeftPanel";
import PersonModal from "@/layouts/PersonModal/PersonModal";
import PersonAddModal from "@/layouts/PersonAddModal/PersonAddModal";


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

            <PersonAddModal/>

            <Header/>

            <Grid container justifyContent={'flex-end'}>
                <LeftPanel/>

                <Grid maxHeight={'none'} overflow={'hidden'}  item md={10} mt={2} xs={12}>
                    {children}
                </Grid>

            </Grid>


            <Footer/>

        </>
    )
}
export default Page