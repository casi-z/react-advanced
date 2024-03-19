import * as React from 'react'
import {FC, ReactChild, useState} from 'react'
import {Grid, Typography} from '@mui/material'
import Page from "@/components/Page/Page";
import {useDispatch, useSelector} from "react-redux";
import {IDepartment, IState} from "@/types/types";
import {deleteDepartmentAction, selectDepartmentAction} from "@/store/departmentsReducer";
import {setModalNameAction} from "@/store/modalReducer";
import EditMenu from "@/components/EditMenu/EditMenu";
import EditableTable from "@/layouts/EditableTable/EditableTable";
import {DEPARTMENT_ADD_MODAL_NAME} from "@/data/modalNames";


interface DepartmentsSettingsPageProps {

    children?: ReactChild,

}

const DepartmentsSettingsPage: FC<DepartmentsSettingsPageProps> = ({children}) => {

    const dispatch = useDispatch()

    const departments = useSelector((state: IState) => state.departments.departments)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorRowId, setAnchorRowId] = useState<number>(0);


    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    function handleDelete(selectedRows: readonly number[]) {

        if (selectedRows.length > 1) {
            const toDelete = departments.filter(department => selectedRows.indexOf(department.id) !== -1)
            toDelete.forEach(row => dispatch(deleteDepartmentAction(row)))
        } else {
            const toDelete = departments.filter(department => department.id === selectedRows[0])[0]

            dispatch(deleteDepartmentAction(toDelete))

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
                dispatch(selectDepartmentAction(departments.filter(department => department.id === anchorRowId)[0]))
                dispatch(setModalNameAction('department'))
                break;

            case 'Редактировать':
                dispatch(selectDepartmentAction(departments.filter(department => department.id === anchorRowId)[0]))
                dispatch(setModalNameAction(DEPARTMENT_ADD_MODAL_NAME))
                break;
        }

        handleMenuClose()
    }

    function createData(array: IDepartment[]) {

        const result: { id: number, tableRow: (string | JSX.Element)[] }[] = []

        array.map(department => (

            result.push({
                id: department.id,
                tableRow: [

                    <Typography pt={1} pb={1}>
                        {department.name}
                    </Typography>,


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
                    tableHead={['Название']}
                    tableBody={createData(departments)}
                    addModal={DEPARTMENT_ADD_MODAL_NAME}
                    onDelete={handleDelete}
                    onMenuOpen={handleMenuOpen}

                />
            </Grid>
        </Page>
    )
}
export default DepartmentsSettingsPage