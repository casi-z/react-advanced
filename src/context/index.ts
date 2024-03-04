import {createContext} from "react";
import {IGlobalContext} from "@/types/types";

export const GlobalContext = createContext<IGlobalContext>({
    breadcrumbs: undefined,
    //@ts-ignore
    setBreadcrumbs: undefined,
})