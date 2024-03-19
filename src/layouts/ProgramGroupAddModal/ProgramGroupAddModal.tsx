import {FC, ReactChild, useEffect, useState} from 'react'
import {Autocomplete, Button, Grid, Paper, TextField} from '@mui/material'
import {useDispatch, useSelector} from "react-redux";
import {IProgramGroup, IState} from "@/types/types";
import {addProgramGroupAction, editProgramGroupAction, selectProgramGroupAction} from "@/store/programGroupsReducer";
import {setModalNameAction} from "@/store/modalReducer";
import Modal from "@/components/Modal/Modal";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import findMaxId from "@/utils/findMaxId";
import {PROGRAM_GROUP_ADD_MODAL_NAME} from "@/data/modalNames";


interface ProgramGroupAddModalProps {

    children?: ReactChild,

}

interface ITextFieldData {
    label: string,
    name: string,
    required: boolean,
    defaultValue?: string,
}

const ProgramGroupAddModal: FC<ProgramGroupAddModalProps> = ({children}) => {

    const selectedProgramGroup = useSelector((state: IState) => state.programGroups.selected)
    const programGroups = useSelector((state: IState) => state.programGroups.programGroups)

    const isEdit = selectedProgramGroup !== null

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
            {...input, defaultValue: selectedProgramGroup[input.name]}
        ))
        setTextFieldsData(newTextFieldsData)


    }

    function calcParentId(parentName: FormDataEntryValue | null){
        if(!parentName){
            return null
        }
        return programGroups.filter(programGroup => programGroup.name === parentName)[0].id
    }

    function handleSubmit(event: any) {

        //Здесь будет отправка на сервер введённых в форму данных

        event.preventDefault()

        const formData = new FormData(event.target);
        if (isEdit) {
            dispatch(editProgramGroupAction({

                id: selectedProgramGroup.id,
                //@ts-ignore
                name: formData.get('name'),
                parentId: calcParentId(formData.get('group'))

            }))
        } else {
            dispatch(addProgramGroupAction({

                id: findMaxId(programGroups) + 1,
                //@ts-ignore
                name: formData.get('name'),
                parentId: calcParentId(formData.get('group'))

            }))
        }


        //Закрываем модалку
        dispatch(setModalNameAction(''))

        if (isEdit) {
            dispatch(selectProgramGroupAction(null))
        }
    }

    function handleClose() {

        //Очищаем selectedProgramGroup при редактировании
        if (isEdit) {
            dispatch(selectProgramGroupAction(null))
        }

    }

    function groupAutocomplete(option: IProgramGroup) {
        if (option.parentId === null) {
            return ''
        }
        return programGroups.filter(programGroup => programGroup.id === option.parentId)[0].name
    }

    useEffect(() => {
        if (isEdit) {
            setInputDefaultValues()
        }
    }, [selectedProgramGroup]);


    return (
        <Modal onClose={handleClose} onSubmit={event => handleSubmit(event)} component={'form'} width={50}
               name={PROGRAM_GROUP_ADD_MODAL_NAME}>
            <Paper>
                <SectionTitle>
                    {isEdit ? 'Редактирование' : 'Создание'} группы программ
                </SectionTitle>
            </Paper>
            <Paper elevation={0} sx={{height: '100%', overflowY: 'auto'}}>

                <Grid pt={4} pl={3} pr={3} rowSpacing={4} container flexDirection={"column"}>

                    {textFieldsData.map((element, index) => (
                        <Grid key={index} item xs={12} md={6}>

                            <TextField
                                fullWidth
                                {...element}
                                variant="outlined"
                            />

                        </Grid>

                    ))}

                    <Grid item xs={12} md={6}>

                        <Autocomplete
                            fullWidth
                            options={programGroups}
                            groupBy={groupAutocomplete}
                            getOptionLabel={option => option.name}

                            renderInput={
                                params =>
                                    <TextField {...params} name={'group'} label="Группа"/>
                            }

                        />

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
export default ProgramGroupAddModal