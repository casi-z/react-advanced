import {IProgram, ISite} from "@/types/types";

export default abstract class ID {

     static setNewId(object: {id: number} ){
         const id = object.id

        if(Math.sign(id) === 1){

            return id * -1

        }
        else {
            return {...object, id: id}
        }
    }

    static deleteNewId(object: {id: number} | IProgram | ISite ){
        const id = object.id

        if(Math.sign(id) === -1){

            return id * -1

        }
        else {
            return {...object, id: id}
        }
    }

     static arrayDeleteNewId(array: { id: number }[] | ISite[] | IProgram[]){

        if (Math.sign(array[0].id) === -1) {

            return array.map(element => {

                const id = element.id * -1
                return {...element, id: id}

            })

        } else {
            return array
        }
    }
     static arraySetNewId(array: { id: number }[] | ISite[] | IProgram[]){

        if (Math.sign(array[0].id) === 1) {

            return array.map(element => {

                const newId = 0 - element.id
                return {...element, id: newId}

            })

        } else {
            return array
        }
    }
}
