import {FC, ReactChild, useEffect, useState} from 'react'
import {Autocomplete, Avatar, Button, Grid, Paper, styled, TextField} from '@mui/material'
import Modal from "@/components/Modal/Modal";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import AddIcon from '@mui/icons-material/Add';
import {useDispatch, useSelector} from "react-redux";
import {IState} from "@/types/types";
import {addPersonAction, editPersonAction, selectPersonAction} from "@/store/personsReducer";
import {setModalNameAction} from "@/store/modalReducer";
import findMaxId from "@/utils/findMaxId";
import {setDepartmentsAction} from "@/store/departmentsReducer";
import stringToColor from "@/utils/stringToColor";
import {PERSON_ADD_MODAL_NAME} from "@/data/modalNames";


interface PersonAddModalProps {

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
}

const PersonAddModal: FC<PersonAddModalProps> = ({children}) => {

    const selectedPerson = useSelector((state: IState) => state.persons.selected)
    const persons = useSelector((state: IState) => state.persons.persons)
    const departments = useSelector((state: IState) => state.departments.departments)
    const isEdit = selectedPerson !== null
    const dispatch = useDispatch()

    const [avatar, setAvatar] = useState<string>('');
    const [departmentsOptions, setDepartmentsOptions] = useState<string[]>(departments.map(department => department.name));

    const [textFieldsData, setTextFieldsData] = useState<ITextFieldData[]>([
        {
            label: 'Имя',
            name: 'name',
            required: true
        },
        {
            label: 'Фамилия',
            name: 'surname',
            required: true
        },
        {
            label: 'Отчество',
            name: 'lastname',
            required: false
        },
        {
            label: 'Дата рождения',
            name: 'birthDate',
            required: true
        },
        {
            label: 'Эл. почта',
            name: 'email',
            required: true
        },
        {
            label: 'WhatsApp',
            name: 'WhatsApp',
            required: false
        },
        {
            label: 'Viber',
            name: 'Viber',
            required: false
        },
        {
            label: 'Telegram',
            name: 'Telegram',
            required: false
        },
        {
            label: 'Вконтакте',
            name: 'vk',
            required: false
        },


    ]);

    const [autocompleteData, setAutocompleteData] = useState<IAutocompleteData[]>([
        {
            label: 'Отдел',
            name: 'department',
            options: departmentsOptions
        },
        {
            label: 'Должность',
            name: 'job',
            options: [
                'Разработчик',
                'Маркетолог'
            ]
        },
        {
            label: 'Расписание',
            name: 'schedule',
            options: [
                '5-ти дневное',
            ]
        },
        {
            label: 'Отвлечения',
            name: 'distraction',
            options: [
                '(Нет)',
                'HR'
            ]
        },


    ]);


    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });


    useEffect(() => {
        //@ts-ignore
        setDepartmentsAction(departments.map(department => department.name))
    }, [departments]);

    function setInputDefaultValues() {

        const newTextFieldsData = textFieldsData.map(input => (
            //@ts-ignore
            {...input, defaultValue: selectedPerson[input.name]}
        ))
        setTextFieldsData(newTextFieldsData)

        const newAutocompleteData = autocompleteData.map(autocomplete => (
            //@ts-ignore
            {...autocomplete, defaultValue: selectedPerson[autocomplete.name]}
        ))
        setAutocompleteData(newAutocompleteData)


    }

    function handleUploadPhoto(event: React.ChangeEvent<HTMLInputElement>) {

        // @ts-ignore
        setAvatar(URL.createObjectURL(event.currentTarget.files[0]))
    }

    function handleSubmit(event: any) {

        //Здесь будет отправка на сервер введённых в форму данных

        event.preventDefault()

        const formData = new FormData(event.target);
        if (isEdit) {
            dispatch(editPersonAction({
                //@ts-ignore
                id: selectedPerson?.id,
                //@ts-ignore
                surname: formData.get('surname'),
                name: String(formData.get('name')),
                lastname: String(formData.get('lastname')),

                avatar: avatar,
                job: String(formData.get('job')),
                department: String(formData.get('department')),

            }))
        } else {
            dispatch(addPersonAction({

                id: findMaxId(persons) + 1,
                //@ts-ignore
                surname: formData.get('surname'),
                name: String(formData.get('name')),
                lastname: String(formData.get('lastname')),

                avatar: avatar,
                job: String(formData.get('job')),
                department: String(formData.get('department')),

            }))
        }

        //Закрываем модалку
        dispatch(setModalNameAction(''))

        if (isEdit) {
            dispatch(selectPersonAction(null))
        }
    }

    function handleClose() {

        //Очищаем selectedPerson при редактировании
        if (isEdit) {
            dispatch(selectPersonAction(null))
        }

    }

    useEffect(() => {
        if (isEdit) {
            setInputDefaultValues()
        }
    }, [selectedPerson]);

    return (
        <Modal onClose={handleClose} onSubmit={event => handleSubmit(event)} component={'form'} width={50}
               name={PERSON_ADD_MODAL_NAME}>

            <Paper>
                <SectionTitle>
                    Создание сотрудника
                </SectionTitle>
            </Paper>
            <Paper elevation={0} sx={{height: '100%', overflowY: 'auto'}}>


                <Grid pt={4} pl={3} pr={3} rowSpacing={3} container>

                    <Grid pb={3} container item xs={12}>

                        <Avatar
                            src={avatar}
                            sx={{
                                width: 64,
                                height: 64,
                                fontSize: '3rem',
                                bgcolor: selectedPerson ? stringToColor(selectedPerson.name) : '',
                            }}
                        >
                            {selectedPerson ? selectedPerson.surname[0] + selectedPerson.name[0] : '?'}
                        </Avatar>
                        <Button
                            startIcon={<AddIcon/>}
                            component="label"
                            role={undefined}

                        >

                            <VisuallyHiddenInput onChange={(event) => handleUploadPhoto(event)} name={'avatar'}
                                                 type="file" accept='image/*'/>

                            Добавить фото
                        </Button>

                    </Grid>

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

                        {autocompleteData.map((element, index) => (
                            <Grid key={index} item xs={12} md={6}>

                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={element.options}
                                    fullWidth
                                    renderInput={(params) =>
                                        <TextField {...params} required name={element.name} label={element.label}
                                                   defaultValue={element.defaultValue}/>
                                    }
                                />

                            </Grid>

                        ))}


                    </Grid>

                </Grid>

            </Paper>

            <Paper elevation={0}>

                <Grid pl={3} pt={3} pb={3} item xs={12}>

                    <Button type={"submit"} size={'large'} variant={'contained'}>
                        Добавить
                    </Button>
                </Grid>

            </Paper>

        </Modal>
    )
}
export default PersonAddModal