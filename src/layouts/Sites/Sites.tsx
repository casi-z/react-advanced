import React, {ReactChild, FC, useState, useEffect} from 'react'
import {Box, useTheme} from '@mui/material'
import ItemCard from "@/components/ItemCard/ItemCard";
import {IProgram, ISite} from "@/types/types";

const {log} = console

interface SitesProps {

    get?: 'popular' | 'illegal',
    data: ISite[] | IProgram[]

}

const Sites: FC<SitesProps> = ({get, data}) => {
    const theme = useTheme()


    const [filteredSites, setFilteredSites] = useState<ISite[] | IProgram[]>([]);

    function sortByTime(data: ISite[] | IProgram[]){

        setFilteredSites(data.sort((a, b) => {

            // @ts-ignore
            if(a.time.all?.hours > a.time.all?.hours){
                return -1
            }

            // @ts-ignore
            if(a.time.all?.hours < a.time.all?.hours){
                return 1
            }

            return 0

        }))

    }

    useEffect(() => {

        if (get) {

            if (get === 'illegal') {
                const filt = data.filter(item => !item.legal)
                sortByTime(filt)

            } else if (get === 'popular') {

                sortByTime(data)

            }

        } else {
            setFilteredSites(data)
        }
    }, [])

    return (
        <>
            {filteredSites.map((site, index) => (

                <ItemCard key={index} title={site.name} info={`${site.time.all?.hours} ч.`}/>
            ))}

        </>
    )
}
export default Sites