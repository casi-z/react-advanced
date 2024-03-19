import React, {FC, ReactChild, useState} from 'react'
import {Avatar, Grid, Paper, Tab, Typography} from '@mui/material'
import {useDispatch, useSelector} from "react-redux";
import {IState} from "@/types/types";
import {selectPersonAction} from "@/store/personsReducer";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import Modal from "@/components/Modal/Modal";
import stringToColor from "@/utils/stringToColor";
import {PERSON_MODAL_NAME} from "@/data/modalNames";
import ScreenshotsSection from "@/layouts/ScreenshotsSection/ScreenshotsSection";


interface PersonModalProps {

    children?: ReactChild,

}

const PersonModal: FC<PersonModalProps> = ({children}) => {

    const selectedPerson = useSelector((state: IState) => state.persons.selected)
    const dispatch = useDispatch()

    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    function handleCloseModal() {
        //Очищаем selectedPerson в store при закрытии модалки
        dispatch(selectPersonAction(null))
    }

    return (
        <Modal onClose={handleCloseModal} name={PERSON_MODAL_NAME}>
            <Grid container>

                <Grid item xs={12}>
                    <Paper>
                        <SectionTitle>Сотрудник {selectedPerson?.name}</SectionTitle>
                    </Paper>
                </Grid>

                <Grid container ml={{md: 4, xs: 0}} item xs={12}>
                    <TabContext value={value}>

                        <Grid item xs={12}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Основное" value="1"/>
                                <Tab label="Скриншоты" value="2"/>
                                <Tab label="Активность" value="3"/>
                            </TabList>
                        </Grid>

                        <TabPanel
                            sx={{
                                width: '100%',
                                padding: 0
                            }}
                            value="1"
                        >

                            <Grid container item xs={12} columnSpacing={2} rowSpacing={2}
                                  flexDirection={{md: 'row', xs: 'column'}}>

                                <Grid item xs={12} md={5}>
                                    <Paper elevation={0}>

                                        <Grid
                                            container
                                            flexDirection={'column'}
                                            alignItems={'center'}

                                            pt={2}
                                            pb={2}
                                        >

                                            <Avatar
                                                sx={{
                                                    bgcolor: stringToColor(selectedPerson?.name),
                                                    width: 128,
                                                    height: 128,
                                                    fontSize: 54
                                                }}

                                            >
                                                {selectedPerson?.surname[0]}{selectedPerson?.name[0]}
                                            </Avatar>

                                            <Grid item mt={2} mb={2}>
                                                <Typography variant="body2">
                                                    {selectedPerson?.surname} {selectedPerson?.name} {selectedPerson?.lastname}

                                                </Typography>
                                            </Grid>

                                            <Typography whiteSpace={'nowrap'} variant="body1">
                                                {selectedPerson?.job} / {selectedPerson?.department}
                                            </Typography>

                                        </Grid>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} md={7}>

                                    <Paper elevation={0}>

                                        <SectionTitle>Контактная информация</SectionTitle>

                                        <Grid container flexDirection={"column"} pl={4} pt={2} pb={2} rowSpacing={2}>

                                            <Grid item>

                                                <Typography variant="body1">Ф.И.О.</Typography>

                                                <Typography variant="body2">
                                                    {selectedPerson?.surname} {selectedPerson?.name} {selectedPerson?.lastname}
                                                </Typography>


                                            </Grid>

                                            <Grid item>

                                                <Typography variant="body1">День рождения</Typography>
                                                <Typography variant="body2">01.01.1975</Typography>


                                            </Grid>

                                            <Grid item>

                                                <Typography variant="body1">Эл. почта</Typography>
                                                <Typography variant="body2">karamzin@example.com</Typography>


                                            </Grid>

                                            <Grid item>

                                                <Typography variant="body1">Отдел</Typography>
                                                <Typography variant="body2">{selectedPerson?.department}</Typography>


                                            </Grid>

                                            <Grid item>

                                                <Typography variant="body1">Должность</Typography>
                                                <Typography variant="body2">{selectedPerson?.job}</Typography>


                                            </Grid>


                                        </Grid>

                                    </Paper>

                                </Grid>

                            </Grid>

                        </TabPanel>
                        <TabPanel
                            value="2"
                            sx={{
                                width: '100%',
                                padding: 0
                            }}
                        >
                            <Grid container item xs={12}>
                                <ScreenshotsSection/>
                            </Grid>
                        </TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>


                    </TabContext>
                </Grid>

            </Grid>
        </Modal>
    )
}
export default PersonModal