import {FC, ReactChild, useEffect, useState} from 'react'
import {Button, Grid, Paper, TextField} from '@mui/material'
import {useDispatch, useSelector} from "react-redux";
import {IState} from "@/types/types";
import {addDepartmentAction, editDepartmentAction, selectDepartmentAction} from "@/store/departmentsReducer";
import {setModalNameAction} from "@/store/modalReducer";
import Modal from "@/components/Modal/Modal";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import departments from "@/data/fake/department";
import findMaxId from "@/utils/findMaxId";
import {DEPARTMENT_ADD_MODAL_NAME} from "@/data/modalNames";


interface DepartmentAddModalProps {

    children?: ReactChild,

}

interface ITextFieldData {
    label: string,
    name: string,
    required: boolean,
    defaultValue?: string,
}

const DepartmentAddModal: FC<DepartmentAddModalProps> = ({children}) => {

    const selectedDepartment = useSelector((state: IState) => state.departments.selected)
    const isEdit = selectedDepartment !== null
    const dispatch = useDispatch()

    const [textFieldsData, setTextFieldsData] = useState<ITextFieldData[]>([
        {
            label: 'Название',
            name: 'name',
            required: true
        },

    ]);

    function setInputDefaultValues() {

        const newTextFieldsData = textFieldsData.map(input => (
            //@ts-ignore
            {...input, defaultValue: selectedDepartment[input.name]}
        ))
        setTextFieldsData(newTextFieldsData)


    }

    function handleSubmit(event: any) {

        //Здесь будет отправка на сервер введённых в форму данных

        event.preventDefault()

        const formData = new FormData(event.target);
        if (isEdit) {
            dispatch(editDepartmentAction({

                id: selectedDepartment.id,
                //@ts-ignore
                name: formData.get('name')

            }))
        } else {
            dispatch(addDepartmentAction({

                id: findMaxId(departments) + 1,
                //@ts-ignore
                name: formData.get('name')

            }))
        }

        //Закрываем модалку
        dispatch(setModalNameAction(''))

        if (isEdit) {
            dispatch(selectDepartmentAction(null))
        }
    }

    function handleClose() {

        //Очищаем selectedDepartment при редактировании
        if (isEdit) {
            dispatch(selectDepartmentAction(null))
        }

    }

    useEffect(() => {
        if (isEdit) {
            setInputDefaultValues()
        }
    }, [selectedDepartment]);


    return (
        <Modal onClose={handleClose} onSubmit={event => handleSubmit(event)} component={'form'} width={50}
               name={DEPARTMENT_ADD_MODAL_NAME}>
            <Paper>
                <SectionTitle>
                    {isEdit ? 'Редактирование' : 'Создание'} отдела
                </SectionTitle>
            </Paper>
            <Paper elevation={0} sx={{height: '100%', overflowY: 'auto'}}>

                <Grid pt={4} pl={3} pr={3} rowSpacing={3} container>
                    <Grid container rowSpacing={5} columnSpacing={4}>

                        {textFieldsData.map((element, index) => (
                            <Grid key={index} item xs={12} md={6}>

                                <TextField
                                    fullWidth
                                    {...element}
                                    variant="outlined"
                                />

                            </Grid>

                        ))}
                    </Grid>
                </Grid>

            </Paper>
            <Paper elevation={0}>

                <Grid pl={3} pt={3} pb={3} item xs={12}>

                    <Button type={"submit"} size={'large'} variant={'contained'}>
                        {isEdit ? 'Изменить' : 'Создать'}
                    </Button>
                </Grid>

            </Paper>


        </Modal>
    )
}
export default DepartmentAddModal