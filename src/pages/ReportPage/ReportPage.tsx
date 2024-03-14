import * as React from 'react'
import {FC, ReactChild, useEffect, useState} from 'react'
import Page from "@/components/Page/Page";
import Day from "@/components/Day/Day";
import BasicTable from "@/layouts/BasicTable/BasicTable";
import {IPerson, IState} from "@/types/types";
import {useSelector} from "react-redux";
import PersonCard from "@/components/PersonCard/PersonCard";


interface ReportPageProps {

    children?: ReactChild,

}

const ReportPage: FC<ReportPageProps> = ({children}) => {

    const persons = useSelector((state: IState) => state.persons.persons)


    const [dataArray, setDataArray] = useState<IPerson[]>(persons);


    const [search, setSearch] = useState<string>('');

    const week = ['пн 11.03', 'вт 12.03', 'ср 13.03', 'чт 14.03', 'пт 15.03', 'сб 16.03', 'вс 17.03',]

    function handleSearch(searchValue: string){
        setSearch(searchValue)
    }

    function createData(array: IPerson[]) {

        return array.map(person => {


            return [

                <PersonCard data={person}/>,
                <Day color={"danger"} toolTip={'Прогул'}>Прог.</Day>,
                <Day>8.0</Day>,
                <Day color={"warning"}>7,2 ч</Day>,
                <Day>8.0</Day>,
                <Day>8.0</Day>,
                <Day color={'disable'} toolTip={'Выходной'}>Вых.</Day>,
                <Day color={'disable'} toolTip={'Выходной'}>Вых.</Day>,
                <Day color={'success'}>40,0 ч</Day>,
                <Day>0</Day>,
                <Day>1</Day>,
                <Day>2</Day>,
                <Day>181</Day>,

            ]


        })
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
            <BasicTable
                title={'Табель'}
                tableHead={['Сотрудник', ...week, 'За неделю', 'Отпусков', 'Больничных', 'Прогулов', 'Инцидентов']}
                tableBody={createData(dataArray)}
                size="small"
                height={82}
                onSearchChange={handleSearch}
                searchValue={search}
                sx={{
                    '.ContentTableCell': {
                        padding: 0,
                        borderLeft: '1px solid #eaeaea'
                    },
                    '.ContentTableRow': {
                        padding: 0,
                    }
                }}
            />
        </Page>
    )
}
export default ReportPage