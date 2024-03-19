import React, {FC, ReactChild, ReactNode} from 'react'
import {Divider, Grid, InputAdornment, TextField, Typography} from '@mui/material'
import {Close, Search} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";


interface SectionTitleProps {

    children: ReactChild | ReactNode,
    tabs?: ReactChild | ReactNode,
    search?: boolean
    searchValue?: string,
    onSearchChange?: (search: string) => void,
}


const SectionTitle: FC<SectionTitleProps> = ({children, tabs, search, searchValue, onSearchChange}) => {

    return (<>
        <Grid
            container
            pt={tabs ? 0.5 : 2}
            pb={tabs ? 0.5 : 2}
            pl={{md: 4, xs: 0.5}}
            pr={{md: 0, xs: 0.5}}
            flexWrap={"nowrap"}
            flexDirection={{xs: (search || tabs) ? 'column' : 'row', md: 'row'}}
            alignItems={{md: 'center', xs: 'flex-start'}}
            justifyContent={'space-between'}
        >
            <Typography variant={'h2'}>
                {children}
            </Typography>

            {tabs}

            {search &&

                <TextField
                    variant="standard"
                    label="Поиск"
                    value={searchValue}
                    onChange={event => onSearchChange && onSearchChange(event.target.value.trim())}

                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">

                                <Search/>

                            </InputAdornment>
                        ),

                        startAdornment: searchValue && (
                            <InputAdornment position="start">

                                <IconButton onClick={() => onSearchChange && onSearchChange('')}>

                                    <Close fontSize={'small'}/>

                                </IconButton>

                            </InputAdornment>
                        ),
                    }}

                />
            }

        </Grid>

        <Divider/>
    </>)
}
export default SectionTitle