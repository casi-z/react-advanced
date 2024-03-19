import * as React from 'react';
import {useState} from 'react';
import Page from "@/components/Page/Page";
import {useDispatch, useSelector} from "react-redux";
import {IProgramGroup, IState} from "@/types/types";
import EditableTable from "@/layouts/EditableTable/EditableTable";
import {deleteProgramGroupAction, selectProgramGroupAction} from "@/store/programGroupsReducer";
import {setModalNameAction} from "@/store/modalReducer";
import EditMenu from "@/components/EditMenu/EditMenu";
import {Grid, Typography} from "@mui/material";
import {PROGRAM_GROUP_ADD_MODAL_NAME} from "@/data/modalNames";

export default function ProgramGroupsSettingsPage() {

    const dispatch = useDispatch()

    const programGroups = useSelector((state: IState) => state.programGroups.programGroups)

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorRowId, setAnchorRowId] = useState<number>(0);

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    function handleDelete(selectedRows: readonly number[]) {

        //Здесь будет запрос на сервер удаляющий сотрудника
        // Но щас здесь консоль логи
        if (selectedRows.length > 1) {
            const toDelete = programGroups.filter(programGroup => selectedRows.indexOf(programGroup.id) !== -1)
            toDelete.forEach(row => dispatch(deleteProgramGroupAction(row)))
        } else {
            const toDelete = programGroups.filter(programGroup => programGroup.id === selectedRows[0])[0]

            dispatch(deleteProgramGroupAction(toDelete))

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
                // dispatch(selectProgramGroupAction(programGroups.filter(programGroup => programGroup.id === anchorRowId)[0]))
                // dispatch(setModalNameAction('programGroup'))
                break;

            case 'Редактировать':
                dispatch(selectProgramGroupAction(programGroups.filter(programGroup => programGroup.id === anchorRowId)[0]))
                dispatch(setModalNameAction(PROGRAM_GROUP_ADD_MODAL_NAME))
                break;
        }

        handleMenuClose()
    }

    function createData(array: IProgramGroup[]) {

        return array.map(programGroup => {

            //Выводим все родительские группы программ
            let parentGroupsNames = ''
            if (programGroup.parentId !== null) {

                let parent = array.filter(item => item.id === programGroup.parentId)[0]

                if (parent) {

                    if (parent.parentId === null) {

                        parentGroupsNames = parent.name

                    } else {

                        while (true) {

                            parentGroupsNames = parent.name + ' — ' + parentGroupsNames

                            if (parent.parentId === null) {
                                break
                            }

                            const parentClone = structuredClone(parent)
                            parent = array.filter(item => item.id === parentClone.parentId)[0]


                        }
                        parentGroupsNames = parentGroupsNames.slice(0, -3)
                    }
                }

            } else {
                //Выводим (Нет) если у группы нет родителей (она первого уровня)
                parentGroupsNames = '(Нет)'
            }

            return {
                id: programGroup.id,
                tableRow: [

                    <Typography pt={1} pb={1}>
                        {programGroup.name}
                    </Typography>,

                    <Typography pt={1} pb={1}>
                        {parentGroupsNames}
                    </Typography>

                ]
            }

        })

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
                    title={'Группы программ'}
                    tableHead={['Название', 'Группа']}
                    tableBody={createData(programGroups)}
                    addModal={PROGRAM_GROUP_ADD_MODAL_NAME}
                    onDelete={handleDelete}
                    onMenuOpen={handleMenuOpen}

                />
            </Grid>
        </Page>
    );
}
