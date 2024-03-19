import {FC, ReactChild, useEffect, useState} from 'react'
import {Autocomplete, Button, Grid, Paper, TextField} from '@mui/material'
import {useDispatch, useSelector} from "react-redux";
import {IState} from "@/types/types";
import {addProgramAction, editProgramAction, selectProgramAction} from "@/store/programsReducer";
import {setModalNameAction} from "@/store/modalReducer";
import Modal from "@/components/Modal/Modal";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import findMaxId from "@/utils/findMaxId";
import {PROGRAM_ADD_MODAL_NAME} from "@/data/modalNames";


interface ProgramAddModalProps {

    children?: ReactChild,

}

interface ITextFieldData {
    label: string,
    name: string,
    required: boolean,
    defaultValue?: string,
}

interface IAutocompleteData {
    label: string,
    name: string,
    defaultValue?: string,
    options: string[],
    value?: string,
    onChange?: (value: string | null) => void
}

const ProgramAddModal: FC<ProgramAddModalProps> = ({children}) => {

    const selectedProgram = useSelector((state: IState) => state.programs.selected)
    const programs = useSelector((state: IState) => state.programs.programs)

    const [type, setType] = useState<string>('Программа');
    const isEdit = selectedProgram !== null

    const dispatch = useDispatch()

    const [textFieldsData, setTextFieldsData] = useState<ITextFieldData[]>([
        {
            label: 'Название',
            name: 'name',
            required: true
        },
        {
            label: type === 'Программа' ? 'URL' : 'Исполняемый файл',
            name: 'url',
            required: true,

        },

    ]);

    const [autocompleteData, setAutocompleteData] = useState<IAutocompleteData[]>([
        {
            label: 'Группа',
            name: 'group',
            options: [
                'Бизнес',
                'Поисковые системы',
            ]
        },
        {
            label: 'Тип',
            name: 'type',
            options: [
                'Программа',
                'Сайт'
            ],
            onChange: handleTypeChange,
            value: type,
        },


    ]);

    function setInputDefaultValues() {

        if (isEdit) {
            const newTextFieldsData = textFieldsData.map(input => (
                //@ts-ignore
                {...input, defaultValue: selectedProgram[input.name]}
            ))
            setTextFieldsData(newTextFieldsData)
        } else {
            const newTextFieldsData = textFieldsData.map(input => (

                {...input, defaultValue: ''}
            ))
            setTextFieldsData(newTextFieldsData)
        }


    }

    function handleSubmit(event: any) {

        //Здесь будет отправка на сервер введённых в форму данных

        event.preventDefault()

        const formData = new FormData(event.target);
        console.log(formData.get('type'))
        if (isEdit) {

            dispatch(editProgramAction({
                //@ts-ignore
                id: selectedProgram.id,
                //@ts-ignore
                name: formData.get('name'),
                //@ts-ignore
                type: formData.get('type'),
                url: String(formData.get('url')),


            }))

        } else {

            dispatch(addProgramAction({

                id: findMaxId(programs) + 1,
                //@ts-ignore
                type: formData.get('type'),
                name: String(formData.get('name')),
                url: String(formData.get('url')),


            }))

        }


        //Закрываем модалку
        dispatch(setModalNameAction(''))

        if (isEdit) {
            dispatch(selectProgramAction(null))
        }
    }

    function handleTypeChange(value: string | null) {
        //@ts-ignore
        setType(value)
        const textFieldsDataCopy = [...textFieldsData]
        textFieldsDataCopy[1].label = value === 'Программа' ? 'Исполняемый файл' : 'Ссылка'
        setTextFieldsData(textFieldsDataCopy)

    }

    function handleClose() {

        //Очищаем selectedProgram при редактировании
        if (isEdit) {
            dispatch(selectProgramAction(null))
        }

    }

    useEffect(() => {


        setInputDefaultValues()

    }, [selectedProgram]);


    return (
        <Modal
            onClose={handleClose}
            onSubmit={event => handleSubmit(event)}
            component={'form'}
            width={50}
            name={PROGRAM_ADD_MODAL_NAME}
        >
            <Paper>
                <SectionTitle>
                    {isEdit ? 'Редактирование' : 'Создание'} {type === 'Программа' ? 'программы' : 'сайта'}
                </SectionTitle>
            </Paper>
            <Paper elevation={0} sx={{height: '100%', overflowY: 'auto'}}>

                <Grid pt={4} pl={3} pr={3} rowSpacing={3} container flexDirection={'column'} item xs={12}>

                    {textFieldsData.map((element, index) => (
                        <Grid key={index} item xs={6}>

                            <TextField
                                fullWidth
                                {...element}
                                variant="outlined"
                            />

                        </Grid>

                    ))}
                    {autocompleteData.map((element, index) => (
                        <Grid key={index} item xs={12} md={6}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={element.options}
                                onChange={(event: any, newValue: string | null) => {

                                    if (element.onChange) {
                                        element.onChange(newValue)
                                    }

                                }}
                                fullWidth
                                renderInput={(params) =>
                                    <TextField {...params} required name={element.name} label={element.label}
                                               defaultValue={element.defaultValue}/>
                                }
                            />

                        </Grid>

                    ))}
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
export default ProgramAddModal