import {FC, ReactChild, ReactNode, useEffect} from 'react'
import Header from '../../layouts/Header/Header'
import {Grid} from '@mui/material';
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

    const drawerWidth = 290

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

            <Header drawerWidth={drawerWidth}/>



                <Grid
                    maxHeight={'none'}
                    overflow={'hidden'}
                    item
                    ml={{xs: 0, md: `${drawerWidth + 20}px`}}
                    pb={{md: 2, xs: 10}}
                    md={10}
                    mt={5}
                    xs={12}>

                    {children}
                </Grid>



        </>
    )
}
export default Page