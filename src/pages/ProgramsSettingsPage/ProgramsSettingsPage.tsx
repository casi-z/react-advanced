import * as React from 'react';
import {useEffect, useState} from 'react';
import Page from "@/components/Page/Page";
import {useDispatch, useSelector} from "react-redux";
import {IProgram, IState} from "@/types/types";
import EditableTable from "@/layouts/EditableTable/EditableTable";
import {deleteProgramAction, selectProgramAction} from "@/store/programsReducer";
import {setModalNameAction} from "@/store/modalReducer";
import EditMenu from "@/components/EditMenu/EditMenu";
import {Tab, Tabs, Typography} from "@mui/material";
import {PROGRAM_ADD_MODAL_NAME} from "@/data/modalNames";

export default function ProgramsSettingsPage() {

    const dispatch = useDispatch()

    const programs = useSelector((state: IState) => state.programs.programs)

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorRowId, setAnchorRowId] = useState<number>(0);

    const [value, setValue] = useState<number>(0);
    const selectedTabName = ['programs', 'sites', 'all'][value]

    const [dataArray, setDataArray] = useState<IProgram[]>([]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);

    };


    function tabProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    function handleDelete(selectedRows: readonly number[]) {

        //Здесь будет запрос на сервер удаляющий рограмму/сайт
        // Но щас здесь консоль логи

        if (selectedRows.length > 1) {

            const toDelete = dataArray.filter(element => selectedRows.indexOf(element.id) !== -1)

            toDelete.forEach(row => dispatch(deleteProgramAction(row)))

        } else {

            const toDelete = dataArray.filter(element => element.id === selectedRows[0])[0]

            dispatch(deleteProgramAction(toDelete))

        }

    }

    function handleMenuOpen(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, rowId: number) {

        setAnchorRowId(rowId)
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClick(name: string) {

        switch (name) {

            case 'Открыть':
                // dispatch(selectProgramAction(programs.filter(program => program.id === anchorRowId)[0]))
                // dispatch(setModalNameAction('program'))
                break;

            case 'Редактировать':
                dispatch(selectProgramAction(dataArray.filter(item => item.id === anchorRowId)[0]))
                dispatch(setModalNameAction(PROGRAM_ADD_MODAL_NAME))
                break;
        }

        handleMenuClose()
    }

    function createData(array: IProgram[]) {

        const result: { id: number, tableRow: (string | JSX.Element)[] }[] = []

        array.map(element => (

            result.push({
                id: element.id,
                tableRow: [

                    <Typography pt={1} pb={1}>
                        {element.name}
                    </Typography>,

                    <Typography pt={1} pb={1}>
                        {/*@ts-ignore*/}
                        {element.type === 'site' ? 'Сайт' : 'Программа'}
                    </Typography>,

                    <Typography pt={1} pb={1}>
                        Бизнес - Корпоративные системы - CRM системы
                    </Typography>,

                ]
            })

        ))
        return result
    }

    function getTableTitle() {

        switch (selectedTabName) {

            case 'programs':
                return 'Программы'

            case 'sites':
                return 'Сайты'

            case 'all':
                return 'Программы & Сайты'

            default:
                return 'Программы'

        }

    }

    useEffect(() => {

        switch (selectedTabName) {
            case 'all':
                setDataArray(programs)
                break
            case 'sites':
                setDataArray(programs.filter(program => program.type === 'site'))
                break
            default:
                setDataArray(programs.filter(program => program.type === 'program'))
        }

    }, [value, programs, dataArray]);


    return (
        <Page>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
            >

                <Tab label="Программы" {...tabProps(1)}/>
                <Tab label="Сайты" {...tabProps(2)}/>
                <Tab label="Всё"{...tabProps(3)} />

            </Tabs>


            <EditMenu
                onClose={handleMenuClose}
                onMenuClick={handleMenuClick}
                anchorEl={anchorEl}
            />

            <EditableTable
                title={getTableTitle()}
                tableHead={['Название', 'Тип', 'Группа']}
                tableBody={createData(dataArray)}
                addModal={PROGRAM_ADD_MODAL_NAME}
                onDelete={handleDelete}
                onMenuOpen={handleMenuOpen}

            />

        </Page>
    );
}
