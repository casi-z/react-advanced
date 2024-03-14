import {FC, useEffect, useState} from 'react'

import {Box, styled, useTheme} from '@mui/material'

import './Cursor.css' //Файл отключает стандартный курсор везде


/*
 Этот компонент добавляет кастомный курсор
 в виде HTML элемента, который следует за мышкой
* */
const Cursor: FC = () => {

    const [cursorParams, setCursorParams] = useState({
        X: -1000,
        Y: -1000,
        style: 'none',
    })

    const theme = useTheme()

    const isCursorVisible = theme.breakpoints.down('sm')

    const S_Cursor = styled(Box)({

        mixBlendMode: 'difference', //Инверсия цветов
        position: "fixed",
        zIndex: 99,
        top: cursorParams.Y,
        left: cursorParams.X,
        width: '1.7vw',
        height: '1.7vw',
        borderRadius: '50%',
        transitionProperty: 'transform, background, border',
        transitionDuration: '400ms',
        pointerEvents: 'none',
        border: cursorParams.style === 'pointer'
            ? '2px solid white'
            : 'none'
        ,

        background: cursorParams.style === 'pointer' ? 'none' : 'white',

        transform: cursorParams.style === 'pointer'
            ? 'scale(1.6) translate(-50%, -50%)'
            : 'translate(-50%, -50%)'
        ,
        // Убираем курсор на планшетах и телефонах
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },

    })

    function cursorMove() {

        // Позиционируем курсор по координатам мышки

        window.addEventListener('mousemove', (event: MouseEvent) => {

            setCursorParams(prevState => {

                return {...prevState, X: (event.clientX), Y: (event.clientY)}

            })

            // Меняем курсор при наведении на кликабельные элементы

            const target: any = event?.target

            const isTargetPointed = target.getAttribute('data-cursor-pointer')
                || target.tagName == 'A'
                || target.tagName == 'BUTTON'

            if (isTargetPointed) {

                setCursorParams(prevState => {

                    return {...prevState, style: 'pointer'}

                })

            } else {

                if (target.className !== 'Cursor') {

                    setCursorParams(prevState => {

                        return {...prevState, style: 'none'}

                    })

                }
            }
        })
    }

    useEffect(() => {

        if (isCursorVisible) {
            cursorMove()
        }

    }, [])


    return (
        <S_Cursor/>
    )

}
export default Cursor