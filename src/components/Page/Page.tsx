
import {ReactChild, ReactNode, FC, useEffect} from 'react'
import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer'
import {Box, Grid, useTheme} from '@mui/material';
import MainMenu from "@/layouts/MainMenu/MainMenu";
import PersonModal from "@/layouts/PersonModal/PersonModal";
import PersonAddModal from "@/layouts/PersonAddModal/PersonAddModal";
import DepartmentAddModal from "@/layouts/DepartmentAddModal/DepartmentAddModal";
import JobAddModal from "@/layouts/JobAddModal/JobAddModal";
import ScheduleAddModal from "@/layouts/ScheduleAddModal/ScheduleAddModal";


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
            <DepartmentAddModal/>
            <JobAddModal/>
            <ScheduleAddModal/>

            <Header/>

            <Grid container justifyContent={'flex-end'}>
                <MainMenu/>

                <Grid maxHeight={'none'} overflow={'hidden'} item pb={{md: 2,  xs: 10}} md={10} mt={2} xs={12}>
                    {children}
                </Grid>

            </Grid>



        </>
    )
}
export default Page