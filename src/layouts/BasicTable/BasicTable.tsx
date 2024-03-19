import React, {FC} from 'react'
import {
    Grid,
    Paper,
    styled,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    useTheme
} from '@mui/material'
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const {log} = console

interface BasicTableProps {

    //Название таблицы
    title: string,
    //Шапка таблицы
    tableHead: string[],
    //Тело таблицы (строки)
    //Содержит массив из обЬектов с id строки и данных в формате массива
    tableBody: (string | JSX.Element)[][],
    fixed?: boolean,
    height?: number,
    size?: "small" | "medium" | undefined,
    sx?: any,
    onSearchChange?: (search: string) => void,
    searchValue?: string,
}

const BasicTable: FC<BasicTableProps> = (
    {
        title,
        tableHead,
        tableBody,
        fixed,
        height,
        size,
        sx,
        onSearchChange,
        searchValue,
    }
) => {

    const theme = useTheme()

    const StyledTable = styled(Table)(() =>({
        '.ContentTableRow':{
            borderColor: theme.palette.mode === 'light' ? '#eaeaea' : ''
        },
        '.table-row-enter': {
            opacity: 0,
        },
        '.table-row-enter-active': {
            opacity: 1,
            transition: 'opacity 500ms ease-in',
        },
        '.table-row-exit': {
            opacity: 1,
        },
        '.table-row-exit-active': {
            opacity: 0,
            transition: 'opacity 500ms ease-in',
        },
    }))

    return (
        <Grid container>
            <Paper sx={{width: '100%', overflow: 'hidden'}}>

                <SectionTitle
                    search={!!onSearchChange}
                    onSearchChange={onSearchChange}
                    searchValue={searchValue}
                >
                    {title}
                </SectionTitle>

                <TableContainer
                    sx={{height: `${height}vh` || '83vh'}}
                >
                    <StyledTable
                        size={size || undefined}
                        sx={{
                            tableLayout: {
                                md: fixed ? 'fixed' : '',
                                xs: 'auto'
                            },
                            ...sx
                        }}
                        stickyHeader
                    >
                        <TableHead>
                            <TableRow>

                                {tableHead.map((title, index) =>

                                    <TableCell key={index}>{title}</TableCell>
                                )}

                            </TableRow>
                        </TableHead>

                        <TableBody>

                            <TransitionGroup component={React.Fragment}>
                                {tableBody.map((tableRow, index) =>

                                    <CSSTransition
                                        key={index}
                                        timeout={500}
                                        classNames="item"
                                    >

                                        <TableRow className={'ContentTableRow'}>

                                            {tableRow.map((rowItem, index) => (
                                                <TableCell className={'ContentTableCell'} align="left" key={index}>
                                                    {rowItem}
                                                </TableCell>

                                            ))}

                                        </TableRow>

                                    </CSSTransition>

                                )}

                            </TransitionGroup>

                        </TableBody>


                    </StyledTable>

                </TableContainer>

            </Paper>

        </Grid>

    )
}
export default BasicTable