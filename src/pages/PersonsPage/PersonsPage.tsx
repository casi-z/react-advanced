import React, {FC, ReactChild, useEffect, useState} from 'react'
import {Chip, Grid, Tab, Tabs} from '@mui/material'
import Page from "@/components/Page/Page";
import StatisticSection from "@/layouts/StatisticSection/StatisticSection";
import Calc from "@/utils/calcUtil";
import {IPerson, IState} from "@/types/types";
import {useSelector} from "react-redux";
import BasicTable from "@/layouts/BasicTable/BasicTable";
import PersonCard from "@/components/PersonCard/PersonCard";
import StackedProgressBar from "@/components/StackedProgressBar/StackedProgressBar";


interface PersonsPageProps {

    children?: ReactChild,

}

const PersonsPage: FC<PersonsPageProps> = ({children}) => {

    const persons = useSelector((state: IState) => state.persons.persons)
    const statistic = useSelector((state: IState) => state.statistic.statistic)

    const [value, setValue] = useState<number>(0);

    const [search, setSearch] = useState<string>('');

    const [dataArray, setDataArray] = useState<IPerson[]>(persons);




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

    function createData(array: IPerson[]) {

        return array.map(person => {

            // @ts-ignore
            const sumOfLateness = person.lateness.length > 0 ? person.lateness.reduce((acc, number) => acc + number, 0) : 0
            // @ts-ignore
            const sumOfEarlyLeaving = person.earlyLeaving.length > 0 ? person.earlyLeaving.reduce((acc, number) => acc + number, 0) : 0
            // @ts-ignore
            const sumOfAbsenteeism = person.absenteeism.length > 0 ? person.absenteeism.reduce((acc, number) => acc + number, 0) : 0

            const stackedProgressBarData = [
                {
                    progress: Calc.procentsByTime(person.workTime.distraction, statistic.agreedWorkTime),
                    color: 'rgb(253, 133, 138)',
                },
                {
                    progress: Calc.procentsByTime(person.workTime.productive, statistic.agreedWorkTime),
                    color: 'rgb(15, 232, 175)',
                },
            ]

            return[

                <PersonCard data={person}/>,

                <StackedProgressBar data={stackedProgressBarData}/>,

                person.workTime.all.toString(2),

                sumOfLateness,
                sumOfEarlyLeaving,
                sumOfAbsenteeism,

                <Chip
                    label={person.incidents}
                    color={person.incidents > 0 ? 'error' : 'success'}
                    variant="filled" size={'small'}
                />

            ]

        })
    }

    function handleSearch(searchValue: string){
        setSearch(searchValue)
    }

    useEffect(() => {
        if(search){
            setDataArray(persons.filter(person => person.fullName.toUpperCase().includes(search.toUpperCase())))
        } else{
            setDataArray(persons)
        }

    }, [persons, search]);

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

            <Grid item xs={12} mt={2}>
                <BasicTable
                    title={'Статистика сотрудников'}
                    tableHead={['Сотрудник', 'Статистика', '', 'Опоздания', 'Прогулы', 'Ранний уход', 'Инцидентов']}
                    tableBody={createData(dataArray)}
                    height={68}
                    onSearchChange={handleSearch}
                    searchValue={search}

                />
            </Grid>


        </Page>
    )
}
export default PersonsPage
