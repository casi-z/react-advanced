import {FC, ReactChild} from 'react'
import {Box, Link} from '@mui/material'


interface ErrorPageProps {

    children?: ReactChild,

}

const ErrorPage: FC<ErrorPageProps> = ({children}) => {


    const errorsData = {
        '404': 'Запрошенный ресурс не найден',
        '502': 'Ошибка на сервере'

    }


    //@ts-ignore

    let code = '404'

    if (errorsData.hasOwnProperty(window.location.search.slice(6))) {
        code = window.location.search.slice(6)
    }
    //@ts-ignore
    let error = errorsData[code]

    return (


        <Box className="ErrorPage error">
            <Box className='error__data'>
                <Box component={'h1'}>
                    {code}
                </Box>
                <Box component={'span'} className='error__text'>
                    {error}
                    &nbsp;
                    <Link href='/'>На главную</Link>
                </Box>
            </Box>
        </Box>

    )
}
export default ErrorPage