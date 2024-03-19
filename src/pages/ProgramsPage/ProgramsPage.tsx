import React, {FC, ReactChild, useEffect, useState} from 'react'
import {Grid, Paper, Tab, Tabs, Typography} from '@mui/material'
import Page from "@/components/Page/Page";
import StatisticSection from "@/layouts/StatisticSection/StatisticSection";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import StackedProgressBar from "@/components/StackedProgressBar/StackedProgressBar";
import Sites from "@/layouts/Sites/Sites";
import Calc from "@/utils/calcUtil";
import {useSelector} from "react-redux";
import {IProgram, IState} from "@/types/types";
import BasicTable from "@/layouts/BasicTable/BasicTable";


interface ProgramsPageProps {

    children?: ReactChild,

}

const ProgramsPage: FC<ProgramsPageProps> = ({children}) => {


    const [value, setValue] = useState<number>(0);

    const [search, setSearch] = useState<string>('');

    const statistic = useSelector((state: IState) => state.statistic.statistic)
    const programs = useSelector((state: IState) => state.programs.programs)
    const onlyPrograms = programs.filter(program => program.type === 'program')

    const [dataArray, setDataArray] = useState<IProgram[]>(onlyPrograms);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);

    };

    function tabProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }


    const statisticCardsData = [
        {
            name: 'Отработано',
            procents: Calc.procentsByTime(statistic.workTime, statistic.agreedWorkTime),
            color: 'rgb(240, 183, 52)',
            time: statistic.workTime
        },
        {
            name: 'Простой',
            color: 'rgba(190,190,190,0.85)',
            procents: Calc.procentsByTime(statistic.idleTime, statistic.workTime),
            time: statistic.idleTime
        },
        {
            name: 'Продуктивно',
            procents: Calc.procentsByTime(statistic.productiveTime, statistic.workTime),
            color: 'rgb(15, 232, 175)',
            time: statistic.productiveTime
        },
        {
            name: 'Отвлечения',
            procents: Calc.procentsByTime(statistic.distractionTime, statistic.workTime),
            color: 'rgb(253, 133, 138)',
            time: statistic.distractionTime
        },

    ]

    function handleSearch(searchValue: string){
        setSearch(searchValue)
    }

    function createData(array: IProgram[]) {
        return array.map(program => {

            const stackedProgressBarData = [
                {
                    progress: Calc.procentsByTime(program.time.distraction, statistic.agreedWorkTime),
                    color: 'rgb(253, 133, 138)',
                },
                {
                    progress: Calc.procentsByTime(program.time.productive, statistic.agreedWorkTime),
                    color: 'rgb(15, 232, 175)',
                },
            ]

            return [

                <Typography variant="body1">
                    {program.name}
                </Typography>,
                <Typography variant={"body2"}>
                    {program.time.all?.toString(2)}
                </Typography>,

                <StackedProgressBar data={stackedProgressBarData}/>,

                <Typography variant={"body2"}>
                    {Calc.procentsByTime(program.time.all, statistic.agreedWorkTime).toFixed(2)}%
                </Typography>

            ]

        })
    }

    useEffect(() => {
        if(search){
            setDataArray(onlyPrograms.filter(program => program.name.toUpperCase().includes(search.toUpperCase())))
        } else{
            setDataArray(onlyPrograms)
        }

    }, [programs, search]);


    return (
        <Page>
            <Tabs value={value} onChange={handleChange}>

                <Tab label="День" {...tabProps(1)}/>
                <Tab label="Неделя" {...tabProps(2)}/>
                <Tab label="Месяц"{...tabProps(3)} />
                <Tab label="Квартал" {...tabProps(4)}/>
                <Tab label="Год" {...tabProps(5)}/>

            </Tabs>
            <StatisticSection data={statisticCardsData}/>

            <Grid
                flexDirection={{
                    md: 'row',
                    xs: 'column'
                }}
                mt={1}
                spacing={2}
                container
                item
                xs={12}
            >

                <Grid container item xs={12} md={9}>
                    <BasicTable
                        title={'Статистика приложений'}
                        tableHead={['Приложение', 'Статистика', '', '',]}
                        tableBody={createData(dataArray)}
                        height={68}
                        onSearchChange={handleSearch}
                        searchValue={search}

                    />

                </Grid>

                <Grid container item xs={12} md={3} flexDirection={'column'} flexWrap={'nowrap'} spacing={2}>

                    <Grid item xs={12}>

                        <Paper elevation={0}>

                            <Grid container item height={'50%'} xs={12}>

                                <SectionTitle>Популярные</SectionTitle>
                                <Sites data={onlyPrograms} get={"popular"}/>

                            </Grid>

                        </Paper>

                    </Grid>

                    <Grid item xs={12}>

                        <Paper elevation={0}>

                            <Grid container item height={'50%'} xs={12}>

                                <SectionTitle>Запрещённые</SectionTitle>
                                <Sites data={onlyPrograms} get={"illegal"}/>

                            </Grid>

                        </Paper>

                    </Grid>
                </Grid>
            </Grid>
        </Page>
    )
}
export default ProgramsPage