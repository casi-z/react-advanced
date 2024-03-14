import {IHTTPError} from "@/types/types";

class HttpError {

    public status: number;
    public isError: boolean = true;
    public errors: any[]

    constructor(error: IHTTPError | unknown) {

        // @ts-ignore
        this.message = error.message
        this.isError = true
        // @ts-ignore
        this.status = error.status
        // @ts-ignore
        this.errors = error.errors
        // @ts-ignore
        console.log(`Ошибка на сервере (${this.status}): ${error.message}, ${this.errors}`)
    }


}

export default HttpError