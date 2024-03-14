import {FC, ReactChild, ReactNode, useEffect} from 'react'
import Header from '../../layouts/Header/Header'
import {Grid} from '@mui/material';
import MainMenu from "@/layouts/MainMenu/MainMenu";
import PersonModal from "@/layouts/PersonModal/PersonModal";
import PersonAddModal from "@/layouts/PersonAddModal/PersonAddModal";
import DepartmentAddModal from "@/layouts/DepartmentAddModal/DepartmentAddModal";
import JobAddModal from "@/layouts/JobAddModal/JobAddModal";
import ScheduleAddModal from "@/layouts/ScheduleAddModal/ScheduleAddModal";
import ProgramAddModal from "@/layouts/ProgramAddModal/ProgramAddModal";
import ProgramGroupAddModal from "@/layouts/ProgramGroupAddModal/ProgramGroupAddModal";


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
            <ProgramAddModal/>
            <ProgramGroupAddModal/>

            <Header/>

            <Grid container justifyContent={'flex-end'}>

                <MainMenu/>

                <Grid maxHeight={'none'} overflow={'hidden'} item pb={{md: 2, xs: 10}} md={10} mt={2} xs={12}>
                    {children}
                </Grid>

            </Grid>


        </>
    )
}
export default Page