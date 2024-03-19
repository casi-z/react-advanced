import {FC, ReactChild, ReactNode} from 'react'
import {Drawer, useTheme} from '@mui/material'
import {useDispatch, useSelector} from "react-redux";
import {setModalNameAction} from "@/store/modalReducer";
import {IState} from "@/types/types";


interface ModalProps {
    children: ReactChild | ReactNode,
    name: string,
    width?: number,
    component?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined,
    onSubmit?: (event: any) => void,
    onClose?: () => void
}

const Modal: FC<ModalProps> =
    ({
         children,
         name,
         width,
         component,
         onSubmit,
         onClose
     }) => {

        const theme = useTheme()
        const dispatch = useDispatch()

        const openModalName = useSelector((state: IState) => state.modal.open)

        const open = name === openModalName

        function closeDrawer() {

            dispatch(setModalNameAction(''))

            if (onClose) {
                onClose()
            }
        };
        return (
            <Drawer
                anchor={'right'}
                open={open}
                onSubmit={onSubmit}
                component={component}
                PaperProps={{
                    sx: {
                        width: {
                            md: `${width || 70}%`,
                            xs: "90%"
                        },

                        background: theme.palette.secondary.main
                    },

                }}
                onClose={closeDrawer}

            >
                {children}
            </Drawer>
        )
    }
export default Modal