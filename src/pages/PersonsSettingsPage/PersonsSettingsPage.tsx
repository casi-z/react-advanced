import * as React from 'react';
import {useState} from 'react';
import Switch from '@mui/material/Switch';
import Page from "@/components/Page/Page";
import {useDispatch, useSelector} from "react-redux";
import {IPerson, IState} from "@/types/types";
import PersonCard from "@/components/PersonCard/PersonCard";
import EditableTable from "@/layouts/EditableTable/EditableTable";
import {deletePersonAction, selectPersonAction} from "@/store/personsReducer";
import {setModalNameAction} from "@/store/modalReducer";
import EditMenu from "@/components/EditMenu/EditMenu";
import {PERSON_ADD_MODAL_NAME, PERSON_MODAL_NAME} from "@/data/modalNames";
import {Grid} from "@mui/material";

export default function PersonsSettingsPage() {

    const dispatch = useDispatch()

    const persons = useSelector((state: IState) => state.persons.persons)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


    const [anchorRowId, setAnchorRowId] = useState<number>(0);


    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    function handleDelete(selectedRows: readonly number[]) {

        //Здесь будет запрос на сервер удаляющий сотрудника
        // Но щас здесь консоль логи
        if (selectedRows.length > 1) {
            const toDelete = persons.filter(person => selectedRows.indexOf(person.id) !== -1)
            toDelete.forEach(row => dispatch(deletePersonAction(row)))
        } else {
            const toDelete = persons.filter(person => person.id === selectedRows[0])[0]

            dispatch(deletePersonAction(toDelete))

        }
    }

    function handleMenuOpen(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, rowId: number) {

        setAnchorRowId(rowId)
        console.log(rowId, anchorRowId)
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClick(name: string) {

        switch (name) {

            case 'Открыть':
                dispatch(selectPersonAction(persons.filter(person => person.id === anchorRowId)[0]))
                dispatch(setModalNameAction(PERSON_MODAL_NAME))
                break;

            case 'Редактировать':
                dispatch(selectPersonAction(persons.filter(person => person.id === anchorRowId)[0]))
                dispatch(setModalNameAction(PERSON_ADD_MODAL_NAME))
                break;
        }

        handleMenuClose()
    }

    function createData(array: IPerson[]) {

        const result: { id: number, tableRow: (string | JSX.Element)[] }[] = []

        array.map(person => (

            result.push({
                id: person.id,
                tableRow: [

                    <PersonCard
                        data={person}
                        disablePadding
                        noClickable

                    />,
                    <Switch
                        onClick={event => event.stopPropagation()}
                        defaultChecked
                    />,
                    'grishapodikov@gmail.com'

                ]
            })

        ))
        return result
    }

    return (
        <Page>

            <EditMenu
                onClose={handleMenuClose}
                onMenuClick={handleMenuClick}
                anchorEl={anchorEl}
            />
            <Grid item xs={12} mt={2}>
                <EditableTable
                    title={'Сотрудники'}
                    tableHead={['ФИО', 'Активность', 'Эл. почта']}
                    tableBody={createData(persons)}
                    addModal={PERSON_ADD_MODAL_NAME}
                    onDelete={handleDelete}
                    onMenuOpen={handleMenuOpen}

                />
            </Grid>

        </Page>
    );
}
