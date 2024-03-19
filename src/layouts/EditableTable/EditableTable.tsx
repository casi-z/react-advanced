import * as React from 'react'
import {FC, useState} from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid} from '@mui/material'
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import {alpha} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableBody from "@mui/material/TableBody";
import {red} from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import {useDispatch} from "react-redux";
import {setModalNameAction} from "@/store/modalReducer";
import MenuIcon from "@mui/icons-material/Menu";


interface EditableTableProps {
    //Название таблицы
    title: string,
    //Шапка таблицы
    tableHead: string[],
    //Тело таблицы (строки)
    //Содержит массив из обЬектов с id строки и данных в формате массива
    tableBody: { id: number, tableRow: (string | JSX.Element)[] }[],
    //Имя модалки которая откроется при добавлении строки
    addModal: string,
    //Функция срабатывает при удалении строк
    onDelete: (selectedRows: readonly number[]) => void

    onMenuOpen: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, rowId: number) => void


}

// Таблица которая поддерживает добавление и удаление строк
// Данные передаются через пропсы
// При добавлении открывает Modal через Redux
const EditableTable: FC<EditableTableProps> = ({title, tableHead, tableBody, addModal, onDelete, onMenuOpen}) => {

    const [selected, setSelected] = useState<readonly number[]>([]);

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const dispatch = useDispatch()

    function handleSelectAllClick(event: React.ChangeEvent<HTMLInputElement>) {

        if (event.target.checked) {

            const newSelected = tableBody.map((n) => n.id);
            setSelected(newSelected);
            return;

        }
        setSelected([]);
    };

    function handleSelectClick(event: React.MouseEvent<unknown>, id: number) {

        const selectedIndex = selected.indexOf(id);

        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {

            newSelected = newSelected.concat(selected, id);

        } else if (selectedIndex === 0) {

            newSelected = newSelected.concat(selected.slice(1));

        } else if (selectedIndex === selected.length - 1) {

            newSelected = newSelected.concat(selected.slice(0, -1));

        } else if (selectedIndex > 0) {

            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    function handleToggleDialog() {
        setDialogOpen(!dialogOpen)
    }

    function handleDelete() {
        setDialogOpen(false)

        onDelete(selected)
        setSelected([])

    }

    function handleAddPerson() {
        dispatch(setModalNameAction(addModal))
    }

    return (
        <>
            <Dialog
                onClose={handleToggleDialog}
                //keepMounted
                open={dialogOpen}
                //TransitionComponent={Transition}
                PaperProps={{
                    sx: {
                        background: red[400],
                        width: '100%',
                        m: 0,
                    }
                }}
            >

                <DialogTitle color={'white'} sx={{m: 0, p: 2}} id="customized-dialog-title">
                    Удаление
                </DialogTitle>

                <IconButton
                    aria-label="close"
                    onClick={handleToggleDialog}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: 'white',
                    }}
                >
                    <CloseIcon/>
                </IconButton>

                <DialogContent dividers>

                    <Typography color={'white'} gutterBottom>

                        {selected.length === 1
                            ? <>Cтрока {selected[0]} будет удалена безвозвратно (СОВСЕМ БЕЗВОЗВРАТНО!!)</>
                            : <>Выбранные строки будут удалены безвозвратно (СОВСЕМ БЕЗВОЗВРАТНО!!)</>
                        }

                    </Typography>

                </DialogContent>

                <DialogActions>

                    <Button autoFocus onClick={handleDelete}>
                        Удалить
                    </Button>

                </DialogActions>
            </Dialog>
            <Grid container>

                <Paper sx={{width: '100%', mb: 2, overflow: 'hidden'}}>

                    <Toolbar
                        sx={{
                            pl: {sm: 2},
                            pr: {xs: 1, sm: 1},
                            ...(selected.length > 0 && {
                                bgcolor: (theme) =>
                                    alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                            }),
                        }}
                    >
                        {selected.length > 0 ? (

                            <Typography
                                sx={{flex: '1 1 100%'}}
                                color="inherit"
                                variant="subtitle1"
                                component="div"
                            >
                                {selected.length} выбрано
                            </Typography>

                        ) : (

                            <SectionTitle>{title}</SectionTitle>

                        )}

                        {selected.length === 0 &&
                            <Button onClick={handleAddPerson} variant='contained'>
                                Добавить
                            </Button>
                        }


                        <Tooltip title="Удалить">

                            <IconButton onClick={handleToggleDialog} disabled={selected.length === 0}>

                                <DeleteIcon color={selected.length === 0 ? 'disabled' : 'error'}/>

                            </IconButton>

                        </Tooltip>

                    </Toolbar>

                    <TableContainer sx={{ height: '83vh' }}>

                        <Table
                            stickyHeader
                        >
                            <TableHead>

                                <TableRow>

                                    <TableCell padding="checkbox">

                                        <Checkbox
                                            className={'checkbox'}
                                            color="primary"
                                            indeterminate={selected.length > 0 && selected.length < tableBody.length}
                                            checked={tableBody.length > 0 && selected.length === tableBody.length}
                                            onChange={handleSelectAllClick}
                                            inputProps={{
                                                'aria-label': 'select all rows',
                                            }}
                                        />

                                    </TableCell>

                                    <TableCell>
                                        &nbsp;
                                    </TableCell>

                                    {tableHead.map((item, index) => (
                                        <TableCell key={index}>{item}</TableCell>
                                    ))}
                                </TableRow>

                            </TableHead>

                            <TableBody>
                                {tableBody.map(item => {
                                    const isItemSelected = isSelected(item.id);
                                    const labelId = `enhanced-table-checkbox-${item.id}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleSelectClick(event, item.id)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={item.id}
                                            selected={isItemSelected}
                                            sx={{cursor: 'pointer'}}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox

                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>

                                            <TableCell padding="checkbox">
                                                <IconButton
                                                    onClick={event => {
                                                        event.stopPropagation()
                                                        onMenuOpen(event, item.id)
                                                    }}
                                                >
                                                    <MenuIcon/>
                                                </IconButton>
                                            </TableCell>

                                            {item.tableRow.map((rowItem: any, index: number) => (
                                                <TableCell key={index}>
                                                    {rowItem}
                                                </TableCell>

                                            ))}


                                        </TableRow>
                                    );
                                })}

                            </TableBody>

                        </Table>

                    </TableContainer>

                </Paper>

            </Grid>
        </>
    )
}
export default EditableTable