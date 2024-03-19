import * as React from 'react';
import {useState} from 'react';
import Page from "@/components/Page/Page";
import {useDispatch, useSelector} from "react-redux";
import {IJob, IState} from "@/types/types";
import EditableTable from "@/layouts/EditableTable/EditableTable";
import {deleteJobAction, selectJobAction} from "@/store/jobsReducer";
import {setModalNameAction} from "@/store/modalReducer";
import EditMenu from "@/components/EditMenu/EditMenu";
import {Grid, Typography} from "@mui/material";
import {JOB_ADD_MODAL_NAME} from "@/data/modalNames";

export default function JobsSettingsPage() {

    const dispatch = useDispatch()

    const jobs = useSelector((state: IState) => state.jobs.jobs)

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorRowId, setAnchorRowId] = useState<number>(0);

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    function handleDelete(selectedRows: readonly number[]) {

        //Здесь будет запрос на сервер удаляющий сотрудника
        // Но щас здесь консоль логи
        if (selectedRows.length > 1) {
            const toDelete = jobs.filter(job => selectedRows.indexOf(job.id) !== -1)
            toDelete.forEach(row => dispatch(deleteJobAction(row)))
        } else {
            const toDelete = jobs.filter(job => job.id === selectedRows[0])[0]

            dispatch(deleteJobAction(toDelete))

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
                // dispatch(selectJobAction(jobs.filter(job => job.id === anchorRowId)[0]))
                // dispatch(setModalNameAction('job'))
                break;

            case 'Редактировать':
                dispatch(selectJobAction(jobs.filter(job => job.id === anchorRowId)[0]))
                dispatch(setModalNameAction(JOB_ADD_MODAL_NAME))
                break;
        }

        handleMenuClose()
    }

    function createData(array: IJob[]) {

        const result: { id: number, tableRow: (string | JSX.Element)[] }[] = []

        array.map(job => (

            result.push({
                id: job.id,
                tableRow: [

                    <Typography pt={1} pb={1}>
                        {job.name}
                    </Typography>

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
                    title={'Должности'}
                    tableHead={['Название']}
                    tableBody={createData(jobs)}
                    addModal={JOB_ADD_MODAL_NAME}
                    onDelete={handleDelete}
                    onMenuOpen={handleMenuOpen}

                />
            </Grid>

        </Page>
    );
}
