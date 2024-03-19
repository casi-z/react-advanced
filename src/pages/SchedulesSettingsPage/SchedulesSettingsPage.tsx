import * as React from 'react';
import {useState} from 'react';
import Page from "@/components/Page/Page";
import {useDispatch, useSelector} from "react-redux";
import {ISchedule, IState} from "@/types/types";
import EditableTable from "@/layouts/EditableTable/EditableTable";
import {deleteScheduleAction, selectScheduleAction} from "@/store/schedulesReducer";
import {setModalNameAction} from "@/store/modalReducer";
import EditMenu from "@/components/EditMenu/EditMenu";
import {Grid, Typography} from "@mui/material";
import {SCHEDULE_ADD_MODAL_NAME} from "@/data/modalNames";

export default function SchedulesSettingsPage() {

    const dispatch = useDispatch()

    const schedules = useSelector((state: IState) => state.schedules.schedules)

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorRowId, setAnchorRowId] = useState<number>(0);

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    function handleDelete(selectedRows: readonly number[]) {

        //Здесь будет запрос на сервер удаляющий сотрудника
        // Но щас здесь консоль логи
        if (selectedRows.length > 1) {
            const toDelete = schedules.filter(schedule => selectedRows.indexOf(schedule.id) !== -1)
            toDelete.forEach(row => dispatch(deleteScheduleAction(row)))
        } else {
            const toDelete = schedules.filter(schedule => schedule.id === selectedRows[0])[0]

            dispatch(deleteScheduleAction(toDelete))

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
                dispatch(selectScheduleAction(schedules.filter(schedule => schedule.id === anchorRowId)[0]))
                dispatch(setModalNameAction('schedule'))
                break;

            case 'Редактировать':
                dispatch(selectScheduleAction(schedules.filter(schedule => schedule.id === anchorRowId)[0]))
                dispatch(setModalNameAction(SCHEDULE_ADD_MODAL_NAME))
                break;
        }

        handleMenuClose()
    }

    function createData(array: ISchedule[]) {

        const result: { id: number, tableRow: (string | JSX.Element)[] }[] = []

        array.map(schedule => (

            result.push({
                id: schedule.id,
                tableRow: [

                    <Typography pt={1} pb={1}>
                        {schedule.name}
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
                    title={'Расписание'}
                    tableHead={['Название']}
                    tableBody={createData(schedules)}
                    addModal={SCHEDULE_ADD_MODAL_NAME}
                    onDelete={handleDelete}
                    onMenuOpen={handleMenuOpen}

                />
            </Grid>

        </Page>
    );
}
